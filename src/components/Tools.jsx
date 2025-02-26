import React from "react";

const Tools = () => {
  return (
    <div>
      <h1 className="lg:text-2xl text-lg pt-8 font-medium pb-2 tracking-wide font-sans  w-[10rem]">
        Tools
      </h1>
      <p className="tracking-wider lg:text-lg text-[1rem] font-sans lg:w-full font-light w-[20rem]">
        My primary technologies are Typescript & React. Below are some
        languages/tools which I utilize for an efficient workflow, school
        projects or to upgrade my arsenal of tools for the right job.
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-14 mt-10 font-bold place-items-center">
        <div className="flex gap-3 items-center">
          <img className="animate-ping w-[25px]" src="/typescript.png" />
          <p>Typescript</p>
        </div>

        <div className="flex gap-3 items-center">
          <img className="animate-ping w-[25px]" src="/react.png" />
          <p>React</p>
        </div>

        <div className="flex gap-3 items-center">
          <img className="animate-ping w-[30px]" src="/tailwind.png" />
          <p>TailwindCSS</p>
        </div>
        <div className="flex gap-3 items-center">
          <img className="animate-ping w-[25px]" src="/python.png" />
          <p>Python</p>
        </div>
        <div className="flex gap-3 items-center">
          <img className="animate-ping w-[25px]" src="/mongo.png" />
          <p>MongoDB</p>
        </div>

        <div className="flex gap-3 items-center">
          <img className="animate-ping w-[25px]" src="/mysql.png" />
          <p>MySQL</p>
        </div>

        <div className="flex gap-3 items-center">
          <img className="animate-ping w-[25px]" src="/git.png" />
          <p>Git</p>
        </div>

        <div className="flex gap-3 items-center">
          <img className="animate-ping w-[25px]" src="/redux.png" />
          <p>Redux</p>
        </div>
        <div className="flex gap-3 items-center">
          <img className="animate-ping w-[25px]" src="/next.png" />
          <p>Node.JS</p>
        </div>
        <div className="flex gap-3 items-center">
          <img className="animate-ping w-[25px]" src="/next.png" />
          <p>Next.JS</p>
        </div>
        <div className="flex gap-3 items-center">
          <img className="animate-ping w-[25px]" src="/express.png" />
          <p>Express</p>
        </div>

        <div className="flex gap-3 items-center">
          <img className="animate-ping w-[25px]" src="/html.png" />
          <p>HTML</p>
        </div>

        <div className="flex gap-3 items-center">
          <img className="animate-ping w-[25px]" src="/css.png" />
          <p>CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Tools;
