import React from "react";
import LoginModal from "./loginModal";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  return (
    <header className="w-full h-20 bg-main">
      <div className="max-width flex-between h-full">
        <button onClick={() => router.push("/")}>
          <h1 className="text-white uppercase text-[25px]">Test</h1>
        </button>

        <LoginModal />
      </div>
    </header>
  );
};
