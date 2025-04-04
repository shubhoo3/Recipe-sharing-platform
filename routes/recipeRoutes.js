const express = require("express");
const { createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe } = require("../controllers/recipeController");
const authenticate = require("../middleware/auth");
const router = express.Router();
router.post("/", authenticate, createRecipe);
router.get("/", getRecipes);
router.get("/:id", getRecipeById);
router.put("/:id", authenticate, updateRecipe);
router.delete("/:id", authenticate, deleteRecipe);
module.exports = router;
