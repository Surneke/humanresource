import CV from "@/models/cv";
import { SearchProps } from "@/types";
import { connectDB } from "@/utils/connectDB";

export const POST = async (req: SearchProps) => {
  const { email, firstName, phoneNumber, job } = await req.json();

  try {
    await connectDB();
    let pipeline = aggregatePipeline({
      jobType: job,
      email: email,
      firstName: firstName,
      phoneNumber: phoneNumber,
    });
    const allUsers = await CV.aggregate(pipeline);
    return new Response(JSON.stringify(allUsers), { status: 200 });
  } catch (error) {
    return new Response("Алдаа гарлаа дахин оролдон уу", { status: 500 });
  }
};

const aggregatePipeline = (body: SearchProps) => {
  let pipeline;
  if (body?.firstName) {
    pipeline = [
      {
        $match: {
          "general.firstName": {
            $regex: body?.firstName,
          },
        },
      },
    ];
  }
  if (body?.email) {
    pipeline = [
      {
        $match: {
          "contact.email": {
            $regex: body?.email,
          },
        },
      },
    ];
  }
  if (body?.jobType) {
    pipeline = [
      {
        $match: {
          "job.jobType": {
            $regex: body?.jobType,
          },
        },
      },
    ];
  }
  if (body?.firstName) {
    pipeline = [
      {
        $match: {
          "general.firstName": {
            $regex: body?.firstName,
          },
        },
      },
    ];
  }
  if (body?.firstName && body?.email) {
    pipeline = [
      {
        $match: {
          "general.firstName": {
            $regex: body?.firstName,
          },
        },
      },
      {
        $match: {
          "contact.email": {
            $regex: body?.email,
          },
        },
      },
    ];
  }
  if (body?.phoneNumber && body?.email) {
    pipeline = [
      {
        $match: {
          "contact.phoneNumber": {
            $regex: body?.phoneNumber,
          },
        },
      },
      {
        $match: {
          "contact.email": {
            $regex: body?.email,
          },
        },
      },
    ];
  }
  if (body?.phoneNumber && body?.firstName) {
    pipeline = [
      {
        $match: {
          "contact.phoneNumber": {
            $regex: body?.phoneNumber,
          },
        },
      },
      {
        $match: {
          "general.firstName": {
            $regex: body?.firstName,
          },
        },
      },
    ];
  }
  if (body?.jobType && body?.firstName) {
    pipeline = [
      {
        $match: {
          "job.jobType": {
            $regex: body?.jobType,
          },
        },
      },
      {
        $match: {
          "general.firstName": {
            $regex: body?.firstName,
          },
        },
      },
    ];
  }
  if (body?.jobType && body?.email) {
    pipeline = [
      {
        $match: {
          "job.jobType": {
            $regex: body?.jobType,
          },
        },
      },
      {
        $match: {
          "general.email": {
            $regex: body?.email,
          },
        },
      },
    ];
  }
  if (body?.jobType && body?.phoneNumber) {
    pipeline = [
      {
        $match: {
          "job.jobType": {
            $regex: body?.jobType,
          },
        },
      },
      {
        $match: {
          "general.phoneNimber": {
            $regex: body?.phoneNumber,
          },
        },
      },
    ];
  }
  return pipeline;
};
