import User from "@/models/user";
import { connectDB } from "@/utils/connectDB";

export const GET = async () => {
  try {
    await connectDB();
    const allUsers = await User.find();
    return new Response(JSON.stringify(allUsers), { status: 200 });
  } catch (error) {
    return new Response("Алдаа гарлаа дахин оролдон уу", { status: 500 });
  }
};
