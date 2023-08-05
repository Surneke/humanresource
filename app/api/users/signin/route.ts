import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "@/models/user";
import { connectDB } from "@/utils/connectDB";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const { email, password } = await req.json();
  try {
    await connectDB();

    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return new Response("Хэрэглэгч олдсонгүй", { status: 404 });
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);

    if (!matchPassword) {
      return new Response("Нууц үг буруу байна", { status: 400 });
    }

    const variant = {
      id: existingUser._id,
      email: existingUser.email,
      role: existingUser.role,
      name: existingUser.name,
    };
    const token = jwt.sign(variant, "task");

    const data = JSON.stringify({ user: existingUser, token });
    return new Response(data, { status: 201 });
  } catch (error) {
    return new Response("Failed to login", { status: 500 });
  }
};
