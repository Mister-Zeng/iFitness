import { DailyEntryType, MacrosGoalType } from "../dailyEntry";

type AuthConfigType = {
  headers: {
    Authorization: string;
    "Content-Type": string;
  };
};

type LoginType = {
  username: string;
  password: string;
};
interface RegisterType extends LoginType {
  firstName: string;
  lastName: string;
  emailAddress: string;
  macrosGoal: MacrosGoalType;
}

interface UserType extends RegisterType {
  userId: number;
  role: string;
  token: string;
  dailyEntry: DailyEntryType[];
}

type EditUserInfoType = {
  username: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
};

interface AuthContextType {
  userInfo: UserType;
  isLoading: boolean;
  login: (loginInfo: LoginType) => void;
  register: (registerInfo: RegisterType) => Promise<string | undefined>;
  editProfile: (editUserInfo: EditUserInfoType) => void;
  editMacro: (macrosInfo: MacrosGoalType) => void;
  logout: () => void;
  setUserInfo: React.Dispatch<React.SetStateAction<UserType>>;
}

export {
  AuthConfigType,
  RegisterType,
  LoginType,
  UserType,
  EditUserInfoType,
  AuthContextType,
};
