import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import useFetch from "../hooks/useFetch";
import Link from "next/link";

export type SearchProps = {
  searchInput: string;
  setSearchResults: any;
  setPageNumber: Dispatch<SetStateAction<number>>;
  pageNumber: number;
};

export default function SearchArea({
  searchInput,
  setSearchResults,
  pageNumber,
  setPageNumber,
}: SearchProps) {
  const [url, setUrl] = useState<string>(
    `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=30`
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
    <div data-testid="SearchArea" className=" flex justify-center p-10">
      <input
        className="w-80 h-10 font-Open bg-cyan-50 text-slate-900 border-cyan-400 border-2 rounded-md text-sm px-2 focus:ring-emerald-300 focus:ring-3"
        placeholder="Type in your search here"
      ></input>
      <button
        onSubmit={handleClick}
        className="border-2
        bg-cyan-200
        box-border
        h-10
        w-32
        border-cyan-200
        text-slate-900
        rounded-md
        shadow-md
        shadow-cyan-900
        z-10
        hover:bg-emerald-300 
        hover:border-emerald-300
        hover:text-slate-900 
        font-Open"
      >
        SEARCH
      </button>
    </div>
  );
}
