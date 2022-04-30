import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Recipe, { baseURL } from "../../../apis/Recipe";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  const navigate = useNavigate();

  const handelDeleteRecipe = () => {
    Recipe.delete("recipes/" + id).then(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    Recipe.get("recipes/" + id).then((res) => setRecipe(res.data));
  }, []);

  return (
    <>
      <h1 className="text-6xl mb-8 text-yellow-400 font-bold font-mono">
        Recipe Details
      </h1>
      {recipe ? (
        <div className="grid grid-cols-1 w-full lg:grid-cols-3 gap-4">
          <img
            src={baseURL + recipe.image}
            alt={recipe.title}
            className="w-full"
          />
          <div className="col-span-2 flex flex-col">
            <h2 className="text-5xl uppercase mb-8 text-green-400 tracking-wider">
              {recipe.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-10">
              <div className="bg-blue-600 py-2 flex items-center border-l-4 px-2 rounded-md border-yellow-400">
                <h3 className="text-3xl leading-none ">Ingredient</h3>
              </div>
              <p className="col-span-3 text-sm inline-block font-mon">
                {recipe.ingredient}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-10">
              <div className="bg-blue-600 py-2 flex items-center border-l-4 px-2 rounded-md border-yellow-400">
                <h3 className="text-3xl leading-none ">Recipe</h3>
              </div>
              <p className="col-span-3 text-sm inline-block font-mon">
                {recipe.recipe}
              </p>
            </div>

            <div className="mt-auto flex gap-2 border-t-4 border-yellow-300 pt-3">
              <Link to={`/update-recipe/${id}`} className="w-full">
                <button className="bg-pink-800 hover:bg-pink-600 py-1 w-full px-8 rounded-sm">
                  Update
                </button>
              </Link>

              <button
                onClick={handelDeleteRecipe}
                className="bg-red-500 hover:bg-red-400 py-1 px-8 rounded-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        "loading..."
      )}
    </>
  );
}
