import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { Beer } from "@/types/types";
import Hero from "@/components/Hero";
import { useState } from "react";
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
  const { asPath } = router;
  //console.log(`asPath`, asPath);

  const ingred = data[0].ingredients;
  console.dir(`data`, data);

  const [pageNumber, setPageNumber] = useState();
  //let previousBeerSlug = `/beers/${pageNumber - 1}`;
  //let nextBeerSlug = `/beers/${pageNumber + 1}`;

  return (
    <div className="bg-cyan-700 h-full w-full">
      <Hero heading={data[0].name} message={data[0].tagline} />
      <Link href="/">
        <button>Back to home</button>
      </Link>
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
        <Link href={previousBeerSlug}>
          <button>Previous beer</button>
        </Link>
        <Link href={nextBeerSlug}>
          <button>Next beer</button>
        </Link>
      </div>
    </div>
  );
}
