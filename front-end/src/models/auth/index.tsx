import { DailyEntryType, MacrosType } from "../dailyEntry";

type LoginType = {
  username: string;
  password: string;
};
interface RegisterType extends LoginType {
  first_name: string;
  last_name: string;
  email_address: string;
  macros_goal: MacrosType;
}

interface UserType extends RegisterType {
  id: number;
  role: string;
  token: string;
  daily_entry: DailyEntryType[];
}

type EditUserInfoType = {
  username: string;
  first_name: string;
  last_name: string;
  email_address: string;
};

interface AuthContextType {
  userInfo: UserType;
  isLoading: boolean;
  login: (loginInfo: LoginType) => void;
  register: (registerInfo: RegisterType) => Promise<string | undefined>;
  editProfile: (editUserInfo: EditUserInfoType) => void;
  editMacro: (macrosInfo: MacrosType) => void;
  logout: () => void;
}

export { RegisterType, LoginType, UserType, EditUserInfoType, AuthContextType };
