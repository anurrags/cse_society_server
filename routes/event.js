import express from "express";
import Event from "../models/events.js";
const router = express.Router();
import {
  createEvent,
  getEvent,
  getAllEvent,
} from "../controller/eventController.js";

router.post("/", createEvent);
router.get("/:name", getEvent);
router.get("/", getAllEvent);
export default router;
