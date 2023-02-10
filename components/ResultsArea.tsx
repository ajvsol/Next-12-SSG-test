import React from "react";
import { Beer } from "@/types/types";
import BeerCard from "./BeerCard";

interface ResultsAreaProps {
  searchResults: Beer[] | null;
}

export default function ResultsArea({ searchResults }: ResultsAreaProps) {
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
