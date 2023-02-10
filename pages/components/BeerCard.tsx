import React from "react";


export interface BeerCardProps {
    name: string;
    img?: string;
    tagline: string;
    abv: number;
} 

export default function BeerCard({name,img,tagline,abv
 
}: BeerCardProps) {
 
  return (
    <div className=" flex
    flex-col
    justify-center
    w-60
    md:w-80
    h-full
    p-10
    gap-3
    border-box
    overflow-y-hidden
    bg-slate-700
    rounded-3xl
    shadow-md
    shadow-slate-900">
          <div className="flex flex-col justify-center items-center text-center ">
              <h1>{name}</h1>
              <h3>{tagline}</h3>
              <h3>{abv}</h3>
     
      </div>
    </div>
  );
}