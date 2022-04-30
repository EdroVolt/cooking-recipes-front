import React from "react";
import { useNavigate } from "react-router-dom";
import Recipe from "../../../apis/Recipe";
import RecipeForm from "../../common/RecipeForm/RecipeForm";

export default function AddRecipe() {
  const navigate = useNavigate();

  const hendelRecipeSubmit = (title, ingredient, recipe, image) => {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("ingredient", ingredient);
    formData.append("recipe", recipe);
    formData.append("image", image.name);
    formData.append("file", image);

    Recipe.post("recipes", formData, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      },
    }).then(() => navigate("/"));
  };

  return (
    <div>
      <h1 className="text-6xl mb-8 text-yellow-400 font-bold font-mono">
        New Recipe
      </h1>
      <RecipeForm
        hendelRecipeSubmit={hendelRecipeSubmit}
        btnSubmitTitle="Add"
      />
    </div>
  );
}
