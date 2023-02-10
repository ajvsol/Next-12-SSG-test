import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export type SearchProps = {
  searchInput: string;
  setSearchResults: any;
};

export default function SearchArea({
  searchInput,
  setSearchResults,
}: SearchProps) {
  const [url, setUrl] = useState<string>(
    `https://api.punkapi.com/v2/beers?page=1&per_page=30`
  );
  //const { data, error } = useFetch(url);

  useEffect(() => {
    async function getStuff() {
      try {
        const responseJSON = await fetch(url);
        const result = await responseJSON.json();
        setSearchResults(result);
      } catch (e: any) {
        //setError(e);
        console.log(`error:`, e);
      }
    }
    getStuff();
  }, []);

  async function handleClick() {
    setUrl(searchInput);
  }

  return (
    <div data-testid="SearchArea">
      <input className="bg-gray-200 border-x-red-700 border-y-red-300 border"></input>
      <button onSubmit={handleClick} className="bg-blue-400">
        Click me
      </button>
    </div>
  );
}
