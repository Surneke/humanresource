import RequestCv from "@/models/request";
import { connectDB } from "@/utils/connectDB";

export const POST = async (req: Request) => {
  const { userId, jobId } = await req.json();
  try {
    await connectDB();
    const existUser = await RequestCv.findOne({ userId: userId });
    if (existUser) {
      if (existUser.jobId == jobId) {
        return new Response("Already sent", { status: 200 });
      }
    }
    await RequestCv.create({
      userId: userId,
      jobId: jobId,
    });
    return new Response("Амжилтай илгээлээ", { status: 201 });
  } catch (error) {
    return new Response("Алдаа гарлаа дахин оролдон уу", { status: 500 });
  }
};
