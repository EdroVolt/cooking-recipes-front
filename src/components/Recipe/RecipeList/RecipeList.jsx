import React, { useEffect, useState } from "react";
import Recipe from "../../../apis/Recipe";
import RecipeCard from "./RecipeCard/RecipeCard";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  const handelDeleteRecipe = (id) => {
    Recipe.delete("recipes/" + id).then(() => {
      const updatedRecipes = recipes.filter((recipe) => recipe._id !== id);
      setRecipes(updatedRecipes);
    });
  };

  useEffect(() => {
    Recipe.get("recipes").then((res) => setRecipes(res.data.data));
  }, []);

  return (
    <div>
      <h1 className="text-6xl mb-8 text-yellow-400 font-bold font-mono">
        My Recipes
      </h1>
      {recipes.length ? (
        <div className="flex flex-col gap-4">
          {recipes.map(({ _id, title, ingredient, image }) => (
            <RecipeCard
              key={_id}
              id={_id}
              title={title}
              ingredient={ingredient}
              image={image}
              handelDeleteRecipe={handelDeleteRecipe}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
