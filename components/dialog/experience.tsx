import { Field } from "formik";

export const ExperiencePop = () => {
  return (
    <>
      <Field name="company" type="company" placeholder="Ажилсан компани" className={`base-input`} />
      <Field name="year" type="year" placeholder="Ажилсан жил" className={`base-input`} />
      <div className="flex gap-[20px]">
        <button type="submit" className="border w-full mt-6 py-2 bg-main rounded-md bg-gray-900 text-white">
          Хадгалах
        </button>
      </div>
    </>
  );
};
