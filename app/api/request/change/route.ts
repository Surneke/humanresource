import RequestCv from "@/models/request";
import { connectDB } from "@/utils/connectDB";

export const POST = async (req: Request) => {
  const { userId, jobId, isApproved } = await req.json();
  try {
    await connectDB();
    const existRequest = await RequestCv.findOne({
      jobId: jobId,
      userId: userId,
    });
    if (!existRequest) {
      return new Response("Request not found", { status: 400 });
    }
    await RequestCv.findByIdAndUpdate({ isApproved: true });
    return new Response("Success", { status: 201 });
  } catch (error) {
    return new Response("Алдаа гарлаа дахин оролдон уу", { status: 500 });
  }
};
