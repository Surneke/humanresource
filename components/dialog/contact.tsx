import { Field } from "formik";

export const ContactPop = () => {
  return (
    <>
      <Field name="phoneNumber" type="phoneNumber" placeholder="Утасны дугаар" className={`base-input`} />
      <Field name="email" type="email" placeholder="И-Мэйл хаяг" className={`base-input`} />
      <div className="flex gap-[20px]">
        <button type="submit" className="border w-full mt-6 py-2 bg-main rounded-md bg-gray-900 text-white">
          Хадгалах
        </button>
      </div>
    </>
  );
};
