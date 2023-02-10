import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export function BeerPage({ Beer }: { beer: Character }) {
  const router = useRouter();

  return <></>;
}

export const getServerSideProps: GetServerSideProps = async (beerFetch) => {
  const res = await fetch(
    `https://api.punkapi.com/v2/beers/${beerFetch.query.id}`
  );
  const beers = await res.json();
  return {
    props: {
      beers,
    },
  };
};

export default BeerPage;
