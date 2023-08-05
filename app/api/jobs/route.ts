import AdCreateSchema from "@/models/adCreate";
import { connectDB } from "@/utils/connectDB";

export const GET = async () => {
  try {
    await connectDB();
    const allJobs = await AdCreateSchema.find();
    return new Response(JSON.stringify(allJobs), { status: 200 });
  } catch (error) {
    return new Response("Алдаа гарлаа дахин оролдон уу 1", { status: 500 });
  }
};
