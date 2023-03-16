import React from "react";
import Image from "next/image";
export type HeroProps = {
  heading: string
  message:string
}
function Hero({heading,message}:HeroProps) {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 h-128 bg-black/70 z-[2]"/>
      <div className=" flex flex-col items-center justify-center h-128 mb-4 bg-fixed bg-center bg-cover custom-img">
        <h1 className="text-4xl md:text-5xl text-cyan-400 text-center z-[3]">{heading}</h1>
        <p className="text-2xl text-slate-50 z-[3]">{message}</p>
      </div>
    </>
  );
}

export default Hero;
