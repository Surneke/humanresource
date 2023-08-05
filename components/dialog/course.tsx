import { Field } from "formik";

export const CoursePop = () => {
  return (
    <>
      <Field name="name" type="name" placeholder="Сургалтын нэр" className={`base-input`} />
      <Field name="year" type="year" placeholder="Суусан хугацаа" className={`base-input`} />
      <div className="flex gap-[20px]">
        <button type="submit" className="border w-full mt-6 py-2 bg-main rounded-md bg-gray-900 text-white">
          Хадгалах
        </button>
      </div>
    </>
  );
};
