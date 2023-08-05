import * as yup from "yup";

// login forms validation
export const signupValidation = yup.object().shape({
  email: yup.string().email("Имэйл буруу байна").required("Имэйлээ бичнэ уу"),
  password: yup
    .string()
    .min(8, ({ min }) => `Нууц үг хамгийн багадаа ${min} байх ёстой`)
    .required("Нууц үгээ бичнэ уу"),
  name: yup.string().required("Хэрэглэгчийн нэрээ бичнэ уу"),
});

export const signinValidation = yup.object().shape({
  email: yup.string().email("Имэйл буруу байна").required("Имэйлээ бичнэ уу"),
  password: yup
    .string()
    .min(8, ({ min }) => `Нууц үг хамгийн багадаа ${min} байх ёстой`)
    .required("Нууц үгээ бичнэ уу"),
  name: yup.string(),
});

export const AdCreateValidation = yup.object().shape({
  title: yup.string().required("Ажлын байрны нэрээ бичнэ уу"),
  category: yup.string().required("Ажлын байрны төрөлийг сонгон уу"),
  hour: yup.string().required("Ажлын цагийг сонгон уу"),
  requirements: yup.string().required("Тавигдах шаардлагаа бичнэ уу"),
  future: yup.string().required("Ажлын байрны зорилго/үүрэг бичнэ уу"),
});
