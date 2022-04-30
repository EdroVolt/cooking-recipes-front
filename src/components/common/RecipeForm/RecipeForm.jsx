import React, { useState } from "react";

export default function RecipeForm({
  hendelRecipeSubmit,
  initialValues,
  btnSubmitTitle,
}) {
  const [title, setTitle] = useState(initialValues?.title || "");
  const [ingredient, setIngredient] = useState(initialValues?.ingredient || "");
  const [recipe, setRecipe] = useState(initialValues?.recipe || "");
  const [image, setImage] = useState(initialValues?.image || "");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        hendelRecipeSubmit(title, ingredient, recipe, image);
      }}
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
        minLength="10"
        placeholder="ingredient"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        required
        className="py-2 px-3 rounded-sm bg-gray-600  focus:outline-none"
      />
      <input
        type="text"
        name="recipe"
        minLength="10"
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
        {btnSubmitTitle}
      </button>
    </form>
  );
}
