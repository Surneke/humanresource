import CV from "@/models/cv";
import { connectDB } from "@/utils/connectDB";

export const GET = async (req: Request) => {
  try {
    await connectDB();
    const userCV = await CV.find();
    return new Response(JSON.stringify(userCV), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch user", { status: 500 });
  }
};

export const POST = async (req: Request) => {
  const form = await req.json();
  try {
    await connectDB();
    const exist = await CV.findOne({ userId: form.userId });
    console.log(exist);

    if (exist) {
      exist.general.aboutMe = form.form.general.aboutMe;
      exist.general.birthday = form.form.general.birthday;
      exist.general.gender = form.form.general.gender;
      exist.general.lastName = form.form.general.lastName;
      exist.general.firstName = form.form.general.firstName;

      exist.contact.email = form.form.contact.email;
      exist.contact.phoneNumber = form.form.contact.phoneNumber;

      exist.job.salary = form.form.job.salary;
      exist.job.jobType = form.form.job.jobType;
      exist.job.interestedJob = form.form.job.interestedJob;

      exist.experience.company = form.form.experience.company;
      exist.experience.year = form.form.experience.year;

      exist.education.degree = form.form.education.degree;
      exist.education.schoolName = form.form.education.schoolName;
      exist.education.country = form.form.education.country;
      exist.education.occupation = form.form.education.occupation;
      exist.education.startYear = form.form.education.startYear;
      exist.education.endYear = form.form.education.endYear;

      exist.course.name = form.form.course.name;
      exist.course.year = form.form.course.year;

      exist.practice.name = form.form.practice.name;
      exist.practice.period = form.form.practice.period;

      exist.softskill.list = form.form.softskill.list;

      await exist.save();
      return new Response("Хадгалалт амжилттай", { status: 200 });
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

    return new Response("Хадгалалт амжилттай ggg", { status: 201 });
  } catch (error) {
    return new Response("Хадгалалт амжилтгүй", { status: 500 });
  }
};
