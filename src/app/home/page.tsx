import React from "react";
import Hero from "./hero";
import About from "./about";
import Projects from "./projects";
import Footer from "./footer";
import NavBar from "../components/navBar";

const page = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
};

export default page;
