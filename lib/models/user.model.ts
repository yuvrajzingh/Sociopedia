import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: String,
  bio: String,
  sociopedia: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sociopedia",
    },
  ],
  onboarded: {
    type: Boolean,
    default: false,
  },
  communities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community",
    },
  ],
});

const User = mongoose.models.User || mongoose.model("User", userSchema); // because for the first time mongoose model won't exist so it will fall back and create one and then if it calls it, it'll already have a mongoose model in the database so it's gonna know to create it off of that instance.

export default User;



