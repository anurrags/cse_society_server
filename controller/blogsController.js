import Blogs from "../models/blogs.js";

export const createBlog = async (req, res) => {
  try {
    const newBlog = new Blogs(req.body);
    await newBlog.save();
    res.status(200).json(newBlog);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const getBlog = async (req, res) => {
  try {
    const blog = await Blogs.findOne({ blogId: req.params.blogId });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const getAllBlog = async (req, res) => {
  try {
    const blogs = await Blogs.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ error });
  }
};
