import React from "react";

const Projects = () => {
  return (
    <div>
      <h1 className="text-2xl font-medium pb-2 tracking-wide font-sans pt-10">
        Projects
      </h1>
      <p className="tracking-wider text-lg font-sans font-light">
        In my free time, I try to build things I could use to solve personal
        problems and sometimes just for fun. Here are some projects which aren't
        private that I have worked on for problems I face personally or for the
        sole aim to know how something works.
      </p>

      <div className="grid grid-cols-3 gap-14 mt-15">
        <div className="">
          <div className="transition-all hover:scale-125 -translate-6 cursor-pointer p-20 bg-blue-500 hover:bg-blue-800 text-center border border-black rounded-md">
            <h2 className="text-white font-bold text-3xl">
              {" "}
              Redmiller project
            </h2>
          </div>
          <p className="text-left">Resolution for your business</p>
          <a
            className="bg-green-900 px-4 rounded-md text-white font-bold text-lg cursor-pointer"
            href="https://github.com/princewill1993/Ndubuisi-Princewill-s-REDMILLER-s-PROJECT.git"
          >
            Repo
          </a>
        </div>

        <div>
          <div className="transition-all hover:scale-125 -translate-x-4 hover:bg-blue-300 cursor-pointer p-20 bg-blue-500 text-center border border-black rounded-md">
            <h2 className="text-white font-bold text-3xl">Tenzel-game</h2>
          </div>
          <p className="text-left pt-10">
            A fast-paced dice game where players race to get all 10 of their
            dice to show the same number.
          </p>

          <a
            className="bg-green-900 px-4 rounded-md text-white font-bold text-lg cursor-pointer"
            href=" https://github.com/princewill1993/tenzel-game.git"
          >
            Repo
          </a>
        </div>

        <div className="">
          <div className="transition-all hover:scale-125 hover:bg-black -translate-6 cursor-pointer p-20 bg-blue-500 text-center border border-black rounded-md">
            <h2 className="text-white font-bold text-3xl">
              Blogging app/next.js
            </h2>
          </div>
          <p className=" mt-5">
            A blogging application, with anAPI that fetches daily news around
            the globe. next.js
          </p>
          <a
            className="bg-green-900 px-4 rounded-md text-white font-bold text-lg cursor-pointer"
            href="https://github.com/princewill1993/BLOGGING-APP-WITH-NEXTJS.git"
          >
            Repo
          </a>
        </div>
      </div>

      <hr className="text-red-800 mt-10"></hr>

      <div className="flex justify-evenly pt-7 font-bold text-lg">
        <a className="text-green-800" href="https://github.com/princewill1993">
          Github
        </a>
        <a className="text-green-800" href="https://github.com/princewill1993">
          LinkedIn
        </a>
        <a className="text-green-800" href="https://github.com/princewill1993">
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Projects;
