import Image from "next/image";
import React from "react";

function About() {
  return (
    <section className="min-h-screen flex flex-col md:items-center md:justify-center text-center lg:items-start lg:m-20 Lg:h-screen">
      <div className="relative p-6 w-full mt-16">
        <Image
          src="/images/desktop/image-interactive.jpg"
          width={1440}
          height={950}
          alt="hero"
          className="lg:w-8/12"
        />
        <div className="p-4 px-4 lg:text-left lg:p-16 xl:p-24 lg:bg-white lg:w-3/6 lg:h-4/6 lg:absolute -bottom-6 right-0 flex flex-col justify-center items-center">
          <h1 className="text-3xl my-8 font-thin tracking-wide uppercase">
            The leader in Interactive VR
          </h1>
          <p className="text-md text-gray-500">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
