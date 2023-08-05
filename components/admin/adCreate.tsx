"use client";
import React from "react";
import { AdCreateProps } from "@/types";
import { AdCreateValidation } from "@/utils";
import { Field, Form, Formik } from "formik";

export const AdCreate = ({ handleSubmit, jobs }: { handleSubmit: (props: AdCreateProps) => void; jobs: any[] }) => {
  const form = {
    title: "",
    category: "",
    hour: "",
    requirements: "",
    future: "",
  };

  return (
    <div className="bg-white pt-10 pb-20 px-[60px]">
      <h1 className="text-[18px] mb-[50px]">Ерөнхий мэдээлэл</h1>

      <Formik initialValues={form} validationSchema={AdCreateValidation} onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-5">
            <div className="flex xl:gap-[180px] lg:gap-[50px]">
              <div className="w-[50%] flex flex-col gap-10">
                <label className="flex flex-col gap-4 relative">
                  <span className="text-[14px] opacity-70">Ажлын байрны нэр бичих</span>
                  <Field name="title" type="title" placeholder="Ажлын байрны нэр" className={`w-full bg-current rounded-md p-2 text-[14px]`} />
                  {errors.title && touched.title ? <div className="text-[14px] absolute -bottom-6 right-0 text-error">{errors.title}</div> : null}
                </label>
                <label className="flex flex-col gap-4 relative">
                  <span className="text-[14px] opacity-70">Ажлын байрны төрөл</span>
                  <Field
                    as="select"
                    name="category"
                    type="category"
                    placeholder="Категори"
                    className={`w-full bg-current rounded-md p-2 text-[14px]  ${errors.category && touched.category ? "border-rose-600" : ""}`}
                  >
                    <option>------</option>
                    {jobs?.map((el: { jobCategoryName: string }, i: number) => (
                      <option key={i} value={el.jobCategoryName}>
                        {el.jobCategoryName}
                      </option>
                    ))}
                  </Field>
                  {errors.category && touched.category ? (
                    <div className="text-[14px] absolute -bottom-6 right-0 text-error">{errors.category}</div>
                  ) : null}
                </label>
                <label className="flex flex-col gap-4 relative">
                  <span className="text-[14px] opacity-70">Ажлын байрны зорилго/үүрэг:</span>
                  <Field
                    as="textarea"
                    name="future"
                    type="future"
                    placeholder="Ажлын байрны зорилго/үүрэг дэлгэрэнгүй бичих"
                    className={`w-full h-[150px] bg-current rounded-md p-2 text-[14px] resize-none`}
                  />
                  {errors.future && touched.future ? <div className="text-[14px] absolute -bottom-6 right-0 text-error">{errors.future}</div> : null}
                </label>
              </div>

              <div className="w-[50%] flex flex-col gap-10">
                <label className="flex flex-col gap-4 relative">
                  <span className="text-[14px] opacity-70">Ажлын цаг</span>
                  <Field
                    as="select"
                    name="hour"
                    type="hour"
                    placeholder="Ээлжийн"
                    className={`w-full bg-current rounded-md p-2 text-[14px]  ${errors.hour && touched.hour ? "border-rose-600" : ""}`}
                  >
                    <option>------</option>
                    {hourList?.map((el, i) => (
                      <option key={i} value={el}>
                        {el}
                      </option>
                    ))}
                  </Field>
                  {errors.hour && touched.hour ? <div className="text-[14px] absolute -bottom-6 right-0 text-error">{errors.hour}</div> : null}
                </label>
                <label className="flex flex-col gap-4 relative">
                  <span className=" text-[14px] opacity-70">Тавигдах шаардлага</span>
                  <Field
                    as="textarea"
                    name="requirements"
                    type="requirements"
                    placeholder="Тавигдах шаардлага бичих"
                    className={`w-full h-[150px] bg-current rounded-md p-2 text-[14px] resize-none ${
                      errors.requirements && touched.requirements ? "border-rose-600" : ""
                    }`}
                  />
                  {errors.requirements && touched.requirements ? (
                    <div className="text-[14px] absolute -bottom-6 right-0 text-error">{errors.requirements}</div>
                  ) : null}
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-[75px]">
              <span className=" text-[14px] opacity-70">Та хадгалах товч дарсанаар ажлын зар үүснэ</span>
              <button type="submit" className="py-3 rounded-md bg-main text-white click-btn">
                Хадгалах
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const hourList = ["Бүх цаг боломжтой", "Бүтэн цагийн", "Цагийн", "Ээлжийн", "Улирлаар", "Зайнаас"];
