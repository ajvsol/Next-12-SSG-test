import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import Link from "next/link";
import { Beer } from "@/types/types";
import Hero from "@/components/Hero";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// GetStaticPaths is used to generate the paths for the dynamic pages that are going to be pre-rendered
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `https://api.punkapi.com/v2/beers?page=1&per_page=80`
  );

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    paths: data.map((el: Beer) => {
      params: {
        id: el.id.toString();
      }
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //console.log(`getServerSideProps`);

  const res = await fetch(`https://api.punkapi.com/v2/beers/${params?.id}`);

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};

export default function BeerPage({ data }: any) {
  const router = useRouter();

  const ingred = data[0].ingredients;

  let page = data[0].id;

  const [pageNumber, setPageNumber] = useState(page);

  const renderedHopNames = new Set();

  const redirectPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prevPageNumber: number) => prevPageNumber - 1);
      router.push(`/beers/${pageNumber - 1}`);
    } else {
      router.push(`/`);
    }
  };

  const redirectNextPage = () => {
    setPageNumber((prevPageNumber: number) => prevPageNumber + 1);
    router.push(`/beers/${pageNumber + 1}`);
  };

  return (
    <div className="bg-cyan-700 h-full w-full">
      <Hero heading={data[0].name} message={data[0].tagline} />
      <div className="flex justify-center p-4">
        <Link href="/">
          <button
            className="border-2
        bg-cyan-200
        box-border
        h-10
        w-32
        border-cyan-200
        text-slate-900
        rounded-md
        shadow-md
        shadow-cyan-900
        z-10
        hover:bg-emerald-300 
        hover:border-emerald-300
        hover:text-slate-900 "
          >
            HOME
          </button>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div
          className="bg-cyan-200 h-full w-128 flex flex-col justify-center items-start p-10 gap-3  rounded-3xl
      shadow-md
      shadow-cyan-900"
        >
          <div className="m-auto pb-4">
            <Image
              src={data[0].image_url}
              alt="image"
              width={130}
              height={130}
            />
          </div>
          <h1 className="text-3xl text-slate-800 font-bold text-center">
            {data[0].name}
          </h1>
          <h2 className="text-md text-slate-900 ">"{data[0].tagline}"</h2>
          <h3 className="text-2xl text-cyan-800 ">{data[0].abv}% ABV</h3>
          <span className="h-1 w-full bg-cyan-700 lg:w-1/3"></span>
          <p className="text-lg text-slate-900 ">{data[0].description} </p>
          <h3 className="text-2xl text-cyan-800 ">Food Pairings:</h3>
          <span className="h-1 w-full bg-cyan-700 lg:w-1/3"></span>
          {data[0].food_pairing.map((food: any) => {
            return (
              <p className="text-md text-slate-900 " key={food}>
                {food}
              </p>
            );
          })}
          <h3 className="text-2xl  text-cyan-800  text-left">Ingredients:</h3>
          <span className="h-1 w-full bg-cyan-700 lg:w-1/3"></span>
          <h4 className="text-xl  text-cyan-800   text-left ">Malts:</h4>
          <ul>
            {ingred.malt.map((malt: any) => (
              <li className="text-md text-slate-900 text-left " key={malt.name}>
                {malt.name}
              </li>
            ))}
          </ul>
          <h4 className="text-xl  text-cyan-800   text-left">Hops:</h4>

          <ul>
            {ingred.hops.map((hop: any) => {
              if (!renderedHopNames.has(hop.name)) {
                renderedHopNames.add(hop.name);
                return (
                  <li
                    className="text-md text-slate-900 text-left "
                    key={hop.name}
                  >
                    {hop.name}
                  </li>
                );
              }
              return null;
            })}
          </ul>
          <h4 className="text-xl  text-cyan-800   text-left">Yeast:</h4>

          <p className="text-md text-slate-900 text-left">{ingred.yeast}</p>
        </div>
        <div className=" flex p-5 gap-5">
          <button
            onClick={redirectPreviousPage}
            className="border-2
        bg-cyan-200
        box-border
        h-10
        w-32
        border-cyan-200
        text-slate-900
        rounded-md
        shadow-md
        shadow-cyan-900
        z-10
        hover:bg-emerald-300 
        hover:border-emerald-300
        hover:text-slate-900 
        "
          >
            PREV
          </button>
          <button
            onClick={redirectNextPage}
            className="border-2
        bg-cyan-200
        box-border
        h-10
        w-32
        border-cyan-200
        text-slate-900
        rounded-md
        shadow-md
        shadow-cyan-900
        z-10
        hover:bg-emerald-300 
        hover:border-emerald-300
        hover:text-slate-900 "
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}
