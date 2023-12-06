import mongoose from "mongoose";

const userSchema = new mongoose().Schema(
  {
    userName: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    passeord: { type: String, require: true, unique: false },
  },
  { timestamps: true }
);

const User = mongoose.Model("User", userSchema);

export default User;
