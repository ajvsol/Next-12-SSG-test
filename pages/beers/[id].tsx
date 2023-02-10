import { GetServerSideProps } from "next";
import Image from "next/image";
import { Beer } from "@/types/types";

//export const getServerSideProps: GetServerSideProps = async (context) => {
//  console.log(`getServerSideProps`);

//  const res = await fetch(`https://api.punkapi.com/v2/beers/${context}`);

//  const data = await res.json();
//  return {
//    props: {
//      data,
//    },
//  };
//};
//getServerSideProps(context);

export default function BeerPage({ data }: any) {
  return (
    <>
      <p>test</p>
      <p>{data.name}</p>
    </>
  );
}
