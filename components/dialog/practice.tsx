import { Field } from "formik";

export const PracticePop = () => {
  return (
    <>
      <Field name="name" type="name" placeholder="Дадлагын нэр" className={`base-input`} />
      <Field name="period" type="period" placeholder="Дадлага хийсэн хугацаа" className={`base-input`} />
      <div className="flex gap-[20px]">
        <button type="submit" className="border w-full mt-6 py-2 bg-main rounded-md bg-gray-900 text-white">
          Хадгалах
        </button>
      </div>
    </>
  );
};
