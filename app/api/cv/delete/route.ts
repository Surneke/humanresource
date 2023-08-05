import CV from "@/models/cv";
import { connectDB } from "@/utils/connectDB";

export const POST = async (request: Request) => {
  const { userId } = await request.json();
  try {
    await connectDB();

    const exist = await CV.deleteOne({ userid: userId });

    return new Response(JSON.stringify(exist), { status: 200 });
  } catch (error) {
    return new Response("Хүсэлт амжилтгүй", { status: 500 });
  }
};
