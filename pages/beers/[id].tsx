import { GetServerSideProps } from "next";
import Image from "next/image";
import { Beer } from "@/types/types";

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
    <>
      <Image src={data[0].image_url} alt="image" width={150} height={150} />
      <h1>{data[0].name}</h1>
    </>
  );
}
