import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Works from "../components/Works";
import Tools from "../components/Tools";
import Projects from "../components/Projects";
import About from "../components/About";

const Home = () => {
  return (
    <div className="lg:px-72 px-8 bg-rose-100 h-fit pb-20 ">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Tools />
      <Projects />
      {/* <WorksList /> */}
    </div>
  );
};

export default Home;
