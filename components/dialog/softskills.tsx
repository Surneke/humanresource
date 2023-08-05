import { Field } from "formik";

export const SoftskillsPop = () => {
  return (
    <>
      <Field as="textarea" name="list" type="list" placeholder="Ур чадвар" className={` base-input`} />
      <div className="flex gap-[20px]">
        <button type="submit" className="border w-full mt-6 py-2 bg-main rounded-md bg-gray-900 text-white">
          Хадгалах
        </button>
      </div>
    </>
  );
};
