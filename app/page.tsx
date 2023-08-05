"use client";
import { Header } from "@/layouts";
import { JobPost } from "@/components";
import { getJobs } from "@/utils/requests";
import { useEffect, useState } from "react";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    (async () => {
      const getJobsData = await getJobs();
      setJobs(getJobsData);
    })();
  }, [refresh]);

  return (
    <div>
      <Header />
      <section className="pt-14 max-width">
        <h1 className="text-[24px] text-[#000] font-medium">Нээлттэй ажлын байр</h1>
        <div className="w-full max-width rounded-[10px] bg-white mt-7 pt-14 pb-36">
          {jobs?.map((el, i) => (
            <JobPost key={i} props={el} />
          ))}
        </div>
      </section>
    </div>
  );
}
