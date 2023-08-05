import { Field } from "formik";
import { UserDetail } from "../userDetail";
import React, { useEffect, useState } from "react";

export const Details = ({ cv, detailUserId, refresh }: any) => {
  const [filterCv, setFilterCv] = useState<any>();
  useEffect(() => {
    setFilterCv(cv.find((el: any) => el.userId === detailUserId));
  }, [refresh]);
  // const changeStatus = async (props: any) => {
  //   requestUser({ userId });
  // };
  return (
    <div className="mb-10">
      <div className="mt-10">
        <div>
          <UserDetail
            title="Миний тухай"
            description={filterCv?.general?.aboutMe}
          />
        </div>
        <div className="flex flex-between">
          <UserDetail title="Овог" description={filterCv?.general?.lastName} />
          <UserDetail title="Нэр" description={filterCv?.general?.firstname} />
        </div>
        <div className="flex flex-between">
          <UserDetail title="Хүйс" description={filterCv?.general?.gender} />
          <UserDetail
            title="Төрсөн өдөр"
            description={filterCv?.general?.birthday}
          />
        </div>
      </div>
      <div>
        <div className="flex flex-between">
          {" "}
          <UserDetail
            title="Утасны дугаар"
            description={filterCv?.contact?.phoneNumber}
          />
          <UserDetail
            title="Мэйл хаяг"
            description={filterCv?.contact?.email}
          />
        </div>
        <div className="flex flex-between">
          <UserDetail
            title="Сонирхож буй ажил"
            description={filterCv?.job?.interestedJob}
          />
          <UserDetail
            title="Ажиллах төрөл"
            description={filterCv?.job?.jobType}
          />
        </div>
        <div className="flex flex-between">
          <UserDetail
            title="Мэрэгжил"
            description={filterCv?.education?.occupation}
          />
          <UserDetail title="Улс" description={filterCv?.education?.country} />
        </div>
        <div className="flex flex-between">
          <UserDetail
            title="Сургуулийн нэр"
            description={filterCv?.education?.occupation}
          />
          <UserDetail
            title="Хувийн ур чадвар"
            description={filterCv?.softSkill?.list}
          />
        </div>
        <div className="flex flex-between">
          <UserDetail
            title="Элссэн огноо"
            description={filterCv?.education?.startYear}
          />
          <UserDetail
            title="Төгссөн огноо"
            description={filterCv?.education?.endYear}
          />
        </div>
        <div className="flex flex-between">
          <UserDetail
            title="Сургалтын нэр"
            description={filterCv?.course?.name}
          />
          <UserDetail
            title="Сурсан хугацаа"
            description={filterCv?.course?.year}
          />
        </div>
        <div className="flex flex-between">
          <UserDetail
            title="Дадлага хийсэн компани"
            description={filterCv?.practice?.name}
          />
          <UserDetail
            title="Дадлага хийсэн хугацаа"
            description={filterCv?.practice?.period}
          />
        </div>
      </div>
    </div>
  );
};
