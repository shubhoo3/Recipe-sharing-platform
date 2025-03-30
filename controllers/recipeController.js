const Recipe = require("../models/Recipe");

exports.createRecipe = async (req, res) => {
    const recipe = new Recipe({ ...req.body, userId: req.user._id });
    try {
        await recipe.save();
        res.json(recipe);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.getRecipes = async (req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes);
};

exports.getRecipeById = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).send("Recipe not found");
    res.json(recipe);
};

exports.updateRecipe = async (req, res) => {
    const recipe = await Recipe.findOneAndUpdate(
        { _id: req.params.id, userId: req.user._id },
        req.body,
        { new: true }
    );
    if (!recipe) return res.status(404).send("Recipe not found or not authorized");
    res.json(recipe);
};

exports.deleteRecipe = async (req, res) => {
    const recipe = await Recipe.findOneAndDelete({
        _id: req.params.id,
        userId: req.user._id,
    });
    if (!recipe) return res.status(404).send("Recipe not found or not authorized");
    res.send("Recipe deleted successfully");
};
