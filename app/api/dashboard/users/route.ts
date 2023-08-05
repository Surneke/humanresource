import User from "@/models/user";
import { connectDB } from "@/utils/connectDB";

export const GET = async (req: Request) => {
  try {
    await connectDB();
    const allUsers = await User.find();
    return new Response(JSON.stringify(allUsers), { status: 200 });
  } catch (error: unknown | any) {
    return new Response(error, { status: 500 });
  }
};
