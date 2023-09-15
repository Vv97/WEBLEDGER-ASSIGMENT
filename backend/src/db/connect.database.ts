import mongoose from "mongoose";

const mongoUrl =
  "mongodb+srv://vishal:pikkachu@cluster0.rwpozon.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async (): Promise<string> => {
  try {
    await mongoose.connect(mongoUrl);
    console.log(`db connected`);
    return "successfully";
  } catch (error) {
    console.log("Database connection error", error);
    return Promise.reject("failed");
  }
};

export default connectDB;
