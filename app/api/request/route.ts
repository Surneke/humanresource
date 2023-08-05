import RequestCv from "@/models/request";
import { connectDB } from "@/utils/connectDB";

export const GET = async (req: Request) => {
  try {
    await connectDB();
    const sendCVs = await RequestCv.find();
    return new Response(JSON.stringify(sendCVs), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch user", { status: 500 });
  }
};
