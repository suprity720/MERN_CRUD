const mongoose = require("mongoose");

const connectMongoose = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/p_blog")
    .then(() => console.log("connected to DB"))
    .catch((err) => console.log(err));
};



module.exports = connectMongoose;
