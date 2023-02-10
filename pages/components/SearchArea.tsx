
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
  const [url,setUrl] = useState<string>(`https://api.punkapi.com/v2/beers?page=1&per_page=30`)
  const { data, error } = useFetch(url)
  setSearchResults(data)

  async function handleClick() {
    setUrl(searchInput)
  
  }

  return (
    <div data-testid="SearchArea">
      <input></input>
      <button onSubmit={handleClick}></button>
    </div>
  );
}



// export default function Viewer({ submittedText }: SubmittedText) {
//   const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${submittedText}?unitGroup=us&key=AJZXJYXLMAFWDEZE6FHKCAHHL&contentType=json`;
//   const { data, error } = useFetch(url);
