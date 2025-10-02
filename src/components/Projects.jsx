import React from "react";

const Projects = () => {
  return (
    <div>
      <h1 className="lg:text-2xl text-lg pt-8 font-medium pb-2 mt-10 tracking-wide font-sans w-[10rem]">
        Projects
      </h1>
      <p className="tracking-wider lg:text-lg text-[1rem] font-sans font-light lg:w-full w-[20rem]">
        In my free time, I try to build things I could use to solve personal
        problems and sometimes just for fun. Here are some projects which aren't
        private that I have worked on for problems I face personally or for the
        sole aim to know how something works.
      </p>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-14 gap-10 mt-15 pl-6">
        <div>
          <div className="transition-all hover:scale-125 -translate-6 cursor-pointer lg:p-20 p-10 bg-blue-500 hover:bg-blue-800 text-center border border-black rounded-md">
            <h2 className="text-white font-bold text-3xl">
              {" "}
              Redmiller project
            </h2>
          </div>
          <p className="text-left -ml-6 ">Resolution for your business</p>
          <a
            className="bg-green-900 px-4 rounded-md text-white font-bold lg:text-lg text-sm p-1 cursor-pointer -ml-6"
            href="https://github.com/princewill1993/Ndubuisi-Princewill-s-REDMILLER-s-PROJECT.git"
          >
            Repo
          </a>
        </div>

        <div className="pb-10">
          <div className="transition-all hover:scale-125 -translate-x-4 hover:bg-blue-300 cursor-pointer lg:p-20 p-10 bg-blue-500 text-center border border-black rounded-md">
            <h2 className="text-white font-bold text-3xl">Tenzel-game</h2>
          </div>
          <p className="text-left -ml-4 mt-5">
            A fast-paced dice game where players race to get all 10 of their
            dice to show the same number.
          </p>

          <a
            className="bg-green-900 px-4 rounded-md text-white font-bold lg:text-lg text-sm p-1 cursor-pointer -ml-4"
            href=" https://github.com/princewill1993/tenzel-game.git"
          >
            Repo
          </a>
        </div>

        <div className="">
          <div className="transition-all hover:scale-125 hover:bg-black -translate-6 cursor-pointer lg:p-20 p-10 bg-blue-500 text-center border border-black rounded-md">
            <h2 className="text-white font-bold text-3xl">
              Blogging app/next.js
            </h2>
          </div>
          <p className="text-left -ml-5">
            A blogging application, with anAPI that fetches daily news around
            the globe. next.js
          </p>
          <a
            className="bg-green-900 px-4 rounded-md text-white font-bold lg:text-lg text-sm p-1 -ml-5 cursor-pointer"
            href="https://github.com/princewill1993/BLOGGING-APP-WITH-NEXTJS.git"
          >
            Repo
          </a>
        </div>
      </div>

      <hr className="text-red-800 mt-10"></hr>

      <div className="flex lg:justify-evenly justify-center gap-3 pt-7 font-bold text-lg">
        <a
          className="text-green-800"
          href="https://github.com/Princewillie0000"
        >
          Github
        </a>
        <a
          className="text-green-800"
          href="https://github.com/Princewillie0000"
        >
          LinkedIn
        </a>
        <a
          className="text-green-800"
          href="https://github.com/Princewillie0000"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Projects;
