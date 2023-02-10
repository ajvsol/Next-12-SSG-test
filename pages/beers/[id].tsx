import { GetServerSideProps } from "next";
import Image from "next/image";
import { Beer } from "@/types/types";
import Hero from "@/components/Hero";

export const getServerSideProps: GetServerSideProps = async ({params}) => {
 console.log(`getServerSideProps`);

 const res = await fetch(`https://api.punkapi.com/v2/beers/${params?.id}`);

 const data = await res.json();
 console.log(data)
 return {
   props: {
     data,
   },
 };
};

export default function BeerPage({ data }: any) {
  return (
    <div className="bg-cyan-700 h-full w-full">
      <Hero heading={data[0].name} message={data[0].tagline}/>
      <div className="flex flex-col justify-center items-center ">
        <div className="bg-cyan-200 h-full w-128 flex flex-col justify-center items-center p-10 gap-3  rounded-3xl
      shadow-md
      shadow-cyan-900">
      <Image src={data[0].image_url} alt="image" width={150} height={150} />
          <h1 className="text-xl text-slate-900 font-bold">{data[0].name}</h1>
          <h2 className="text-lg text-slate-900 ">{data[0].tagline}</h2>
          <h3 className="text-lg text-cyan-800 font-semibold">{data[0].abv}% ABV</h3>
          </div>
      </div>
    </div>
  );
}
