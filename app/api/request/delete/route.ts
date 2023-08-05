import RequestCv from "@/models/request";
import { connectDB } from "@/utils/connectDB";

export const POST = async (request: Request) => {
  const { userId } = await request.json();
  try {
    await connectDB();

    const exist = await RequestCv.deleteOne({ userid: userId });

    return new Response(JSON.stringify(exist.acknowledged), { status: 200 });
  } catch (error) {
    return new Response("Хүсэлт амжилтгүй", { status: 500 });
  }
};
