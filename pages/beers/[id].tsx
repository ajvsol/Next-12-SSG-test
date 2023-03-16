import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { Beer } from "@/types/types";
import Hero from "@/components/Hero";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  console.log(`getServerSideProps`);

  const res = await fetch(`https://api.punkapi.com/v2/beers/${params?.id}`);

  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
};

export default function BeerPage({ data }: any) {
  const router = useRouter();
  
  const ingred = data[0].ingredients;



  let page = data[0].id
  const [pageNumber, setPageNumber] = useState(page);
  console.log("this is the page number",pageNumber)
  // useEffect(() => {
  //   const setCurrentPageNumber = async () => {
  //     setPageNumber(page);
  //     console.log("beer", page);
  //   };
  //   setCurrentPageNumber();
  // }, []);

  const redirectPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prevPageNumber:number) => prevPageNumber - 1);
      router.push(`/beers/${pageNumber - 1}`);
    } else {
      router.push(`/`);
    }
  };
  
  const redirectNextPage = () => {
    setPageNumber((prevPageNumber:number) => prevPageNumber + 1);
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
          Back to home
        </button>
      </Link>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div
          className="bg-cyan-200 h-full w-128 flex flex-col justify-center items-center p-10 gap-3  rounded-3xl
      shadow-md
      shadow-cyan-900"
        >
          <Image src={data[0].image_url} alt="image" width={130} height={130} />
          <h1 className="text-4xl text-slate-900 font-bold">{data[0].name}</h1>
          <h2 className="text-md text-slate-900 ">"{data[0].tagline}"</h2>
          <h3 className="text-lg text-cyan-800 font-semibold">
            {data[0].abv}% ABV
          </h3>
          <p className="text-lg text-slate-900 ">{data[0].description} </p>
          <h3>Food Pairings:</h3>
          {data[0].food_pairing.map((food: any) => {
            return <p key={food}>{food}</p>;
          })}
          <h3>Ingredients:</h3>
          <h4>Malts:</h4>
          <ul>
            {ingred.malt.map((malt: any) => (
              <li key={malt.name}>
                {malt.name} - {malt.amount.value} {malt.amount.unit}
              </li>
            ))}
          </ul>
          <h4>Hops:</h4>
          <ul>
            {ingred.hops.map((hop: any) => (
              <li key={hop.name}>
                {hop.name} - {hop.amount.value} {hop.amount.unit}, Add:{" "}
                {hop.add}, Attribute: {hop.attribute}
              </li>
            ))}
          </ul>
          <p>Yeast: {ingred.yeast}</p>
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
          Previous beer
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
          Next beer
          </button>
          </div>
      </div>
    </div>
  );
}
