import CV from "@/models/cv";
import { connectDB } from "@/utils/connectDB";

// export const PATCH = async (req: Request) => {
//   const { form } = await req.json();
//   try {
//     await connectDB();
//     const exist = await CV.findOne({
//       education: { $elemMatch: { _id: new ObjectId(form.data._id) } },
//     });
//     const filter = exist.education.filter(
//       (el: any) => el._id.valueOf() === form.data._id
//     );
//     filter[0].degree = form.update.degree;
//     filter[0].endYear = form.update.endYear;
//     filter[0].country = form.update.country;
//     filter[0].startYear = form.update.startYear;
//     filter[0].occupation = form.update.occupation;
//     filter[0].schoolName = form.update.schoolName;

//     await exist.save();

//     return new Response("Амжилттай шинэчлэгдлээ", { status: 200 });
//   } catch (error) {
//     return new Response("Олдсонгүй", { status: 500 });
//   }
// };

export const POST = async (req: Request) => {
  const form = await req.json();
  try {
    await connectDB();
    const exist = await CV.findOne({ userId: form.userId });

    if (exist) {
      return new Response("Already exist", { status: 200 });
    }

    await CV.create({
      userId: form.userId,
      general: {
        aboutMe: form.form.general.aboutMe,
        birthday: form.form.general.birthday,
        gender: form.form.general.gender,
        lastName: form.form.general.lastName,
        firstName: form.form.general.firstName,
      },
      contact: { email: form.form.contact.email, phoneNumber: form.form.contact.phoneNumber },
      job: { salary: form.form.job.salary, jobType: form.form.job.jobType, interestedJob: form.form.job.interestedJob },
      experience: { company: form.form.experience.company, year: form.form.experience.year },
      education: {
        degree: form.form.education.degree,
        schoolName: form.form.education.schoolName,
        country: form.form.education.country,
        occupation: form.form.education.occupation,
        startYear: form.form.education.startYear,
        endYear: form.form.education.endYear,
      },
      course: { name: form.form.course.name, year: form.form.course.year },
      practice: { name: form.form.practice.name, period: form.form.practice.period },
      softskill: { list: form.form.softskill.list },
    });

    return new Response("Хадгалалт амжилттай", { status: 201 });
  } catch (error) {
    return new Response("Хадгалалт амжилтгүй", { status: 500 });
  }
};
// export const PUT = async (req: Request) => {
//   const { form, type } = await req.json();
//   try {
//     await connectDB();
//     if (type === "general") {
//       const cvF = await CV.findOne({ userid: form.userid });

//       cvF.generalImformation.gender = form.gender;
//       cvF.generalImformation.aboutMe = form.aboutMe;
//       cvF.generalImformation.lastName = form.lastName;
//       cvF.generalImformation.birthday = form.birthday;
//       cvF.generalImformation.firstName = form.firstName;

//       await cvF.save();
//       return new Response("Амжилттай хадгаллаа", { status: 200 });
//     }
//     if (type === "contact") {
//       const cvF = await CV.findOne({ userid: form.userid });

//       cvF.contact.phoneNumber = form.phoneNumber;
//       cvF.contact.email = form.email;
//       await cvF.save();
//       return new Response("Амжилттай хадгаллаа", { status: 200 });
//     }
//     if (type === "job") {
//       const cvF = await CV.findOne({ userid: form.userid });

//       cvF.jobImformation.jobType = form.salary;
//       cvF.jobImformation.jobCategory = form.job;
//       cvF.jobImformation.salary = form.workingType;

//       await cvF.save();
//       return new Response("Амжилттай хадгаллаа", { status: 200 });
//     }
//     if (type === "education") {
//       const cvF = await CV.findOne({ userid: form.userid });

//       cvF.education.push({
//         degree: form.degree,
//         country: form.country,
//         endYear: form.endYear,
//         startYear: form.startYear,
//         schoolName: form.schoolName,
//         occupation: form.occupation,
//       });
//       await cvF.save();
//       return new Response("Амжилттай хадгаллаа", { status: 200 });
//     }
//     if (type === "course") {
//       const cvF = await CV.findOne({ userid: form.userid });

//       cvF.practiceImformation.course.courseName = form.salary;
//       cvF.practiceImformation.course.endStartDate = form.job;
//       await cvF.save();
//       return new Response("Амжилттай хадгаллаа", { status: 200 });
//     }
//     if (type === "practice") {
//       const cvF = await CV.findOne({ userid: form.userid });

//       cvF.practiceImformation.practice.companyName = form.salary;
//       cvF.practiceImformation.practice.endStartDate = form.job;
//       await cvF.save();
//       return new Response("Амжилттай хадгаллаа", { status: 200 });
//     }
//     if (type === "softskill") {
//       const cvF = await CV.findOne({ userid: form.userid });
//       cvF.softSkills = form.salary;
//       await cvF.save();
//       return new Response("Амжилттай хадгаллаа", { status: 200 });
//     }
//     if (type === "experience") {
//       const cvF = await CV.findOne({ userid: form.userid });
//       cvF.jobExperience = form.salary;
//       await cvF.save();
//       return new Response("Амжилттай хадгаллаа", { status: 200 });
//     }
//     return new Response("Алдаа гарлаа", { status: 500 });
//   } catch (error) {
//     return new Response("Олдсонгүй", { status: 500 });
//   }
// };

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  try {
    await connectDB();
    const cv = await CV.findOne({ userid: id });
    if (!cv) {
      return new Response("Олдсонгүй", { status: 500 });
    }
    return new Response(JSON.stringify(cv), { status: 200 });
  } catch (error) {
    return new Response("Олдсонгүй", { status: 500 });
  }
};
