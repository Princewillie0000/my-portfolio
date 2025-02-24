import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="mt-10">
        <img
          className="animate-bounce w-[250px] pb-14 pt-8"
          src="/profile.jpeg"
        />
        <p className="text-lg font-sans">
          Welcome! I'm <bold className=" font-bold">Princewill :)</bold>, a
          passionate software developer who thrives on connecting with creative
          minds and tackling new challenges. I'm a fast learner who adapts
          quickly to new environments, I value continuous learning and keep an
          open mind in all endeavors. Whether it's coding for fun, playing
          chess, or exploring videography.
        </p>
      </div>
    </section>
  );
};

export default Hero;
