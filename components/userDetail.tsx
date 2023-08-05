import { CVFieldProps } from "@/types";
import React from "react";

export const UserDetail = (props: CVFieldProps) => {
  return (
    <div className="flex-col gap-[10px] min-w-[350px] ">
      <p className="text-sm mt-8">{props?.title}</p>
      <p className="text-sm text-black opacity-60 min-h-[60px] bg-current mt-1 p-3 rounded-lg ">
        {props?.description}
      </p>
    </div>
  );
};
