// const generalForm = {
//     userid: userInfo?.id,
//     aboutMe: data ? data?.general.aboutMe : "",
//     birthday: data ? data?.general.birthday : "",
//     gender: data ? data?.general.gender : "",
//     lastName: userInfo?.lastName,
//     firstName: userInfo?.firstName,
//   };

//   const contactForm = {
//     userid: userInfo?.id,
//     email: userInfo?.email,
//     phoneNumber: userInfo?.phoneNumber,
//   };

//   const courseForm = {
//     userid: userInfo?.id,
//     courseName: data ? data?.practiceImformation.course.courseName : "",
//     endStartDate: data ? data?.practiceImformation.course.endStartDate : "",
//   };
//   const practiceForm = {
//     userid: userInfo?.id,
//     courseName: data ? data?.practiceImformation.practice.companyName : "",
//     endStartDate: data ? data?.practiceImformation.practice.endStartDate : "",
//   };
//   const jobExperienceForm = {
//     userid: userInfo?.id,
//     jobExperience: data ? data?.jobExperience : "",
//   };
//   const softSkillsForm = {
//     userid: userInfo?.id,
//     softSkills: data ? data?.softSkill : "",
//   };
//   const jobForm = {
//     userid: userInfo?.id,
//     salary: data ? data?.jobImformation.salary : "",
//     jobType: data ? data?.jobImformation.jobType : "",
//     jobCategory: data ? data?.jobImformation.jobCategory : "",
//   };

//   const educationForm = {
//     userid: userInfo?.id,
//     degree: data
//       ? id.listId === 0
//         ? ""
//         : data.education[id.listId]?.degree
//       : "",
//     country: data
//       ? id.listId === 0
//         ? ""
//         : data.education[id.listId]?.country
//       : "",
//     schoolName: data
//       ? id.listId === 0
//         ? ""
//         : data.education[id.listId]?.schoolName
//       : "",
//     occupation: data
//       ? id.listId === 0
//         ? ""
//         : data.education[id.listId]?.occupation
//       : "",
//     startYear: data
//       ? id.listId === 0
//         ? ""
//         : data.education[id.listId]?.startYear
//       : "",
//     endYear: data
//       ? id.listId === 0
//         ? ""
//         : data.education[id.listId]?.endYear
//       : "",
//   };

// const handleSubmitGeneral = async (props: GeneralForm) => {
//     const res = await formPut({ form: props, type: "general" });
//     setIsOpen({ ...isOpen, general: false });
//     setRefresh((p) => !p);
//   };

//   const handleSubmitContact = async (props: GeneralForm) => {
//     const res = await formPut({ form: props, type: "contact" });
//     setIsOpen({ ...isOpen, contact: false });
//     setRefresh((p) => !p);
//   };

//   const handleSubmitJob = async (props: GeneralForm) => {
//     const res = await formPut({ form: props, type: "job" });
//     setIsOpen({ ...isOpen, job: false });
//     setRefresh((p) => !p);
//   };
//   const handleSubmitExperience = async (props: GeneralForm) => {
//     const res = await formPut({ form: props, type: "experience" });
//     setIsOpen({ ...isOpen, experience: false });
//     setRefresh((p) => !p);
//   };

//   const handleSubmitSoftSkill = async (props: GeneralForm) => {
//     const res = await formPut({ form: props, type: "softskill" });
//     setIsOpen({ ...isOpen, softskill: false });
//     setRefresh((p) => !p);
//   };

//   const handleSubmitCourse = async (props: GeneralForm) => {
//     const res = await formPut({ form: props, type: "course" });
//     setIsOpen({ ...isOpen, course: false });
//     setRefresh((p) => !p);
//   };
//   const handleSubmitPractice = async (props: GeneralForm) => {
//     const res = await formPut({ form: props, type: "practice" });
//     setIsOpen({ ...isOpen, practice: false });
//     setRefresh((p) => !p);
//   };

//   const handleSubmitEducation = async (props: GeneralForm) => {
//     if (id.listId === 0) {
//       await formPut({ form: props, type: "education" });
//       setIsOpen({ ...isOpen, education: false });
//       setRefresh((p) => !p);
//       return;
//     }
//     const res = await formEdit({
//       data: data.education[id.listId],
//       update: props,
//     });
//     console.log(res);
//     setIsOpen({ ...isOpen, education: false });
//     setRefresh((p) => !p);
//   };

// const deleteForm = async (props: string) => {
//   const res = await formDelete(props);
//   console.log(res);
// };

// import { Schema, models, model } from "mongoose";

// const cvSchema = new Schema({
//   userId: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//   },
//   generalImformation: {
//     aboutMe: {
//       type: String,
//     },
//     lastName: {
//       type: String,
//     },
//     firstName: {
//       type: String,
//     },
//     gender: {
//       type: String,
//     },
//     birthday: {
//       type: String,
//     },
//   },
//   contact: {
//     phoneNumber: {
//       type: String,
//     },
//     email: {
//       type: String,
//     },
//   },
//   jobImformation: {
//     jobType: {
//       type: String,
//     },
//     jobCategory: {
//       type: Schema.Types.ObjectId,
//       ref: "JobCategory",
//     },
//     salary: {
//       type: String,
//     },
//   },
//   educationInformation: [
//     {
//       degree: { type: String },
//       country: { type: String },
//       schoolName: { type: String },
//       occupation: { type: String },
//       startYear: { type: String },
//       endYear: { type: String },
//     },
//   ],
//   jobExperience: {
//     type: String,
//   },
//   practiceImformation: {
//     course: {
//       courseName: {
//         type: String,
//       },
//       endStartDate: {
//         type: String,
//       },
//     },
//     practice: {
//       companyName: {
//         type: String,
//       },
//       endStartDate: {
//         type: String,
//       },
//     },
//   },
//   softSkills: {
//     type: String,
//   },
// });

// const CV = models.CV || model("CV", cvSchema);

// export default CV;
