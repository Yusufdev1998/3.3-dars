import mongoose from "mongoose";

export default async () => {
  try {
    mongoose.connect(process.env.MONGO_URI); // String
    console.log("db conntected");
  } catch (error) {
    console.log(error.message);
  }
};
