import React, { useState, useEffect } from "react";

export type SearchProps = {
  searchInput: string;
  setSearchResults: any;
};

export default function SearchArea({
  searchInput,
  setSearchResults,
}: SearchProps) {
  useEffect(() => {
    async function getAPI() {
      const res = await fetch(
        `https://api.punkapi.com/v2/beers?page=1&per_page=30`
      );
      const beers = await res.json();
      setSearchResults(beers);
    }
  }, []);

  return (
    <div data-testid="SearchArea">
      <input></input>
      <button onClick={getAPI}></button>
    </div>
  );
}
