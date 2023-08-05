"use client";
import axios from "axios";
import Image from "next/image";
import { AdCreateProps, AuthType } from "@/types";
import React, { useEffect, useState } from "react";
import { useAuthProvider } from "@/context/authProvider";
import { AdCreate, Users, Workplace } from "@/components";
import { getCv, getUsers } from "@/utils/requests";
import { UserRequest } from "@/components/admin/requests";

function page() {
  const [items, setItems] = useState("Анкет");
  const [data, setData] = useState({
    users: [],
    jobs: [],
    cvitae: [],
  });
  const [filter, setFilter] = useState<any>([]);
  const [refresh, setRefresh] = useState("cv");
  const { logout } = useAuthProvider() as AuthType;

  const AdCreateSubmit = async (props: AdCreateProps) => {
    try {
      await axios.post("api/dashboard/adCreate", props);
      alert("Ажлын зар амжилтай үүслээ");
    } catch (error: any) {
      alert(error.response.data);
    }
  };

  useEffect(() => {
    switch (refresh) {
      case "cv":
        (async () => {
          const res = await axios.get("api/dashboard");
          const getUserData = await getUsers();
          const getCvData = await getCv();
          setData({
            ...data,
            jobs: res.data,
            cvitae: getCvData,
            users: getUserData,
          });
        })();
        break;
      case "addJob":
        (async () => {
          const res = await axios.get("api/dashboard");
          setData({ ...data, jobs: res.data });
        })();
        setRefresh("");
        break;
    }
  }, [refresh]);

  return (
    <div className="w-[100%] flex">
      <div className="min-w-[320px] fixed left-0 top-0 h-screen py-12 px-8 bg-main text-white">
        <h1 className="uppercase  text-[28px] mb-[100px] ml-[50px]">test</h1>
        <div className="relative">
          {sidebarList.map((el, i) => (
            <button
              className={`flex items-center h-[50px] w-full gap-[30px] rounded-lg pl-[10px] duration-300 ${
                items === el.title && "bg-hover"
              } hover:bg-hover`}
              onClick={() => setItems(el.title)}
              key={i}
            >
              <Image src={el.icon} width={30} height={30} alt="icon" />
              <span>{el.title}</span>
            </button>
          ))}

          <button
            className={`flex items-center h-[50px] w-full gap-[30px] rounded-lg pl-[10px] absolute -bottom-52 duration-300 hover:bg-hover`}
            onClick={() => logout()}
          >
            <Image src="/icon/logout.svg" width={30} height={30} alt="icon" />
            <span>Гарах</span>
          </button>
        </div>
      </div>
      <div className="pl-[320px] w-full">
        <div className="h-[100px] bg-white flex items-center mb-5">
          <h1 className="text-[24px] pl-[70px]">{items}</h1>
        </div>
        {items === "Хэрэлэгчид" && (
          <Users
            data={data}
            filter={filter}
            jobs={data.jobs}
            refresh={refresh}
            setFilter={setFilter}
            setRefresh={setRefresh}
          />
        )}
        {items === "Анкет" && (
          <UserRequest
            jobs={data.jobs}
            refresh={refresh}
            requestUsers={data.users}
            setRefresh={setRefresh}
          />
        )}
        {items === "Зар үүсгэх" && (
          <AdCreate handleSubmit={AdCreateSubmit} jobs={data.jobs} />
        )}
        {items === "Ажлын байр" && (
          <Workplace data={data.jobs} refresh={setRefresh} setData={setData} />
        )}
      </div>
    </div>
  );
}

export default page;

const sidebarList = [
  { title: "Хэрэлэгчид", icon: "/icon/user.svg" },
  { title: "Анкет", icon: "/icon/file.svg" },
  { title: "Зар үүсгэх", icon: "/icon/edit.svg" },
  { title: "Ажлын байр", icon: "/icon/job.svg" },
];
