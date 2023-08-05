import JobCategory from "@/models/jobCategory";
import { connectDB } from "@/utils/connectDB";
import { ObjectId } from "mongodb";

export const POST = async (req: Request) => {
  const { jobId } = await req.json();
  try {
    await connectDB();

    const deleted = await JobCategory.deleteOne({ _id: new ObjectId(jobId) });
    return new Response(JSON.stringify(deleted.acknowledged), { status: 201 });
  } catch (error: unknown | any) {
    return new Response(error, { status: 500 });
  }
};
