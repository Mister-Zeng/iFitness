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
import { UserType, EditUserInfoType, MacrosGoalType } from "../../models";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { RegisterType, LoginType, AuthContextType } from "../../models";
import { Alert } from "react-native";

export const AuthContext: Context<AuthContextType> =
  createContext<AuthContextType>({
    isLoading: false,
    userInfo: userInfoConstants,
    login: () => Promise.resolve(),
    register: () => ({} as Promise<string | undefined>),
    editProfile: () => Promise.resolve(),
    editMacro: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    setUserInfo: () => {},
  });

export const AuthProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

      const userInfos: UserType = await response.data;

      setUserInfo(userInfos);

      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfos));

      console.log(userInfos);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const register: (
    registerInfo: RegisterType
  ) => Promise<string | undefined> = async (
    registerInfo: RegisterType
  ): Promise<string | undefined> => {
    try {
      setIsLoading(true);

      const response: AxiosResponse = await instance.post(
        "register",
        registerInfo
      );
      const userInfo: UserType = await response.data;

      setUserInfo(userInfo);

      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));

      setIsLoading(false);

      if (response.status === 200) {
        return Promise.resolve("success");
      } else {
        return Promise.resolve("unsucessful");
      }
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

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-Type": "application/json",
        },
      };

      const response: AxiosResponse = await instance.put(
        `editUserInfo/user/${userInfo.id}`,
        editUserInfo,
        config
      );
      const userInfos: UserType = await response.data;
      console.log(userInfos);
      setUserInfo({
        ...userInfo,
        firstName: userInfos.firstName,
        lastName: userInfos.lastName,
        emailAddress: userInfos.emailAddress,
      });

      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const editMacro: (editMacroInfo: MacrosGoalType) => Promise<void> = async (
    editMacroInfo: MacrosGoalType
  ) => {
    try {
      setIsLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-Type": "application/json",
        },
      };

      const response: AxiosResponse = await instance.put(
        `editMacrosGoal/user/${userInfo.id}`,
        editMacroInfo,
        config
      );

      const macrosGoalInfo: MacrosGoalType = await response.data;

      setUserInfo({
        ...userInfo,
        macrosGoal: macrosGoalInfo,
      });

      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const logout: () => Promise<void> = async (): Promise<void> => {
    try {
      setIsLoading(true);

      await AsyncStorage.clear();

      setUserInfo(userInfoConstants);

      Alert.alert("Logout", "You have been logged out successfully");

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const isLoggedIn: () => Promise<void> = async () => {
      try {
        setIsLoading(true);

        let userInfo: string | any | null = (await AsyncStorage.getItem(
          "userInfo"
        )) as string;
        userInfo = JSON.parse(userInfo);

        if (userInfo) {
          setUserInfo(userInfo);
        }

        setIsLoading(false);
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
    logout,
    register,
    editProfile,
    editMacro,
    setUserInfo,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthSelect: () => AuthContextType = () => {
  const context: AuthContextType = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuthSelect must be used within AuthContext");
  }

  return context;
};

export default useAuthSelect;
