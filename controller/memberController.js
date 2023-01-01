import Member from "../models/members.js";
export const createMember = async (req, res) => {
  try {
    const newMember = new Member(req.body);
    await newMember.save();
    res.status(200).json(newMember);
  } catch (error) {
    res.status(400).json({ error });
  }
};
export const getMember = async (req, res) => {
  try {
    const member = await Member.findById(req.params.rollNo);
    res.status(200).json(member);
  } catch (error) {
    res.status(400).json({ error });
  }
};
export const getMemberbyYear = async (req, res) => {
  try {
    const member = await Member.find({ yearOfGrad: req.params.year });
    res.status(200).json(member);
  } catch (error) {
    res.status(400).json({ error });
  }
};
export const getAlumni = async (req, res) => {
  try {
    const member = await Member.find({ yearOfGrad: { $lte: req.params.year } });
    res.status(200).json(member);
  } catch (error) {
    res.status(400).json({ error });
  }
};
export const getAllMember = async (req, res) => {
  try {
    const member = await Member.find();
    res.status(200).json(member);
  } catch (error) {
    res.status(400).json({ error });
    console.log(error);
  }
};
