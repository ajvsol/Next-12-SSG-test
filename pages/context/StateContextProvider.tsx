"use client";
/**
 * Makes the stored state accessible to all pages easily.
 */
import { createContext, useContext, useState } from "react";

export const StateContext = createContext([] as any);

// Context provider
export function StateContextProvider({ children }: any) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState();

  return (
    <StateContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

// Custom hook
export function useStateContext() {
  return useContext(StateContext);
}

// Example data for one beer
export const exampleBeer = [
  {
    id: 2,
    name: "Trashy Blonde",
    tagline: "You Know You Shouldn't",
    first_brewed: "04/2008",
    description:
      "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.",
    image_url: "https://images.punkapi.com/v2/2.png",
    abv: 4.1,
    ibu: 41.5,
    target_fg: 1010,
    target_og: 1041.7,
    ebc: 15,
    srm: 15,
    ph: 4.4,
    attenuation_level: 76,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 69,
            unit: "celsius",
          },
          duration: null,
        },
      ],
      fermentation: {
        temp: {
          value: 18,
          unit: "celsius",
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: "Maris Otter Extra Pale",
          amount: {
            value: 3.25,
            unit: "kilograms",
          },
        },
        {
          name: "Caramalt",
          amount: {
            value: 0.2,
            unit: "kilograms",
          },
        },
        {
          name: "Munich",
          amount: {
            value: 0.4,
            unit: "kilograms",
          },
        },
      ],
      hops: [
        {
          name: "Amarillo",
          amount: {
            value: 13.8,
            unit: "grams",
          },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Simcoe",
          amount: {
            value: 13.8,
            unit: "grams",
          },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Amarillo",
          amount: {
            value: 26.3,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Motueka",
          amount: {
            value: 18.8,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
      ],
      yeast: "Wyeast 1056 - American Ale™",
    },
    food_pairing: [
      "Fresh crab with lemon",
      "Garlic butter dipping sauce",
      "Goats cheese salad",
      "Creamy lemon bar doused in powdered sugar",
    ],
    brewers_tips:
      "Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort.",
    contributed_by: "Sam Mason <samjbmason>",
  },
];
