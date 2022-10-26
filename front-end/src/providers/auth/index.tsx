import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  FC,
  useContext,
  useState,
  Context,
  PropsWithChildren,
  useEffect,
} from "react";
import { userInfoConstants } from "../../constants/userInfo";
import { UserType, EditUserInfoType, MacrosType } from "../../models";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { RegisterType, LoginType, AuthContextType } from "../../models";

export const AuthContext: Context<AuthContextType> =
  createContext<AuthContextType>({
    isLoading: false,
    userInfo: userInfoConstants,
    login: () => Promise.resolve(),
    register: () => Promise.resolve(),
    editProfile: () => Promise.resolve(),
    editMacro: () => Promise.resolve(),
  });

export const AuthProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const instance: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/v1/",
    timeout: 15000,
  });

  const [userInfo, setUserInfo] = useState<UserType>(userInfoConstants);

  const login: (loginInfo: LoginType) => Promise<void> = async (
    loginInfo: LoginType
  ): Promise<void> => {
    try {
      setIsLoading(true);

      const response: AxiosResponse = await instance.post("login", loginInfo);
      const userInfo: UserType = response.data;
      setUserInfo(userInfo);
      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      console.log(userInfo);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const register: (registerInfo: RegisterType) => Promise<void> = async (
    registerInfo: RegisterType
  ): Promise<void> => {
    try {
      setIsLoading(true);

      const response: AxiosResponse = await instance.post(
        "register",
        registerInfo
      );
      const userInfo: UserType = response.data;
      setUserInfo(userInfo);
      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      console.log(userInfo);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const editProfile: (editUserInfo: EditUserInfoType) => Promise<void> = async (
    editUserInfo: EditUserInfoType
  ) => {
    try {
      setIsLoading(true);

      const response: AxiosResponse = await instance.put(
        "editUserInfo",
        editUserInfo
      );
      const userInfos: UserType = response.data;
      setUserInfo({
        ...userInfo,
        first_name: userInfos.first_name,
        last_name: userInfos.last_name,
        email_address: userInfos.email_address,
      });
      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      console.log(userInfo);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const editMacro: (editMacroInfo: MacrosType) => Promise<void> = async (
    editMacroInfo: MacrosType
  ) => {
    try {
      setIsLoading(true);

      const response: AxiosResponse = await instance.put(
        "editMacrosGoal",
        editMacroInfo
      );
      const userInfos: UserType = response.data;

      setUserInfo({ ...userInfo, macros_goal: userInfos.macros_goal });
      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      console.log(userInfos);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    const isLoggedIn: () => Promise<void> = async () => {
      try {
        let userInfo: string | any | null = (await AsyncStorage.getItem(
          "userInfo"
        )) as string;
        userInfo = JSON.parse(userInfo);

        if (userInfo) {
          setUserInfo(userInfo);
        }
      } catch (error) {
        console.log(error);
      }
    };
    isLoggedIn();
  }, []);

  const value = {
    isLoading,
    userInfo,
    login,
    register,
    editProfile,
    editMacro,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const AuthSelect: () => AuthContextType = () => {
  const context: AuthContextType = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within AuthContext");
  }

  return context;
};

export default AuthSelect;
