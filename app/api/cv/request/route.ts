import CV from "@/models/cv";
import { ObjectId } from "mongodb";
import RequestCv from "@/models/request";
import { connectDB } from "@/utils/connectDB";

export const POST = async (request: Request) => {
  const { id } = await request.json();
  try {
    await connectDB();

    const exist = await RequestCv.findOne({ userid: id });
    if (exist) {
      return new Response("Илгээлдсэн байна", { status: 500 });
    }
    await RequestCv.create({
      userId: id,
    });

    return new Response("Илгээлдлээ", { status: 201 });
  } catch (error) {
    return new Response("Хүсэл амжилтгүй", { status: 500 });
  }
};

export const GET = async (request: Request) => {
  try {
    await connectDB();

    const inbox = await RequestCv.find({});
    inbox.map(async (el) => {
      const res = await CV.findOne({ userId: el.userId });
      return res.userId.valueOf();
    });
    return new Response(JSON.stringify(inbox), { status: 201 });
  } catch (error) {
    return new Response("Хүсэл амжилтгүй", { status: 500 });
  }
};
