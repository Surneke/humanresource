import { useAuthProvider } from "@/context/authProvider";
import { AuthType } from "@/types";
import { useState } from "react";

const { userInfo } = useAuthProvider() as unknown as AuthType;
export const [data, setData] = useState<any>();

export const generalForm = {
  userid: userInfo?.id,
  aboutMe: data ? data?.general.aboutMe : "",
  birthday: data ? data?.general.birthday : "",
  gender: data ? data?.general.gender : "",
  lastName: userInfo?.lastName,
  firstName: userInfo?.firstName,
};

export const contactForm = {
  userid: userInfo?.id,
  email: userInfo?.email,
  phoneNumber: userInfo?.phoneNumber,
};

export const courseForm = {
  userid: userInfo?.id,
  courseName: data ? data?.practiceImformation.course.courseName : "",
  endStartDate: data ? data?.practiceImformation.course.endStartDate : "",
};
export const practiceForm = {
  userid: userInfo?.id,
  courseName: data ? data?.practiceImformation.practice.companyName : "",
  endStartDate: data ? data?.practiceImformation.practice.endStartDate : "",
};
export const jobExperienceForm = {
  userid: userInfo?.id,
  jobExperience: data ? data?.jobExperience : "",
};
export const softSkillsForm = {
  userid: userInfo?.id,
  softSkills: data ? data?.softSkill : "",
};
export const jobForm = {
  userid: userInfo?.id,
  salary: data ? data?.jobImformation.salary : "",
  jobType: data ? data?.jobImformation.jobType : "",
  jobCategory: data ? data?.jobImformation.jobCategory : "",
};

// export const educationForm = {
//   userid: userInfo?.id,
//   degree: data?id.listId === 0
//       ? ""
//       : data.education[id.listId]?.degree
//     : "",
//   country: data
//     ? id.listId === 0
//       ? ""
//       : data.education[id.listId]?.country
//     : "",
//   schoolName: data
//     ? id.listId === 0
//       ? ""
//       : data.education[id.listId]?.schoolName
//     : "",
//   occupation: data
//     ? id.listId === 0
//       ? ""
//       : data.education[id.listId]?.occupation
//     : "",
//   startYear: data
//     ? id.listId === 0
//       ? ""
//       : data.education[id.listId]?.startYear
//     : "",
//   endYear: data
//     ? id.listId === 0
//       ? ""
//       : data.education[id.listId]?.endYear
//     : "",
// };
