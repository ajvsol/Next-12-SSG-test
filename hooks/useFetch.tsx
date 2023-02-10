import { useState, useEffect } from "react";
import { Beer } from "@/types/types";

export default function useFetch(url: string) {
  const [data, setData] = useState<Beer | null>();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getStuff() {
      try {
        const responseJSON = await fetch(url);
        const result = await responseJSON.json();
        setData(result);
        console.log(`data:`, data);
      } catch (e: any) {
        setError(e);
        console.log(`error:`, e);
      }
    }
    getStuff();
  }, []);

  return { data, error };
}
