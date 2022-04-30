const { default: axios } = require("axios");

const Recipe = axios.create({
  baseURL: process.env.REACT_APP_RECIPE_BASE_URL || "http://localhost:8080/",
});

export default Recipe;
