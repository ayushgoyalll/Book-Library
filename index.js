const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const bookRoutes = require("./routes/book");
const userRoutes = require("./routes/user");
const checkRoutes = require("./routes/check");

const app = express();
app.use(express.json());


app.use("/api/system",checkRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
