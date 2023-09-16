
require('dotenv').config({ path: '../.env.local'});
import mongoose from "mongoose";

let isConnected = false; // flag to track the connection status

export const connectToDB = async () => {
  // Set strict query mode for Mongoose to prevent unknown field queries.
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("Missing MongoDB URL");

  // If the connection is already established, return without creating a new connection.
  if (isConnected) {
    console.log("MongoDB connection already established");
    return;
  }


  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true; // Set the connection status to true
    console.log("MongoDB Atlas connected");
  } catch (error) {
    console.log("Error Connecting to MongoDB Atlas", error);
  }
}; 