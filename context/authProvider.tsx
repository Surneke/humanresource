"use client";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { AuthType, SubmitProps } from "@/types/index";
import { Loader } from "@/components/loader";
import axios from "axios";

const Auth = createContext<AuthType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [checking, setChecking] = useState(false);
  const [token, setToken] = useState<string | null>("");
  const [userInfo, setUserInfo] = useState();
  const [loader, setLoader] = useState(false);

  const router = useRouter();

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const data: any = jwt.decode(token);
      setToken(token);
      setChecking(true);
      ``;
      setUserInfo(data);
      data.role === "admin" ? router.push("/dashboard") : router.push("/cv");
    } else {
      setChecking(false);
      router.push("/");
    }
  };

  useEffect(() => {
    checkAuth();
    setLoader(false);
  }, []);

  const logout = () => {
    setLoader(true);
    localStorage.removeItem("token");
    router.push("/");
    location.reload();
  };

  const signup = async (props: SubmitProps) => {
    try {
      const res = await axios.post("api/users/signup", {
        email: props.email,
        name: props.name,
        password: props.password,
      });
      console.log(res.data.token);
      setToken(res.data.token);
      setChecking(true);
      setUserInfo(res.data.user);
      localStorage.setItem("token", res.data.token);
      router.push("/cv");
      location.reload();
    } catch (error: any) {
      setLoader(false);
      alert(error.response.data);
    } finally {
      setLoader(false);
    }
  };
  const signin = async (props: SubmitProps) => {
    try {
      const res = await axios.post("api/users/signin", {
        email: props.email,
        password: props.password,
      });
      setToken(res.data.token);
      setChecking(true);
      setUserInfo(res.data.user);
      router.push("/cv");
      localStorage.setItem("token", res.data.token);
      location.reload();
    } catch (error: any) {
      setLoader(false);
      alert(error.response.data);
    } finally {
      setLoader(false);
    }
  };

  return (
    <Auth.Provider
      value={{
        checking,
        setChecking,
        token,
        setToken,
        userInfo,
        setUserInfo,
        setLoader,
        logout,
        signin,
        signup,
      }}
    >
      {loader && <Loader />}
      {children}
    </Auth.Provider>
  );
};

export const useAuthProvider = () => useContext(Auth);
