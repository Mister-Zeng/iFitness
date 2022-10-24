import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  FC,
  useContext,
  useState,
  Context,
  PropsWithChildren,
} from "react";
import { userInfoConstants } from "../../constants/userInfo";
import { UserType, EditUserInfoType } from "../../models";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { RegisterType, LoginType, AuthContextType } from "../../models";

export const AuthContext: Context<AuthContextType> =
  createContext<AuthContextType>({
    userInfo: userInfoConstants,
    login: () => Promise.resolve(),
    register: () => Promise.resolve(),
    editProfile: () => Promise.resolve(),
  });

export const AuthProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const instance: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/v1/",
    timeout: 15000,
  });

  const [userInfo, setUserInfo] = useState<UserType>(userInfoConstants);

  const responseBody: (response: AxiosResponse) => any = (
    response: AxiosResponse
  ) => response.data;

  const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, body: {}) =>
      instance.post(url, body).then(responseBody),
    put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
    delete: (url: string) => instance.delete(url).then(responseBody),
  };

  const Auth = {
    login: (loginInfo: LoginType): Promise<UserType> =>
      requests.post("login", loginInfo),

    register: (registerInfo: RegisterType): Promise<RegisterType> =>
      requests.post("register", registerInfo),

    editUserInfo: (editUserInfo: EditUserInfoType): Promise<EditUserInfoType> =>
      requests.put("editUserInfo", editUserInfo),
  };

  const login: (loginInfo: LoginType) => void = (loginInfo: LoginType) => {
    Auth.login(loginInfo)
      .then((data) => {
        setUserInfo(data);
        console.log(data);
        AsyncStorage.setItem("userInfo", JSON.stringify(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const register: (registerInfo: RegisterType) => void = (
    registerInfo: RegisterType
  ) => {
    Auth.register(registerInfo)
      .then((data) => {
        console.log(data);
        AsyncStorage.setItem("userInfo", JSON.stringify(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editProfile: (editUserInfo: EditUserInfoType) => void = (
    editUserInfo: EditUserInfoType
  ) => {
    Auth.editUserInfo(editUserInfo)
      .then((data) => {
        const updatedUserInfo = { ...userInfo, data };
        setUserInfo(updatedUserInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));

        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const value = {
    Auth,
    userInfo,
    login,
    register,
    editProfile,
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
