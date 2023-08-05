"use client";

import axios from "axios";
import Image from "next/image";
import { Header } from "@/layouts";
import { AuthType } from "@/types";
import { Forms } from "@/components/forms";
import { useEffect, useState } from "react";
import { CVField } from "@/components/cvfield";
import { useAuthProvider } from "@/context/authProvider";

function page() {
  const [isOpen, setIsOpen] = useState({
    job: false,
    course: false,
    contact: false,
    general: false,
    practice: false,
    education: false,
    softskill: false,
    experience: false,
  });
  const [data, setData] = useState({
    general: {
      aboutMe: "",
      birthday: "",
      gender: "",
      lastName: "",
      firstName: "",
    },
    contact: {
      email: "",
      phoneNumber: "",
    },
    job: {
      salary: "",
      jobType: "",
      interestedJob: "",
    },
    experience: {
      company: "",
      year: "",
    },
    education: {
      degree: "",
      schoolName: "",
      country: "",
      occupation: "",
      startYear: "",
      endYear: "",
    },
    course: {
      name: "",
      year: "",
    },
    practice: {
      name: "",
      period: "",
    },
    softskill: {
      list: "",
    },
  });
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState("");
  const [existUser, setExistUser] = useState(false);
  const [existCV, setExistCV] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  const { userInfo } = useAuthProvider() as unknown as AuthType;

  // ======================= FORM =======================
  const generalForm = {
    aboutMe: data.general.aboutMe === "" ? "" : data.general.aboutMe,
    birthday: data.general.birthday === "" ? "" : data.general.birthday,
    gender: data.general.gender === "" ? "" : data.general.gender,
    lastName: data.general.lastName === "" ? "" : data.general.lastName,
    firstName: data.general.firstName === "" ? "" : data.general.firstName,
  };
  const contact = {
    email: data.contact.email === "" ? "" : data.contact.email,
    phoneNumber:
      data.contact.phoneNumber === "" ? "" : data.contact.phoneNumber,
  };
  const job = {
    salary: data.job.salary === "" ? "" : data.job.salary,
    jobType: data.job.jobType === "" ? "" : data.job.jobType,
    interestedJob: data.job.interestedJob === "" ? "" : data.job.interestedJob,
  };
  const experience = {
    company: data.experience.company === "" ? "" : data.experience.company,
    year: data.experience.year === "" ? "" : data.experience.year,
  };
  const education = {
    degree: data.education.degree === "" ? "" : data.education.degree,
    schoolName:
      data.education.schoolName === "" ? "" : data.education.schoolName,
    country: data.education.country === "" ? "" : data.education.country,
    occupation:
      data.education.occupation === "" ? "" : data.education.occupation,
    startYear: data.education.startYear === "" ? "" : data.education.startYear,
    endYear: data.education.endYear === "" ? "" : data.education.endYear,
  };
  const course = {
    name: data.course.name === "" ? "" : data.course.name,
    year: data.course.year === "" ? "" : data.course.year,
  };
  const practice = {
    name: data.practice.name === "" ? "" : data.practice.name,
    period: data.practice.period === "" ? "" : data.practice.period,
  };
  const softskill = {
    list: data.softskill.list === "" ? "" : data.softskill.list,
  };

  // ======================= HANDLER FUNCTIONS =======================
  const handleSubmitGeneral = async (props: any) => {
    setData({
      ...data,
      general: {
        aboutMe: props.aboutMe,
        birthday: props.birthday,
        gender: props.gender,
        lastName: props.lastName,
        firstName: props.firstName,
      },
    });
    setIsOpen({ ...isOpen, general: !isOpen.general });
  };
  const handleSubmitContact = async (props: any) => {
    setData({
      ...data,
      contact: {
        email: props.email,
        phoneNumber: props.phoneNumber,
      },
    });
    setIsOpen({ ...isOpen, contact: !isOpen.contact });
  };
  const handleSubmitJob = async (props: any) => {
    setData({
      ...data,
      job: {
        salary: props.salary,
        jobType: props.jobType,
        interestedJob: props.interestedJob,
      },
    });
    setIsOpen({ ...isOpen, job: !isOpen.job });
  };
  const handleSubmitExperience = async (props: any) => {
    setData({
      ...data,
      experience: {
        company: props.company,
        year: props.year,
      },
    });
    setIsOpen({ ...isOpen, experience: !isOpen.experience });
  };
  const handleSubmitEducation = async (props: any) => {
    setData({
      ...data,
      education: {
        degree: props.degree,
        schoolName: props.schoolName,
        country: props.country,
        occupation: props.occupation,
        startYear: props.startYear,
        endYear: props.endYear,
      },
    });
    setIsOpen({ ...isOpen, education: !isOpen.education });
  };
  const handleSubmitCourse = async (props: any) => {
    setData({
      ...data,
      course: {
        name: props.name,
        year: props.year,
      },
    });
    setIsOpen({ ...isOpen, course: !isOpen.course });
  };
  const handleSubmitPractice = async (props: any) => {
    setData({
      ...data,
      practice: {
        name: props.name,
        period: props.period,
      },
    });
    setIsOpen({ ...isOpen, practice: !isOpen.practice });
  };
  const handleSubmitSoftskill = async (props: any) => {
    setData({
      ...data,
      softskill: {
        list: props.list,
      },
    });
    setIsOpen({ ...isOpen, softskill: !isOpen.softskill });
  };

  useEffect(() => {
    (async () => {
      const res = await axios.get("api/cv");
      const approved = await axios.get("api/cv/request");

      if (userInfo?.id === undefined) {
        setRefresh((p) => !p);
        return;
      }
      const already = await res.data.filter(
        (el: { userId: string }) => el.userId === userInfo?.id
      );
      const exis = await approved.data.filter(
        (el: { userId: string }) => el.userId === userInfo?.id
      );

      if (exis.length > 0) {
        setExistCV(true);
        console.log(exis[0].isApproved);
        if (exis[0].isApproved === false) {
          setIsApproved(false);
        } else if (exis[0].isApproved === true) {
          setIsApproved(true);
        }
      }
      if (already.length > 0) {
        setExistUser(true);
        setData({
          ...data,
          general: {
            aboutMe: already[0].general.aboutMe,
            birthday: already[0].general.birthday,
            gender: already[0].general.gender,
            lastName: already[0].general.lastName,
            firstName: already[0].general.firstName,
          },
          contact: {
            email: already[0].contact.email,
            phoneNumber: already[0].contact.phoneNumber,
          },
          job: {
            salary: already[0].job.salary,
            jobType: already[0].job.jobType,
            interestedJob: already[0].job.interestedJob,
          },
          experience: {
            company: already[0].experience.company,
            year: already[0].experience.year,
          },
          education: {
            degree: already[0].education.degree,
            schoolName: already[0].education.schoolName,
            country: already[0].education.country,
            occupation: already[0].education.occupation,
            startYear: already[0].education.startYear,
            endYear: already[0].education.endYear,
          },
          course: {
            name: already[0].course.name,
            year: already[0].course.year,
          },
          practice: {
            name: already[0].practice.name,
            period: already[0].practice.period,
          },
          softskill: {
            list: already[0].softskill.list,
          },
        });
        return;
      }
      return;
    })();
  }, [refresh]);

  const saveCV = async () => {
    if (data.general.aboutMe === "") {
      alert("Анкет аа бүрэн бөглөн үү");
      return;
    }
    if (data.general.firstName === "") {
      alert("Анкет аа бүрэн бөглөн үү");
      return;
    }
    if (data.general.lastName === "") {
      alert("Анкет аа бүрэн бөглөн үү");
      return;
    }
    if (data.general.gender === "") {
      alert("Анкет аа бүрэн бөглөн үү");
      return;
    }
    if (data.contact.email === "") {
      alert("Анкет аа бүрэн бөглөн үү");
      return;
    }
    if (data.contact.phoneNumber === "") {
      alert("Анкет аа бүрэн бөглөн үү");
      return;
    }
    try {
      setLoading("save");
      if (!existUser) {
        const res = await axios.post(`api/cv/new`, {
          userId: userInfo?.id,
          form: data,
        });
        if (res.status === 201) {
          setRefresh((p) => !p);
          setLoading("");
          alert("Амжилттай хадгаллаа");
        }
        return;
      }
      const res = await axios.post(`api/cv`, {
        userId: userInfo?.id,
        form: data,
      });
      if (res.status === 200) {
        setRefresh((p) => !p);
        setLoading("");
        alert("Амжилттай хадгаллаа");
      }
    } catch (error: unknown | any) {
      alert(error.response.data);
    }
  };

  const deleteCV = async () => {
    setLoading("delete");
    try {
      const res = await axios.post(`api/cv/delete`, { userId: userInfo?.id });
      await axios.post(`api/request/delete`, { userId: userInfo?.id });
      if (res.data.acknowledged === true) {
        setRefresh((p) => !p);
        setLoading("");
        alert("Устгагдлаа");
        location.reload();
      }
    } catch (error: unknown | any) {
      alert(error.response.data);
    }
  };

  return (
    <div>
      <Header />
      <section className="pt-14 max-width">
        <h1 className="text-[24px] text-[#000] font-medium">Миний анкет</h1>
        <div className="w-full max-width rounded-[10px] bg-white mt-7 pt-14 pb-36">
          {/* ============= general =============== */}
          <div>
            <div className="h-full max-w-[1156px] border rounded-[10px] px-14 py-10 mb-10 border-indigo-600 ">
              <div className="flex-between border-b border-[#C7C9CF] pb-4 ">
                <h1 className="text-[18px]">Ерөнхий мэдээлэл</h1>
                <button onClick={() => setIsOpen({ ...isOpen, general: true })}>
                  <Image
                    width={30}
                    alt="icon"
                    height={30}
                    src="/icon/bedit.svg"
                  />
                </button>
              </div>
              <div className="pt-10">
                <CVField
                  title="Миний тухай"
                  description={data.general.aboutMe}
                />
              </div>
              <div className="flex-between">
                <div className="flex flex-col gap-4 mt-7">
                  <CVField
                    title="Эцэг\Эхийн нэр"
                    description={data.general.lastName}
                  />
                  <CVField
                    title="Өөрийн нэр"
                    description={data.general.firstName}
                  />
                </div>
                <div className="flex flex-col gap-4 mt-7">
                  <CVField title="Хүйс" description={data.general.gender} />
                  <CVField
                    title="Төрсөн огноо"
                    description={data.general.birthday}
                  />
                </div>
              </div>
            </div>
            <Forms
              closeModal={() => {
                setIsOpen({ ...isOpen, general: !isOpen.general });
              }}
              isOpen={isOpen.general}
              handleSubmit={handleSubmitGeneral}
              type="general"
              form={generalForm}
            />
          </div>
          {/*  ================== contact ======================= */}
          <div>
            <div className="h-full max-w-[1156px] border rounded-[10px] px-14 py-10 mb-10 border-indigo-600 ">
              <div className="flex-between border-b border-[#C7C9CF] pb-4 ">
                <h1 className="text-[18px]">Холбоо барих мэдээлэл</h1>
                <button onClick={() => setIsOpen({ ...isOpen, contact: true })}>
                  <Image
                    width={30}
                    alt="icon"
                    height={30}
                    src="/icon/bedit.svg"
                  />
                </button>
              </div>
              <div className="flex-between pt-10">
                <CVField
                  title="Утасны дугаар"
                  description={data.contact.phoneNumber}
                />
                <CVField title="И-Мэйл хаяг" description={data.contact.email} />
              </div>
            </div>
            <Forms
              closeModal={() => {
                setIsOpen({ ...isOpen, contact: !isOpen.contact });
              }}
              isOpen={isOpen.contact}
              handleSubmit={handleSubmitContact}
              type="contact"
              form={contact}
            />
          </div>
          {/* =================== job ============================*/}
          <div>
            <div className="h-full max-w-[1156px] border rounded-[10px] px-14 py-10 mb-10 border-indigo-600 ">
              <div className="flex-between border-b border-[#C7C9CF] pb-4 ">
                <h1 className="text-[18px]">Ажлын мэдээлэл</h1>
                <button onClick={() => setIsOpen({ ...isOpen, job: true })}>
                  <Image
                    width={30}
                    alt="icon"
                    height={30}
                    src="/icon/bedit.svg"
                  />
                </button>
              </div>
              <div className="flex-between pt-10">
                <div className="flex flex-col gap-4">
                  <CVField
                    title="Ажиллахаар төлөвлөж буй чиглэл"
                    description={data.job.interestedJob}
                  />
                  <CVField
                    title="Цалингийн хүлээлт"
                    description={data.job.salary}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <CVField
                    title="Ажиллах төрөл"
                    description={data.job.jobType}
                  />
                  <div className="h-[54px]" />
                </div>
              </div>
            </div>
            <Forms
              closeModal={() => {
                setIsOpen({ ...isOpen, job: !isOpen.job });
              }}
              isOpen={isOpen.job}
              handleSubmit={handleSubmitJob}
              type="job"
              form={job}
            />
          </div>
          {/* =================== experience ====================== */}
          <div>
            <div className="h-full max-w-[1156px] border rounded-[10px] px-14 py-10 mb-10 border-indigo-600 ">
              <div className="flex-between border-b border-[#C7C9CF] pb-4 ">
                <h1 className="text-[18px]">Ажлын туршлагын мэдээлэл</h1>
                <button
                  onClick={() => setIsOpen({ ...isOpen, experience: true })}
                >
                  <Image
                    width={30}
                    alt="icon"
                    height={30}
                    src="/icon/bedit.svg"
                  />
                </button>
              </div>
              <div className="flex-between pt-10">
                <CVField
                  title="Ажилсан компани"
                  description={data.experience.company}
                />
                <CVField
                  title="Ажилсан жил"
                  description={data.experience.year}
                />
              </div>
            </div>
            <Forms
              closeModal={() => {
                setIsOpen({ ...isOpen, experience: !isOpen.experience });
              }}
              isOpen={isOpen.experience}
              handleSubmit={handleSubmitExperience}
              type="experience"
              form={experience}
            />
          </div>
          {/* ======================== education ========================= */}
          <div>
            <div className="h-full max-w-[1156px] border rounded-[10px] px-14 py-10 mb-10 border-indigo-600 ">
              <div className="flex-between border-b border-[#C7C9CF] pb-4 ">
                <h1 className="text-[18px]">Боловсорлын мэдээлэл</h1>
                <button
                  onClick={() => setIsOpen({ ...isOpen, education: true })}
                >
                  <Image
                    width={30}
                    alt="icon"
                    height={30}
                    src="/icon/bedit.svg"
                  />
                </button>
              </div>
              <div className="flex-between pt-10">
                <div className=" flex flex-col  gap-4">
                  <CVField
                    title="Боловсорлын зэрэг"
                    description={data.education.degree}
                  />
                  <CVField title="Улс" description={data.education.country} />
                  <CVField
                    title="Элссэн огноо"
                    description={data.education.startYear}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <CVField
                    title="Их сургуулийн нэр"
                    description={data.education.schoolName}
                  />
                  <CVField
                    title="Мэрэгжил"
                    description={data.education.occupation}
                  />
                  <CVField
                    title="Төгссөн огноо"
                    description={data.education.endYear}
                  />
                </div>
              </div>
            </div>
            <Forms
              closeModal={() => {
                setIsOpen({ ...isOpen, education: !isOpen.education });
              }}
              isOpen={isOpen.education}
              handleSubmit={handleSubmitEducation}
              type="education"
              form={education}
            />
          </div>
          {/* =========================== course ========================= */}
          <div>
            <div className="h-full max-w-[1156px] border rounded-[10px] px-14 py-10 mb-10 border-indigo-600 ">
              <div className="flex-between border-b border-[#C7C9CF] pb-4 ">
                <h1 className="text-[18px]">Сургалт</h1>
                <button onClick={() => setIsOpen({ ...isOpen, course: true })}>
                  <Image
                    width={30}
                    alt="icon"
                    height={30}
                    src="/icon/bedit.svg"
                  />
                </button>
              </div>
              <div className="pt-10 flex-between">
                <CVField title="Сургалтын нэр" description={data.course.name} />
                <CVField
                  title="Сурсан хугацаа"
                  description={data.course.year}
                />
              </div>
            </div>
            <Forms
              closeModal={() => {
                setIsOpen({ ...isOpen, course: !isOpen.course });
              }}
              isOpen={isOpen.course}
              handleSubmit={handleSubmitCourse}
              type="course"
              form={course}
            />
          </div>
          {/*========================== practice ====================*/}
          <div>
            <div className="h-full max-w-[1156px] border rounded-[10px] px-14 py-10 mb-10 border-indigo-600 ">
              <div className="flex-between border-b border-[#C7C9CF] pb-4 ">
                <h1 className="text-[18px]">Дадлагын мэдээлэл</h1>
                <button
                  onClick={() => setIsOpen({ ...isOpen, practice: true })}
                >
                  <Image
                    width={30}
                    alt="icon"
                    height={30}
                    src="/icon/bedit.svg"
                  />
                </button>
              </div>
              <div className="pt-10 flex-between">
                <CVField
                  title="Дадлагын нэр"
                  description={data.practice.name}
                />
                <CVField
                  title="Дадлага хийсэн хугацаа"
                  description={data.practice.period}
                />
              </div>
            </div>
            <Forms
              closeModal={() => {
                setIsOpen({ ...isOpen, practice: !isOpen.practice });
              }}
              isOpen={isOpen.practice}
              handleSubmit={handleSubmitPractice}
              type="practice"
              form={practice}
            />
          </div>
          {/* ====================== softskil =====================*/}
          <div>
            <div className="h-full max-w-[1156px] border rounded-[10px] px-14 py-10 mb-10 border-indigo-600 ">
              <div className="flex-between border-b border-[#C7C9CF] pb-4 ">
                <h1 className="text-[18px]">Хувь хүний мэдээлэл</h1>
                <button
                  onClick={() => setIsOpen({ ...isOpen, softskill: true })}
                >
                  <Image
                    width={30}
                    alt="icon"
                    height={30}
                    src="/icon/bedit.svg"
                  />
                </button>
              </div>
              <div className="pt-10">
                <CVField title="Ур чадвар" description={data.softskill.list} />
              </div>
            </div>
            <Forms
              closeModal={() => {
                setIsOpen({ ...isOpen, softskill: !isOpen.softskill });
              }}
              isOpen={isOpen.softskill}
              handleSubmit={handleSubmitSoftskill}
              type="softskill"
              form={softskill}
            />
          </div>
          <div className="flex gap-4">
            {existUser && (
              <button
                onClick={() => {
                  deleteCV();
                }}
                className="max-w-[1156px] border border-main  rounded-[10px] px-14 py-2 mb-10 w-full"
              >
                <p className="text-main font-semibold">
                  {loading !== "delete" ? "Устгах" : "Устгах..."}
                </p>
              </button>
            )}
            <button
              onClick={() => {
                saveCV();
              }}
              className="max-w-[1156px] bg-main rounded-[10px] px-14 py-2 mb-10 w-full"
            >
              <p className="text-white">
                {loading !== "save" ? "Хадгалах" : "Хадгалах..."}
              </p>
            </button>
          </div>
          {isApproved && (
            <div className="max-w-[1156px] flex-center border border-main rounded-[10px] px-14 py-2 mb-10 w-full">
              <p className="text-main">Анкет хүлээн авсаан</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default page;
