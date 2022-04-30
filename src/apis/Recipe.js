const { default: axios } = require("axios");

export const baseURL =
  process.env.REACT_APP_RECIPE_BASE_URL || "http://localhost:8080/";

const Recipe = axios.create({
  baseURL: baseURL,
});

export default Recipe;
