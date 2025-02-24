import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <header className="flex text-red-800 justify-between pt-10">
        <NavLink to={"/"}>
          <h1 className="text-5xl font-sans">PRINCEWILL</h1>
        </NavLink>

        <div className="flex gap-5">
          <NavLink to={"worklist"}>
            <h1 className="text-2xl font-sans">Works</h1>
          </NavLink>

          <NavLink to={"/blog"}>
            <p className="text-2xl font-sans">Blog</p>
          </NavLink>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
