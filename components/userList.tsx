import React from "react";

const UserList = ({ name, email, setIsOpen, setDetailUserId, userId }: any) => {
  return (
    <div className="flex-around flex text-[18px] pl-3 w-full h-[40px] gap-[100px] bg-white">
      <div className="flex w-[140px] gap-[18px]">
        <h2 className="text-[16px]">{name}</h2>
      </div>
      <h2 className="text-[16px] w-[200px]">{email}</h2>
      <div className="flex gap-[150px] w-200px"></div>
      <div className="flex">
        <button
          className="w-full py-2 rounded-md px-5 underline"
          onClick={() => {
            setIsOpen(true);
            setDetailUserId(userId);
          }}
        >
          detail
        </button>
      </div>
    </div>
  );
};

export default UserList;
