import JobCategory from "@/models/jobCategory";
import { connectDB } from "@/utils/connectDB";

export const POST = async (request: Request) => {
  const { jobName } = await request.json();
  try {
    await connectDB();

    const existingJob = await JobCategory.findOne({ jobCategoryName: jobName });
    if (existingJob) {
      return new Response(
        `${existingJob.jobName} ажилын байр бүртгэгдсэн байна`,
        { status: 400 }
      );
    }
    const result = await JobCategory.create({
      jobCategoryName: jobName,
    });

    return new Response("Ажлын байр амжилтай үүслээ", { status: 201 });
  } catch (error: unknown | any) {
    return new Response("Алдаа гарлаа дахин оролдон уу", { status: 500 });
  }
};

export const GET = async () => {
  try {
    await connectDB();
    const jobs = await JobCategory.find();
    return new Response(JSON.stringify(jobs), { status: 200 });
  } catch (error: unknown | any) {
    return new Response(error, { status: 500 });
  }
};
