import AdCreateSchema from "@/models/adCreate";
import { connectDB } from "@/utils/connectDB";

export const POST = async (request: Request) => {
  const { title, category, hour, requirements, future } = await request.json();

  try {
    await connectDB();
    const existingJob = await AdCreateSchema.findOne({ title: title });
    if (existingJob) {
      return new Response(`${existingJob.title} job already exist`, {
        status: 400,
      });
    }
    await AdCreateSchema.create({
      title: title,
      category: category,
      hour: hour,
      requirements: requirements,
      future: future,
    });
    return new Response("Ажлын зар амжилтай үүслээ", { status: 201 });
  } catch (error: unknown | any) {
    return new Response("Алдаа гарлаа дахин оролдон уу", { status: 500 });
  }
};
