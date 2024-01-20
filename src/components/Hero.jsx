"use client"
import React from "react";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <Fade triggerOnce="true" className="pt-14 md:pt-10">
      <div>
        <img
          className="w-full sm:p-3 md:p-10"
          src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/9fbf4633-3772-4f16-90ab-651bb63abd25/nike-just-do-it.jpg"
          alt="hero-img"
        />
      </div>
      <div className="m-3 text-center">
        <p>Nike Ekiden Pack</p>
        <h3 className="sm:text-4xl md:text-6xl font-extrabold uppercase">
          Running is Believing
        </h3>
        <p>The Ekiden is a race like no other.</p>
        <p>
          The Nike Ekiden Pack once again celebrates the spirit of this event
          with shoes to support its runner.
        </p>
        <button className="rounded-[25px] m-3 bg-black text-white py-2 px-5">
          Shop
        </button>
      </div>
    </Fade>
  );
};

export default Hero;
