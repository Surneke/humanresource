import mongoose from "mongoose";

let isConnected = false;

const URL: string | undefined | any = process.env.MONGODB_URL;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("🚀 Already connected");
    return;
  }
  try {
    await mongoose.connect(URL, {
      dbName: "techpack-task",
    });
    isConnected = true;
    console.log("🚀 Successfully Connected to Mongoose!");
  } catch (error) {
    console.log(error);
  }
};
