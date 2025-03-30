

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to Database
connectDB();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/recipes", recipeRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));