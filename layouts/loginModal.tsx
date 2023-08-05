"use client";
import { Form, Formik } from "formik";
import { Fragment, useState } from "react";
import { AuthType, SubmitProps } from "@/types/index";
import { Dialog, Transition } from "@headlessui/react";
import { Input, SubmitA, SubmitB } from "@/utils/style";
import { useAuthProvider } from "@/context/authProvider";
import { useRouter } from "next/navigation";
import { signupValidation, signinValidation } from "@/utils";

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrop, setIsDrop] = useState(false);

  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const [currentForm, setCurrentForm] = useState("login");

  const form = {
    email: "",
    name: "",
    password: "",
  };

  const { setLoader, signin, signup, userInfo, logout } = useAuthProvider() as AuthType;

  const handleSubmit = async (props: SubmitProps) => {
    setLoader(true);
    if (currentForm === "login") {
      signin(props);
    } else {
      signup(props);
    }
  };

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={userInfo?.name === undefined ? openModal : () => setIsDrop((p) => !p)}
          className="text-white border-white border px-4 rounded-md"
        >
          <p className="uppercase">&nbsp;&nbsp;{userInfo?.name === undefined ? "Нэвтрэх" : userInfo?.name}&nbsp;&nbsp;</p>
        </button>
        {isDrop && (
          <div className={`fixed duration-300 ${isDrop ? "opacity-100" : "opacity-0"}`}>
            <div className="text-white flex-between w-[150px]">
              <button
                className=""
                onClick={() => {
                  router.push("/cv");
                  setIsDrop(false);
                }}
              >
                <h1 className="text-[20px]">Анкет</h1>
              </button>
              <button
                className=""
                onClick={() => {
                  logout();
                  setIsDrop(false);
                }}
              >
                <h1 className="text-[20px]">Гарах</h1>
              </button>
            </div>
          </div>
        )}

        {/* {isDrop && (
          
        )} */}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto h-[400px] w-[400px flex-center]">
            <div className="flex min-h-full items-center justify-center p-4 text-center]">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-md transform overflow-hidden rounded-2xl p-6 transition-all] bg-white">
                  <div className="w-full relative flex items-center justify-center">
                    <div className="w-full rounded-lg px-8 py-6">
                      <h1 className="text-center text-3xl pb-10 pt-2">{currentForm === "login" ? "Нэвтрэх" : "Бүртгүүлэх"}</h1>
                      <Formik
                        initialValues={form}
                        validationSchema={currentForm === "login" ? signinValidation : signupValidation}
                        onSubmit={handleSubmit}
                      >
                        {({ errors, touched }) => (
                          <Form className="flex-col gap-5">
                            <label>
                              <Input
                                type="text"
                                name="email"
                                autoCorrect="off"
                                placeholder="Имэйл"
                                autoComplete="email"
                                valid={touched.email && !errors.email}
                                error={touched.email && errors.email}
                              />
                              {/* {errors.email && touched.email ? <p className="flex-end text-sm">{errors.email}</p> : null} */}
                            </label>
                            {currentForm === "signup" && (
                              <>
                                <label>
                                  <Input
                                    name="name"
                                    type="name"
                                    autoCorrect="off"
                                    autoComplete="name"
                                    placeholder="Нэвтрэх нэр"
                                    valid={touched.email && !errors.email}
                                    error={touched.email && errors.email}
                                  />
                                  {/* {errors.name && touched.name ? <p className="flex-end text-sm">{errors.name}</p> : null} */}
                                </label>
                              </>
                            )}
                            <label>
                              <Input
                                name="password"
                                type="password"
                                autoCorrect="off"
                                autoComplete="password"
                                placeholder="Нууц үг"
                                valid={touched.password && !errors.password}
                                error={touched.password && errors.password}
                              />
                              {/* {errors.password && touched.password ? <p className="flex-end text-sm">{errors.password}</p> : null} */}
                            </label>
                            <div className="flex-col">
                              <SubmitA type="submit">{currentForm === "login" ? "Нэвтрэх" : "Бүртгүүлэх"}</SubmitA>
                              <SubmitB type="button" onClick={() => setCurrentForm(currentForm === "login" ? "signup" : "login")}>
                                {currentForm === "login" ? "Бүртгүүлэх" : "Нэвтрэх"}
                              </SubmitB>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
