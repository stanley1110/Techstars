const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/TechStar";

const app = express();
app.use(express.json());

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("Database connected");
});
app.use(express.json());
const router = require("./routers/techstars");
app.use("/techstars/", router);
app.listen(3000, () => {
  console.log("Server started");
});
