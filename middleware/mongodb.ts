import mongoose from "mongoose";
import { Handler } from "../pages/api/types";

type ConnectDB = (handler: Handler) => Handler;

const connectDB: ConnectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  } else {
    // Use new db connection
    if (process.env.mongodburl) {
      await mongoose.connect(process.env.mongodburl);
    }
    return handler(req, res);
  }
};

export default connectDB;
