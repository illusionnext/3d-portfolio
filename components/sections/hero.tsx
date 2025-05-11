import React from "react";
import Image from "next/image";
import { words } from "@/components/constants";
import Button from "@/components/button";
import HeroExperience from "@/components/hero-models/hero-experience";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-x-auto">
      <div className="absolute top-0 left-0 z-10">
        <Image src="/images/bg.png" alt="Background" width={720} height={400} />
      </div>

      <div className="hero-layout">
        {/*  LEFT: HERO CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2 md:mt-3"
                      >
                        <Image
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 md:p-2 size-7 p-1 rounded-full bg-white-50"
                          width="100"
                          height="100"
                        />
                        <span className="text-4xl font-bold text-white">
                          {word.text}
                        </span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi! I&#39;m Farid, a Full Stack Web Developer with a passion for
              code.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my Work"
            />
          </div>
        </header>
        {/*  RIGHT: 3D MODEL */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};
export default Hero;
