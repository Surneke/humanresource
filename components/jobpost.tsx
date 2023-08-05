import axios from "axios";
import { useState } from "react";
import { AuthType } from "@/types";
import { useAuthProvider } from "@/context/authProvider";

export const JobPost = ({ props }: { props: { _id: string; title: string; future: string; requirements: string; hour: string } }) => {
  const [loading, setLoading] = useState(false);

  const { userInfo } = useAuthProvider() as unknown as AuthType;

  const handleSubmit = async () => {
    setLoading(true);
    if (userInfo === undefined) {
      alert("Та эхлээд нэвтэрж ороод анкет аа бөглөн үү");
      return;
    }
    try {
      const res = await axios.get("api/cv");
      const already = await res.data.filter((el: { userId: string }) => el.userId === userInfo?.id);
      if (already.length > 0) {
        try {
          const res = await axios.post(`api/request/sent`, { userId: userInfo?.id, jobId: props._id });
          if (res.status === 201) {
            alert(res.data);
            setLoading(false);
            return;
          }
          if (res.status === 200) {
            alert("Анкет илгээгдсэн байна");
            setLoading(false);
            return;
          }
        } catch (error: unknown | any) {
          alert(error.response.data);
        }
        return;
      }
    } catch (error: unknown | any) {
      alert(error.response.data);
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="h-full max-w-[1156px] border rounded-[10px] px-14 py-10 border-indigo-600 overflow-hidden mt-10 ">
        <div className="flex-between border-b border-[#C7C9CF] pb-4 ">
          <h1 className="text-[18px]">{props.title}</h1>
        </div>
        <div className="flex gap-[24px] mt-7 flex-col">
          <div>
            <p>Ажлын байрны зорилго/үүрэг:</p>
            <p>{props.future}</p>
          </div>
          <div>
            <p>Тавигдах шаардлага:</p>
            <p>{props.requirements}</p>
          </div>
          <div>
            <p>Ажлын цаг:</p>
            <p>{props.hour}</p>
          </div>
        </div>
        <button onClick={handleSubmit} className="max-w-[1156px] bg-text rounded-[10px] py-2 w-full mt-6 hover:bg-main">
          <p className="text-main hover:text-white">{loading ? "Анкет илгээх..." : "Анкет илгээх"}</p>
        </button>
      </div>
    </div>
  );
};
