import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="px-10 bg-zinc-900">
      <ul className="uppercase px-8 container mx-auto font-bold flex gap-8">
        <li className="py-4 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "py-4 px-8 hover:bg-white hover:text-black bg-white text-black"
                : "py-4 px-8 hover:bg-white hover:text-black"
            }
          >
            Recipes
          </NavLink>
        </li>
        <li className="py-4">
          <NavLink
            to="/add-recipe"
            className={({ isActive }) =>
              isActive
                ? "py-4 px-8 hover:bg-white hover:text-black bg-white text-black"
                : "py-4 px-8 hover:bg-white hover:text-black"
            }
          >
            Add Recipe
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
