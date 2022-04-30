import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Recipe from "../../../apis/Recipe";
import RecipeForm from "../../common/RecipeForm/RecipeForm";

export default function UpdateRecipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  const navigate = useNavigate();

  const hendelRecipeSubmit = (title, ingredient, recipe, image) => {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("ingredient", ingredient);
    formData.append("recipe", recipe);
    formData.append("image", image.name);
    formData.append("file", image);

    Recipe.put("recipes/" + id, formData, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      },
    }).then(() => navigate(-1));
  };

  useEffect(() => {
    Recipe.get("recipes/" + id).then((res) => setRecipe(res.data));
  }, []);

  return (
    <>
      <div>
        <h1 className="text-6xl mb-8 text-yellow-400 font-bold font-mono">
          Update Recipe
        </h1>
        {recipe ? (
          <RecipeForm
            hendelRecipeSubmit={hendelRecipeSubmit}
            initialValues={recipe}
            btnSubmitTitle="Update"
          />
        ) : (
          "loading..."
        )}
      </div>
    </>
  );
}
