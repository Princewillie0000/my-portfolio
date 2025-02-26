import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <header className="flex text-red-800 items-center justify-between container mx-auto pt-10 sm:gap-10">
        <NavLink to={"/"}>
          <h1 className="lg:text-5xl text-2xl font-sans">PRINCEWILL</h1>
        </NavLink>

        <div className="flex lg:gap-5 gap-2 pl-3">
          <NavLink to={"worklist"}>
            <h1 className="lg:text-2xl text-lg font-sans">Works</h1>
          </NavLink>

          <NavLink to={"/blog"}>
            <p className="lg:text-2xl text-lg font-sans">Blog</p>
          </NavLink>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
