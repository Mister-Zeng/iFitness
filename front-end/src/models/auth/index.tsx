import { DailyEntryType, MacrosType } from "../dailyEntry";

interface RegisterType {
  first_name: string;
  last_name: string;
  username: string;
  email_address: string;
  password: string;
}

interface LoginType {
  username: string;
  password: string;
}

interface UserType {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email_address: string;
  password: string;
  role: string;
  token: string;
  daily_entry: DailyEntryType[];
  macros: MacrosType;
}

interface EditUserInfoType {
  username: string;
  first_name: string;
  last_name: string;
  email_address: string;
}

export { RegisterType, LoginType, UserType, EditUserInfoType };
