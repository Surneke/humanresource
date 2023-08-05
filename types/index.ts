import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
export interface UserInfo {
  id: string;
  name: string;
  role: string;
  email: string;
  lastName?: string;
  firstName?: string;
  phoneNumber?: string;
}
export interface AuthType {
  checking?: boolean;
  token?: string | null;
  userInfo?: UserInfo;
  logout: () => void;
  signin: (props: SubmitProps) => void;
  signup: (props: SubmitProps) => void;
  setChecking: Dispatch<SetStateAction<boolean>>;
  setLoader: Dispatch<SetStateAction<boolean>>;
  setToken: Dispatch<SetStateAction<string | null>>;
  setUserInfo: Dispatch<SetStateAction<UserInfo[] | any>>;
}
export interface SubmitProps {
  email: string;
  name?: string;
  role?: string;
  password: string;
}
export interface JobPostProps {
  jobName?: string;
  description?: string;
  requirement?: string;
}
export interface CVFieldProps {
  title: string;
  description?: string;
  aboutMe?: string;
  email?: string;
  lastName?: string;
  firstName?: string;
  phoneNumber?: string;
}

export interface AdCreateProps {
  title: string;
  category: string;
  hour: string;
  requirements: string;
  future: string;
}
export interface FormProps {
  cv?: any;
  type?: string;
  refresh?: any;
  isOpen?: boolean;
  setRefresh?: any;
  detailUserId?: string;
  closeModal: () => void;
  form?: GeneralForm | any;
  handleSubmit: (props: GeneralForm) => void;
}

export interface GeneralForm {
  userid?: string;
  lastName?: string;
  firstName?: string;
  aboutMe?: string;
  gender?: string;
  birthday?: string;
  phoneNumber?: string;
  email?: string;
}

export interface CvForm {
  userid?: string;
  lastName?: string;
  firstName?: string;
  aboutMe?: string;
  gender?: string;
  birthday?: string;
  phoneNumber?: string;
  email?: string;
}
export interface AddJobsProps {
  isOpen: boolean;
  closeModal: () => void;
  handleSubmit: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export interface PutProps {
  type: string;
  form: CvForm;
}

export interface DialogProps {
  isOpen: boolean;
  closeModal: () => void;
  hadldeDelete?: () => void;
  hadldeUpdate?: () => void;
  data?: any;
  jobId?: string;
  editValue?: string;
  setEditValue?: Dispatch<SetStateAction<string>> | any;
  edit?: string;
}

export interface FilteredProps {
  className: string;
  valid: string;
  error: string;
  props: string;
}

export interface SearchProps {
  json?: any;
  email: string;
  jobType: string;
  firstName: string;
  phoneNumber: string;
}
