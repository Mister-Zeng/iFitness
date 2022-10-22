import React from "react";
import axios, { AxiosResponse } from "axios";
import { RegisterType, LoginType } from "../models";
import { EditUserInfoType } from "../models/auth";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) =>
    instance
      .post(url, body)
      .then(responseBody)
      .catch((error) => console.log(error.response)),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Auth = {
  login: (loginInfo: LoginType): Promise<LoginType> =>
    requests.post("login", loginInfo),

  register: (registerInfo: RegisterType): Promise<RegisterType> =>
    requests.post("register", registerInfo),

  editUserInfo: (editUserInfo: EditUserInfoType): Promise<EditUserInfoType> =>
    requests.put("editUserInfo", editUserInfo),
};
