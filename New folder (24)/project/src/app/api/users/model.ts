import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: String,
  },
  { collection: "Users", timestamps: false }
);

const User = mongoose.models.Users || mongoose.model("Users", userSchema);

export default User;
