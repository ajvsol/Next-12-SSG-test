import { Beer } from "@/types/types";
import BeerCard from "./BeerCard";
import React, { useEffect, Dispatch, SetStateAction } from "react";

interface ResultsAreaProps {
  searchResults: Beer[] | null;
  setSearchResults: Dispatch<SetStateAction<any>>;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
}

export default function ResultsArea({
  searchResults,
  setSearchResults,
  pageNumber,
  setPageNumber,
}: ResultsAreaProps) {
  //useEffect(() => {
  //  async function infiniteScroll() {
  //    if (window.scrollY >= 900) {
  //      setPageNumber(pageNumber++);
  //      const responseJSON = await fetch(
  //        `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=30`
  //      );
  //      const result = await responseJSON.json();
  //      setSearchResults(result);
  //      console.log("window.scrollY > 9000");
  //    } else {
  //    }
  //  }
  //  window.addEventListener("scroll", infiniteScroll);
  //}, []);

  if (searchResults !== null) {
    return (
      <div className="grid grid-cols-3 h-full w-full bg-cyan-700 gap-20">
        {searchResults?.map((el: Beer) => {
          return (
            <BeerCard
              key={el.id}
              name={el.name}
              tagline={el.tagline}
              abv={el.abv}
              image_url={el.image_url}
            />
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
