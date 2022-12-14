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
import { UserType, EditUserInfoType, MacrosGoalType } from "../../types";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { RegisterType, LoginType, AuthContextType } from "../../types";
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
    baseURL: "https://ifitness-backend.herokuapp.com/api/v1/",
    timeout: 15000,
  });

  const [userInfo, setUserInfo] = useState<UserType>(userInfoConstants);

  useEffect(() => {
    const isLoggedIn: () => Promise<void> = async () => {
      try {
        setIsLoading(true);

        let userInfo: string | any | null = (await AsyncStorage.getItem(
          "userInfo"
        )) as string;
        userInfo = JSON.parse(userInfo);

        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
            "Content-Type": "application/json",
          },
          params: {
            userId: userInfo.id,
          },
        };

        const response: AxiosResponse = await instance.get(
          "isAuthenticated",
          config
        );

        const data = await response.data;

        if (data === false) {
          logout();
          setIsLoading(false);
        } else {
          if (userInfo) {
            setUserInfo({ ...userInfo, token: userInfo.token });
          }
        }

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    isLoggedIn();
  }, []);

  const login: (loginInfo: LoginType) => Promise<void> = async (
    loginInfo: LoginType
  ): Promise<void> => {
    try {
      setIsLoading(true);

      const response: AxiosResponse = await instance.post("login", loginInfo);

      const userInfo: UserType = response.data;

      setUserInfo({ ...userInfo, token: userInfo.token });

      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      setIsLoading(false);
    } catch (error) {
      Alert.alert("Alert", "Invalid username or password");
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

      const updatedUserInfo: UserType = {
        ...userInfo,
        firstName: userInfos.firstName,
        lastName: userInfos.lastName,
        emailAddress: userInfos.emailAddress,
      };
      setUserInfo(updatedUserInfo);

      await AsyncStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));

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

      const updatedUserInfo: UserType = {
        ...userInfo,
        macrosGoal: macrosGoalInfo,
      };

      setUserInfo(updatedUserInfo);

      await AsyncStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));

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
