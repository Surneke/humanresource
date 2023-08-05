"use client";
import axios from "axios";
import Image from "next/image";
import { AddJob } from "./addJob";
import { Delete } from "./delete";
import React, { FormEvent, useState } from "react";

export const Workplace = ({ data, refresh, setData }: any) => {
  const [addJob, setAddJob] = useState(false);
  const [remove, setRemove] = useState(false);
  const [category, setCategory] = useState("");
  const [jobId, setJobId] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("api/dashboard", { jobName: category });
      setAddJob(false);
      setCategory("");
      refresh("addJob");
    } catch (error: unknown | any) {
      alert(error.response.data);
    }
  };

  const hadldeDelete = async () => {
    await axios.post("api/dashboard/delete", {
      jobId: jobId,
    });
    refresh("addJob");
    setRemove(false);
  };

  return (
    <div className="w-full bg-white py-[75px] px-[60px] min-h-[85vh]">
      <div className="flex-between text-[20px] pb-[25px] border-b-[0.5px] mb-[5px]">
        <div className="flex gap-[18px]">
          <h2>№</h2>
          <h2>Ажлын байр</h2>
        </div>
        <button onClick={() => setAddJob(true)}>
          <Image alt="icon" width={35} height={35} src="/icon/add.svg" />
        </button>
        <AddJob
          closeModal={() => setAddJob(false)}
          isOpen={addJob}
          handleSubmit={handleSubmit}
          handleChange={(e: {
            target: { value: React.SetStateAction<string> };
          }) => setCategory(e.target.value)}
          value={category}
        />
      </div>
      {data?.map((el: { jobCategoryName: string; _id: string }, i: number) => (
        <div key={i} className="flex-between text-[18px] pl-3">
          <div className="flex-between gap-[25px] h-[50px]">
            <div>{i + 1}.</div>
            <h2 className="text-[16px]">{el?.jobCategoryName}</h2>
          </div>
          <div className="flex gap-[10px]">
            <button
              onClick={() => {
                setRemove(true);
                setJobId(el._id);
              }}
            >
              <Image src="/icon/trash.svg" width={25} height={25} alt="icon" />
            </button>
          </div>
        </div>
      ))}
      <Delete
        closeModal={() => setRemove(false)}
        isOpen={remove}
        hadldeDelete={hadldeDelete}
      />
    </div>
  );
};
