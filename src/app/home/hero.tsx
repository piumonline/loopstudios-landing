import React from "react";

function Hero() {
  return (
    <div className="h-screen bg-mobile-bg lg:bg-desktop-bg bg-cover bg-no-repeat flex items-center justify-center lg:items-end lg:justify-start lg:px-16">
      <h1 className=" border-solid border-2 border-white text-white text-title text-4xl m-6 p-4 md:p-8 font-thin lg:m-24 lg:tracking-widest lg:pr-28 tracking-widest">
        IMMERSIVE <br />
        EXPERIENCES <br />
        THAT DELIVER
      </h1>
    </div>
  );
}

export default Hero;
