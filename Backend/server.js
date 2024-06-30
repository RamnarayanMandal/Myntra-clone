const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

const cors = require("cors");



connectDB();

const app = express();
app.use(express.json());
app.use(cors());
// Home route for admin routes
app.get("/", (req, res) => {
  res.send("API is running successfully");
});



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));