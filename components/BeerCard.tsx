import React from "react";
import Image from "next/image";

export interface BeerCardProps {
  name: string;
  img?: string;
  tagline: string;
  abv: number;
  key: number;
  image_url: string;
}

export default function BeerCard({
  name,
  img,
  tagline,
  abv,
  key,
  image_url,
}: BeerCardProps) {
  return (
    <div
      className=" flex
      flex-col
      justify-center
      items-center
      w-96
      lg:w-80
      h-96
      lg:h-90
      p-10
      gap-3
      border-box
      text-slate-900
      bg-cyan-200
      rounded-3xl
      shadow-md
      shadow-cyan-900
      text-center"
    >
      <div className="max-h-80">
        <Image src={image_url} alt={name} height={50} width={50} />
      </div>
      <h1 className="text-xl font-bold">{name}</h1>
      <h3 className="text-md">{tagline}</h3>

      <h3 className="text-lg text-cyan-800 font-semibold">{abv}% ABV</h3>
    </div>
  );
}
