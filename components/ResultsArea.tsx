import { Beer } from "@/types/types";
import BeerCard from "./BeerCard";
import React, { useEffect, Dispatch, SetStateAction } from "react";
import Link from "next/link";

interface ResultsAreaProps {
  searchResults: Beer[] | null;
  setSearchResults: Dispatch<SetStateAction<any>>;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
  data: any;
}

export default function ResultsArea({
  searchResults,
  setSearchResults,
  pageNumber,
  setPageNumber,
  data,
}: ResultsAreaProps) {
  if (searchResults !== null) {
    return (
      <div className="grid grid-cols-3 h-full w-full bg-cyan-700 gap-20">
        {searchResults?.map((el: Beer) => {
          return (
            <Link href={`/beers/${el.id}`} key={el.id}>
              <BeerCard
                key={el.id}
                name={el.name}
                tagline={el.tagline}
                abv={el.abv}
                image_url={el.image_url}
              />
            </Link>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <p>searchResults === null</p>
      </div>
    );
  }
}
