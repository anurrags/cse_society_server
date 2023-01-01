import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Joi from "joi";
// const passwordComplexity = require("joi-password-complexity");
// const complexityOptions = {
// 	min: 10,
// 	max: 30,
// 	lowerCase: 1,
// 	upperCase: 1,
// 	numeric: 1,
// 	symbol: 1,
// 	requirementCount: 2,
//   };
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().min(3).label("Password"),
  });
  return schema.validate(data);
};

export { User, validate };
