import Image from "next/image";
import { Forms } from "../forms";
import { SemiLoader } from "../loader";
import { Field, Form, Formik } from "formik";
import { searchUsers } from "@/utils/requests";
import React, { useEffect, useState } from "react";
import UserList from "../userList";
import FilterUserList from "../filterUserList";

export const Users = (props: any) => {
  const { data, setRefresh, setPage, filter, setFilter, refresh } = props;
  const cvFilter = data.cvitae;
  const jobFilter = data.jobs;
  const userFilter = data.users;
  const [isOpen, setIsOpen] = useState(false);
  const [detailUserId, setDetailUserId] = useState("");
  const formI = {
    job: "",
    email: "",
    firstName: "",
    phoneNumber: "",
  };
  const handleSubmit = async (props: any) => {
    setFilter(searchUsers(props));
    const usersss = await searchUsers(props);
    console.log(usersss);
  };

  const allUser = () => {
    setFilter([]);
    setRefresh((p: boolean) => !p);
  };
  return (
    <div className="w-full bg-white py-[75px] px-[60px] min-h-[85vh] flex-col">
      <Formik initialValues={formI} onSubmit={handleSubmit} onReset={allUser}>
        <Form className="flex-col gap-5 text-sm">
          <div className="flex text-sm flex-between">
            <Field
              as="select"
              placeholder="Ажлын байр"
              name="job"
              type="job"
              className={`rounded-md p-2 border max-w-xs min-w-[220px] h-[50px]`}
            >
              <option value="">---</option>
              {jobFilter?.map((el: { jobCategoryName: string }, i: number) => (
                <option key={i} value={el.jobCategoryName}>
                  {el.jobCategoryName}
                </option>
              ))}
            </Field>
            <Field
              placeholder="Нэр"
              name="firstName"
              type="firstName"
              className={`w-[150px] rounded-md px-2 border  min-w-[200px]  h-[50px]`}
            />
            <Field
              placeholder="Мэйл"
              name="email"
              type="email"
              className={`w-[150px] rounded-md px-2 border  min-w-[200px]  h-[50px]`}
            />
            <Field
              placeholder="Утасны дугаар"
              name="phoneNumber"
              type="phoneNumber"
              className={`w-[100px] rounded-md px-2 border  min-w-[200px]  h-[50px]`}
            />

            <button type="submit" className="">
              <Image
                alt="icon"
                src="/icon/search.svg"
                width={20}
                height={20}
                className="object-contain h-[30px] w-[30px]"
              />
            </button>
          </div>
          <div className="text-[20px] pb-[25px] border-b-[0.5px] mb-[5px] flex-between mt-[50px]">
            <div className="flex gap-[18px]">
              <div className="flex gap-[220px] text-[18px]">
                <h2>Нэр</h2>
                <h2>Мэйл</h2>
                <h2 className="ml-[150px]">Details</h2>
              </div>
            </div>
            <button type="reset" className="underline text-[18px]">
              Бүх Анкет
            </button>
          </div>
        </Form>
      </Formik>
      <div className="flex flex-col gap-5 pt-6">
        {/* {filter[0] === undefined && <SemiLoader />} */}
        {filter[0] === undefined ? (
          ""
        ) : (
          <FilterUserList
            name={filter.name}
            userId={filter.userId}
            email={filter.email}
            setIsOpen={setIsOpen}
            setDetailUserId={setDetailUserId}
          />
        )}
        {userFilter.map((el: any, i: number) => {
          return (
            <UserList
              key={i}
              name={el.name}
              userId={el._id}
              email={el.email}
              setIsOpen={setIsOpen}
              setDetailUserId={setDetailUserId}
            />
          );
        })}
      </div>
      <Forms
        type="detail"
        cv={cvFilter}
        isOpen={isOpen}
        refresh={refresh}
        setRefresh={setRefresh}
        detailUserId={detailUserId}
        handleSubmit={(props) => {
          return;
        }}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  );
};
