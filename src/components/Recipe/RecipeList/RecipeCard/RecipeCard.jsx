import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({
  id,
  title,
  ingredient,
  image,
  handelDeleteRecipe,
}) {
  return (
    <div className="w-full flex flex-col gradient-border">
      <img
        className="w-full"
        src={
          process.env.REACT_APP_RECIPE_BASE_URL ||
          "http://localhost:8080/" + image
        }
        alt={title}
      />
      <div className="uppercase mt-auto p-4 flex flex-col">
        <h2 className="text-3xl mb-4 text-green-400 tracking-wider">{title}</h2>
        <p className="text-sm font-mono mb-4">{ingredient}</p>
        <div className="flex gap-2 border-t-4 border-yellow-300 pt-3 mt-auto">
          <Link to={`/recipes/${id}`} className="w-full">
            <button className="bg-blue-500 hover:bg-blue-400 py-1 w-full px-8 rounded-sm">
              Details
            </button>
          </Link>
          <button
            onClick={() => handelDeleteRecipe(id)}
            className="bg-red-500 hover:bg-red-400 py-1 px-8 rounded-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
