import { FormProps } from "@/types";
import { Formik, Form } from "formik";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  GeneralPop,
  ContactPop,
  CoursePop,
  EducationPop,
  ExperiencePop,
  JobPop,
  PracticePop,
  SoftskillsPop,
} from "./dialog";
import { Details } from "./dialog/details";

export const Forms = ({
  cv,
  type,
  form,
  isOpen,
  closeModal,
  handleSubmit,
  detailUserId,
  setRefresh,
  refresh,
}: FormProps) => {
  const diologValue = [
    { name: "course", titleName: "Сургалт", dialog: <CoursePop /> },
    {
      name: "detail",
      titleName: "Ерөнхий мэдээлэл",
      dialog: (
        <Details
          cv={cv}
          detailUserId={detailUserId}
          setRefresh={setRefresh}
          refresh={refresh}
        />
      ),
    },
    { name: "education", titleName: "Боловсрол", dialog: <EducationPop /> },
    { name: "general", titleName: "Ерөнхий мэдээлэл", dialog: <GeneralPop /> },
    {
      name: "practice",
      titleName: "Дадлагын мэдээлэл",
      dialog: <PracticePop />,
    },
    {
      name: "experience",
      titleName: "Ажлын туршлага",
      dialog: <ExperiencePop />,
    },
    {
      name: "contact",
      titleName: "Холбоо барих мэдээлэл",
      dialog: <ContactPop />,
    },
    {
      name: "softskill",
      titleName: "Хувь хүний мэдээлэл",
      dialog: <SoftskillsPop />,
    },
    {
      name: "job",
      titleName: "Ажиллахаар төлөвлөж буй ажлын байр",
      dialog: <JobPop />,
    },
  ];

  return (
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
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-full  ${
                  type === "detail" ? "max-w-3xl" : "max-w-md"
                } transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all`}
              >
                <Dialog.Title
                  as="h3"
                  className="text-xl text-center font-medium leading-6 text-gray-900 mt-2"
                >
                  {diologValue.map((el, i) => (
                    <div key={i}>{type === el.name ? el.titleName : ""}</div>
                  ))}
                </Dialog.Title>
                <Formik initialValues={form} onSubmit={handleSubmit}>
                  <Form className="flex flex-col">
                    {diologValue.map((el, i) => (
                      <div key={i}>{type === el.name ? el.dialog : ""}</div>
                    ))}
                  </Form>
                </Formik>
                <button
                  type="button"
                  onClick={closeModal}
                  className="border w-full mt-2 py-2 rounded-md bg-gray-900 text-main"
                >
                  Хаах
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
