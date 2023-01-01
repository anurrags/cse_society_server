import mongoose from "mongoose";
const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
    unique: true,
  },
  yearOfGrad: {
    type: Number,
    required: true,
  },
  designation: {
    type: String,
  },
  image: {
    type: String,
  },
  insta: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  twitter: {
    type: String,
  },
});

const member = mongoose.model("Member", memberSchema);
export default member;
