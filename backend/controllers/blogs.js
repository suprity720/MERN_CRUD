const Blog = require("../models/blogs");

const create = async (req, res) => {
  try {
    const { title, image, body } = req.body;
    const newBlog = new Blog({
      title,
      image,
      body,
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const update = async (req, res) => {
  try {
    const { title, image, body } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, {
      title,
      image,
      body,
    });

    res.json(updatedBlog);
  } catch (error) {
    console.log(error);
  }
};

const del = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
};

const show = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (error) {
    res.json(error);
  }
};

const index = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { index, create, show, del, update };
