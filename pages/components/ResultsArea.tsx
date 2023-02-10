import React from "react";
import { Beer } from "@/types/types";
import BeerCard from "@/components/BeerCard";

interface ResultsAreaProps {
  searchResults?: Beer[] | null;
  data: any;
}

export default function ResultsArea({ searchResults, data }: ResultsAreaProps) {
  if (data !== null) {
    return (
      <div>
        {data?.map((el: Beer) => {
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
