import React from "react";
import RecipeCard from "./RecipeCard/RecipeCard";

export default function RecipeList() {
  const recipes = [
    {
      _id: 1,
      title: "potato recipe",
      ingrediant:
        "5 spones of lkns lkndsflkn lknsdlnf lsjdlfkj lksdjflk lkjdslkfj",
      recipe:
        "lkndsklfn lkdsflkjsd lkjdslkfj lksjdflkj lksdjflj lkjdsflkj lkjdflk",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574",
    },
    {
      _id: 2,
      title: "potato recipe",
      ingrediant:
        "5 spones of lkns lkndsflkn lknsdlnf lsjdlfkj lksdjflk lkjdslkfj",
      recipe:
        "lkndsklfn lkdsflkjsd lkjdslkfj lksjdflkj lksdjflj lkjdsflkj lkjdflk",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574",
    },
    {
      _id: 3,
      title: "potato recipe",
      ingrediant:
        "5 spones of lkns lkndsflkn lknsdlnf lsjdlfkj lksdjflk lkjdslkfj",
      recipe:
        "lkndsklfn lkdsflkjsd lkjdslkfj lksjdflkj lksdjflj lkjdsflkj lkjdflk",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574",
    },
  ];
  return (
    <div>
      <h1 className="text-6xl mb-8 text-yellow-400 font-bold font-mono">
        My Recipes
      </h1>
      <div className="flex flex-col gap-4">
        {recipes.map(({ _id, title, ingrediant, image }) => (
          <RecipeCard
            key={_id}
            id={_id}
            title={title}
            ingrediant={ingrediant}
            image={image}
          />
        ))}
      </div>
    </div>
  );
}
