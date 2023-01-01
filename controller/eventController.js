import Event from "../models/events.js";
export const createEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(200).json(newEvent);
  } catch (error) {
    res.status(400).json({ error });
  }
};
export const getEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.name);
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error });
  }
};
export const getAllEvent = async (req, res) => {
  try {
    const event = await Event.find();
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error });
    console.log(error);
  }
};
