import React, { useState } from "react";
import Recipe from "../../../apis/Recipe";

export default function AddRecipe() {
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [recipe, setRecipe] = useState("");
  const [image, setImage] = useState("");

  const hendelRecipeSubmit = (e) => {
    e.preventDefault();

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
    });
  };

  return (
    <div>
      <h1 className="text-6xl mb-8 text-yellow-400 font-bold font-mono">
        Add Recipe
      </h1>
      <form
        onSubmit={hendelRecipeSubmit}
        className="flex flex-col gap-6 bg-gray-900 p-4 rounded-sm"
      >
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="py-2 px-3 rounded-sm bg-gray-600  focus:outline-none"
        />
        <input
          type="text"
          name="ingredient"
          placeholder="ingredient"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          required
          className="py-2 px-3 rounded-sm bg-gray-600  focus:outline-none"
        />
        <input
          type="text"
          name="recipe"
          placeholder="recipe"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
          required
          className="py-2 px-3 rounded-sm bg-gray-600  focus:outline-none"
        />
        <input
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
          required
          className="py-2 px-3 rounded-sm bg-gray-600  focus:outline-none"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-400 py-1 w-full px-8 rounded-sm"
        >
          Add
        </button>
      </form>
    </div>
  );
}
