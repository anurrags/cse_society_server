import mongoose from "mongoose";

mongoose.set("strictQuery", false);
export default () => {
  // const connectionParams = {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // };
  try {
    mongoose.connect(process.env.DB);
    console.log("Connected to database successfully");
  } catch (error) {
    //console.log(error);
    console.log(error,"Could not connect database!");
  }
};
