import { DailyEntryType, MacrosGoalType } from "../dailyEntry";

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
  id: number;
  role: string;
  token: string;
  dailyEntry: DailyEntryType[];
}

type EditUserInfoType = {
  id: number;
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

export { RegisterType, LoginType, UserType, EditUserInfoType, AuthContextType };
