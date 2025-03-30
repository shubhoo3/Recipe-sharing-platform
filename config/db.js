const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async (retries = 5, delay = 5000) => {
    while (retries > 0) {
        try {
            await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log("MongoDB connected successfully");
            return; // Exit the function if the connection is successful
        } catch (error) {
            console.error(`Database connection failed. Retries left: ${retries - 1}`, error);
            retries -= 1;
            if (retries === 0) {
                console.error("All retries exhausted. Exiting...");
                process.exit(1);
            }
            await new Promise((resolve) => setTimeout(resolve, delay)); // Wait before retrying
        }
    }
};

module.exports = connectDB;