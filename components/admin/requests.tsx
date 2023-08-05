import Image from "next/image";
import { Forms } from "../forms";
import { SemiLoader } from "../loader";
import { Field, Form, Formik } from "formik";
import { getRequestUser, searchUsers } from "@/utils/requests";
import React, { useEffect, useState } from "react";
import UserList from "../userList";
import FilterUserList from "../filterUserList";
import { Grid, Paper, styled } from "@mui/material";

export const UserRequest = (props: any) => {
  const { jobs, requestUsers, setRefresh, setPage, refresh } = props;
  const [status, setStatus] = useState();
  const [job, setJob] = useState();
  const [userCv, setUserCv] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [detailUserId, setDetailUserId] = useState("");
  const [requestedUser, setRequestedUser] = useState([]);

  useEffect(() => {
    const users = async () => {
      const requestCvUsers = await getRequestUser();
      setRequestedUser(requestCvUsers);
    };
    users();
  }, []);
  console.log(requestUsers);
  console.log(requestUsers);

  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };
  return (
    <div className="w-full bg-white py-[50px] px-[60px] min-h-[85vh] flex-col">
      <div className="grid grid-cols-3 gap-4 text-[20px]">
        <p>Хэрэглэгчийн нэр</p>
        <p>Анкет явуулсан ажил</p>
        <p>Төлөв</p>
      </div>
      {/* <div>{users.filter((e) => users._id === requestedUser.id)}</div> */}
      <div>
        {requestedUser?.map((el, i) => {
          return (
            <div key={i} className="grid grid-cols-3 gap-4 text-[16px] mt-10">
              <p>{el.userId}</p>
              <p>Huduu aj ahui</p>
              <div>
                <select placeholder="Хүлээн аваагүй" onChange={handleChange}>
                  <option value="false">Хүлээн аваагүй</option>
                  <option value="true">Хүлээн авсан</option>
                </select>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

{
  /* {data.map((el, i) => {
  <div key={i} className="grid grid-cols-3 gap-4 mt-10">
    <p>{el.name}</p>
    <p>{el.job}</p>
    <p>Төлөв</p>
  </div>;
})} */
}
