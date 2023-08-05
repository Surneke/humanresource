import { PutProps } from "@/types";
import axios from "axios";

export const getUsers = async () => {
  try {
    const res = await axios.get("api/users");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const formPut = async (props: PutProps) => {
  try {
    const res = await axios.post(`api/cv/new`, props);
    return res.data;
  } catch (error: unknown | any) {
    return error.response.data;
  }
};

export const formEdit = async (props: any) => {
  try {
    const res = await axios.patch(`api/cv/new`, { form: props });
    return res.data;
  } catch (error: unknown | any) {
    return error.response.data;
  }
};

export const formDelete = async (props: string) => {
  try {
    const res = await axios.delete(`api/cv/${props}`);
    return res.data;
  } catch (error: unknown | any) {
    return error.response.data;
  }
};

export const generalFormGet = async (props: string) => {
  try {
    const res = await axios.get(`api/cv/new`, {
      params: {
        id: props,
      },
    });
    return res.data;
  } catch (error: unknown | any) {
    return error.response.data;
  }
};

export const getJobs = async () => {
  try {
    const res = await axios.get("api/jobs");
    return res.data;
  } catch (error) {
    console.log("Алдаа гарлаа дахин оролдон уу 2");
  }
};
export const getCv = async () => {
  try {
    const res = await axios.get("api/cv");
    return res.data;
  } catch (error) {
    console.log("Алдаа гарлаа дахин оролдон уу 2");
  }
};

export const sendCV = async () => {
  try {
    const res = await axios.put("api/cv/request");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const searchUsers = async (body?: any) => {
  try {
    const res = await axios({
      method: "post",
      url: "http://localhost:3000/api/dashboard/search",
      headers: {},
      data: JSON.stringify(body),
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postRequestUser = async (props?: any) => {
  try {
    const res = await axios.post("api/request/change", { body: props });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRequestUser = async () => {
  try {
    const res = await axios.get("api/request");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
