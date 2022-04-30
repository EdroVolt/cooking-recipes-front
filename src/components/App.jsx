import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./core/Navbar/Navbar";
import AddRecipe from "./Recipe/AddRecipe/AddRecipe";
import RecipeDetails from "./Recipe/RecipeDetails/RecipeDetails";
import RecipeList from "./Recipe/RecipeList/RecipeList";
import UpdateRecipe from "./Recipe/UpdateRecipe/UpdateRecipe";

function App() {
  return (
    <>
      <Navbar />
      <div className="App p-10 container mx-auto">
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/update-recipe/:id" element={<UpdateRecipe />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
