import { Field } from "formik";

export const GeneralPop = () => {
  return (
    <>
      <Field as="textarea" name="aboutMe" type="aboutMe" placeholder="Миний тухай" className={` base-input`} />
      <Field name="lastName" type="lastName" placeholder="Эцэг/Эхийн нэр:" className={`base-input`} />
      <Field name="firstName" type="firstName" placeholder="Өөрийн нэр:" className={`base-input`} />
      <Field as="select" name="gender" type="gender" className={`base-input`}>
        <option>------.------</option>
        <option value="Эрэгтэй">Эрэгтэй</option>
        <option value="Эмэгтэй">Эмэгтэй</option>
      </Field>
      <Field name="birthday" type="birthday" placeholder="Төрсөн огноо: 2000/01/01" className={`base-input`} />

      <div className="flex gap-[20px]">
        <button type="submit" className="border w-full mt-6 py-2 bg-main rounded-md bg-gray-900 text-white">
          Хадгалах
        </button>
      </div>
    </>
  );
};
