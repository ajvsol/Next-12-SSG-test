import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import ResultsArea from "@/components/ResultsArea";
import SearchArea from "@/components/SearchArea";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SearchArea
          searchInput={searchInput}
          setSearchResults={setSearchResults}
        />
        <ResultsArea searchResults={searchResults} />
      </main>
    </>
  );
}
