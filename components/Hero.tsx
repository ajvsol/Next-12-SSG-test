import React from "react";
import Image from "next/image";
export type HeroProps = {
  heading: string
  message:string
}
function Hero({heading,message}:HeroProps) {
  return (
    <>
      <div className=" flex flex-col items-center justify-center h-128 mb-12 bg-fixed bg-center bg-cover custom-img">
        <h1 className="text-7xl text-slate-50">{heading}</h1>
        <p className="text-3xl text-slate-50">{message}</p>
      </div>
    </>
  );
}

export default Hero;
