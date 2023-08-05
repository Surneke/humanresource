import { CVFieldProps } from "@/types";
import React from "react";

export const CVField = (props: CVFieldProps) => {
  return (
    <div className="flex-col gap-[10px] min-w-[300px] ">
      <p className="text-sm">{props?.title === "" ? "------.------" : props.title}</p>
      <p className="text-sm mt-3 text-title opacity-60 ">{props?.description === "" ? "------.-------" : props.description}</p>
    </div>
  );
};
