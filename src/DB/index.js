import mongoose from "mongoose";
import { DB_NAME } from "../Constant.js";

const ConnectDB = async () => {
  try {
    const connectionInstances = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected !! DB Host: ${connectionInstances.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

export default ConnectDB;
