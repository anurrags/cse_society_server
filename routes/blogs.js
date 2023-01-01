import express from "express";
const Router = express.Router();
import {
  createBlog,
  getBlog,
  getAllBlog,
} from "../controller/blogsController.js";
Router.post("/", createBlog);
Router.get("/:blogId", getBlog);
Router.get("/", getAllBlog);

export default Router;
