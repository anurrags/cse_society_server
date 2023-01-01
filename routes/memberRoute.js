import express from "express";
import {
  createMember,
  getMember,
  getAllMember,
  getMemberbyYear,
  getAlumni,
} from "../controller/memberController.js";
const Router = express.Router();

Router.post("/", createMember);
Router.get("/:rollNo", getMember);
Router.get("/", getAllMember);
Router.get("/year/:year", getMemberbyYear);
Router.get("/alumni/:year", getAlumni);
export default Router;
