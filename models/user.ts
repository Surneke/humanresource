import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email is already exists!"],
    required: [true, "Email is required!"],
  },
  role: {
    type: String,
    unique: false,
  },
  name: {
    type: String,
    unique: false,
  },
  password: {
    unique: true,
    type: String,
  },
});

const User = models.User || model("User", userSchema);

export default User;
