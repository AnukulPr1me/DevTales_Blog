import mongoose from "mongoose";

const useSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "https://images7.alphacoders.com/135/1355992.jpg",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", useSchema);

export default User;
