// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}

//export function getServerSideProps2: GetServerSideProps = async (beerFetch) => {
//  const res = await fetch(
//    `https://api.punkapi.com/v2/beers/${beerFetch.query.id}`
//  );
//  const data = await res.json();
//  return {
//    props: {
//      data,
//    },
//  };
//};
