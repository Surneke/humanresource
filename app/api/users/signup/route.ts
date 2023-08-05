import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/models/user";
import { connectDB } from "@/utils/connectDB";
import type { NextRequest } from "@/node_modules/next/server";

export const POST = async (req: NextRequest) => {
  const { email, password, name } = await req.json();
  try {
    await connectDB();
    const existUser = await User.findOne({ email: email });
    if (existUser) {
      return new Response("User already exist", { status: 404 });
    }
    const hashPass = await bcrypt.hashSync(password, 12);
    const result = await User.create({
      name: name,
      email: email,
      role: "user",
      password: hashPass,
    });

    const variant = {
      name: result.name,
      id: result._id,
      role: result.role,
      email: result.email,
      password: result.password,
    };
    const token = jwt.sign(variant, "task");
    const data = JSON.stringify({ user: result, token: token });
    return new Response(data, { status: 201 });
  } catch (error) {
    return new Response("Хэрэглэгчийг үүсгэж чадсангүй", { status: 500 });
  }
};
