const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectMongoose = require("./connection");
const blogRoutes = require("./routings/blogs");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

connectMongoose();

app.use("/api/blogs", blogRoutes);

app.listen(4000, () => {
  console.log("server is running...");
});
