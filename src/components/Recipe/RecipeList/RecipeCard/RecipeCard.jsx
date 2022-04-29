import React from "react";

export default function RecipeCard({ id, title, ingrediant, image }) {
  return (
    <div className="grid grid-cols-4 gap-4 gradient-border">
      <div>
        <img className="object-cover" src={image} alt={title} />
      </div>
      <div className="uppercase col-span-3 p-4 flex flex-col">
        <h2 className="text-3xl mb-4 text-green-400 tracking-wider">{title}</h2>
        <p className="text-sm font-mono">{ingrediant}</p>
        <div className="mt-auto flex gap-2 border-t-4 border-yellow-300 pt-3">
          <button className="bg-blue-500 hover:bg-blue-400 py-1 w-full px-8 rounded-sm">
            Details
          </button>
          <button className="bg-red-500 hover:bg-red-400 py-1 px-8 rounded-sm">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
