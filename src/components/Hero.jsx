import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="lg:mt-10 mt-4 ">
        <img
          className="animate-bounce lg:w-[250px] w-[100px] pb-14 pt-8"
          src="/profile.jpeg"
        />
        <p className="lg:text-lg text-[1rem] font-sans font-light tracking-wider lg:w-full w-[20rem]">
          Welcome! I'm <i className=" font-bold">(Princewill)</i>, a passionate
          software developer who thrives on connecting with creative minds and
          tackling new challenges. I'm a fast learner who adapts quickly to new
          environments, I value continuous learning and keep an open mind in all
          endeavors. Whether it's coding for fun, playing chess, or exploring
          videography.
        </p>
      </div>
    </section>
  );
};

export default Hero;
