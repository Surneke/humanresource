import axios from "axios";
import { Field } from "formik";
import { useEffect, useState } from "react";

export const JobPop = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("api/dashboard");
      setJobs(res.data);
    })();
  }, []);
  return (
    <>
      <Field as="select" name="interestedJob" type="interestedJob" className={`base-input`}>
        <option>------.------</option>
        {jobs &&
          jobs?.map((el: { jobCategoryName: string }, i) => (
            <option key={i} value={el.jobCategoryName}>
              {el.jobCategoryName}
            </option>
          ))}
      </Field>
      <Field name="salary" type="salary" placeholder="Цалингийн хүлээлт" className={`base-input`} />
      <Field as="select" name="jobType" type="jobType" className={`base-input`}>
        <option>------.------</option>
        {jobTypeList.map((el, i) => (
          <option key={i} value={el}>
            {el}
          </option>
        ))}
      </Field>

      <div className="flex gap-[20px]">
        <button type="submit" className="border w-full mt-6 py-2 bg-main rounded-md bg-gray-900 text-white">
          Хадгалах
        </button>
      </div>
    </>
  );
};

const jobTypeList = ["Бүх цаг боломжтой", "Бүтэн цагийн", "Цагийн", "Ээлжийн", "Улирлаар", "Зайнаас"];
