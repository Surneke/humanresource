import { Field } from "formik";

export const EducationPop = () => {
  return (
    <>
      <Field name="degree" type="degree" placeholder="Боловсорлын зэрэг" className={`base-input`} />
      <Field name="schoolName" type="schoolName" placeholder="Их сургуулийн нэр" className={`base-input`} />
      <Field name="country" type="country" placeholder="Сурсан улс" className={`base-input`} />
      <Field name="startYear" type="startYear" placeholder="Элссэн огноо" className={`base-input`} />
      <Field name="endYear" type="endYear" placeholder="Төгссөн огноо" className={`base-input`} />
      <Field name="occupation" type="occupation" placeholder="Мэрэгжил" className={`base-input`} />
      <div className="flex gap-[20px]">
        <button type="submit" className="border w-full mt-6 py-2 bg-main rounded-md bg-gray-900 text-white">
          Хадгалах
        </button>
      </div>
    </>
  );
};

// const value = [
//   "Боловсорлын зэрэг",
//   "Их сургуулийн нэр",
//   "Сурсан улс",
//   "Элссэн огноо",
//   "Төгссөн огноо",
//   "Мэрэгжил",
// ];
