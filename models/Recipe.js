const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    ingredients: [String],
    instructions: String,
    image: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Recipe", recipeSchema);
