import mongoose from "mongoose";

interface IUser {
  Name: string;
  email: string;

  password: String;
  confirmPassword: String;
}

const userSchema = new mongoose.Schema(
  {
    Name: String,
    email: String,
    password: String,
    confirmPassword: String,
  },
  { versionKey: false }
);

const UserModel = mongoose.models.user || mongoose.model("user", userSchema);

export default UserModel;
