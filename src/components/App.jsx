import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddRecipe from "./Recipe/AddRecipe/AddRecipe";
import RecipeDetails from "./Recipe/RecipeDetails/RecipeDetails";
import RecipeList from "./Recipe/RecipeList/RecipeList";

function App() {
  return (
    <div className="App p-10 container  mx-auto">
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
