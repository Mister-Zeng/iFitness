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
import { DailyEntryContextType, DailyEntryType } from "../../models";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Alert } from "react-native";
import useAuthSelect from "../auth/index";
import { GetDailyEntryProps } from "../../models/dailyEntry";
import { dailyEntryConstant } from "../../constants/dailyEntry";
import moment from "moment";

export const DailyEntryContext: Context<DailyEntryContextType> =
  createContext<DailyEntryContextType>({
    dailyEntry: null,
    getDailyEntry: () => Promise.resolve(),
    isLoading: true,
    createDailyEntry: () => Promise.resolve(),
    setIsLoading: () => {},
  });

export const DailyEntryProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const instance: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/v1/",
    timeout: 15000,
  });

  const { userInfo, setUserInfo } = useAuthSelect();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [dailyEntry, setDailyEntry] = useState<DailyEntryType | null>(null);

  const getDailyEntry: (dailyEntryInfo: {
    userId: number;
    date: string;
  }) => Promise<void> = async (dailyEntryInfo: {
    userId: number;
    date: string;
  }): Promise<void> => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-Type": "application/json",
        },
        params: dailyEntryInfo,
      };

      const response: AxiosResponse = await instance.get(
        "getDailyEntry",
        config
      );

      const dailyEntryData: DailyEntryType = await response.data;

      dailyEntryData !== undefined ? setDailyEntry(dailyEntryData) : null;

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const createDailyEntry: (
    createDailyEntryInfo: DailyEntryType
  ) => Promise<void> = async (
    createDailyEntryInfo: DailyEntryType
  ): Promise<void> => {
    console.log(createDailyEntryInfo);
    console.log(userInfo.token);
    console.log(userInfo.id);

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-Type": "application/json",
        },
        // params: { userId: userInfo.id },
      };

      const response: AxiosResponse = await instance.post(
        `createDailyEntry/user/${userInfo.id}`,
        createDailyEntryInfo,
        config
      );

      const dailyEntryData: DailyEntryType = await response.data;

      setDailyEntry(dailyEntryData);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    isLoading,
    setIsLoading,
    dailyEntry,
    getDailyEntry,
    createDailyEntry,
  };

  return (
    <DailyEntryContext.Provider value={value}>
      {children}
    </DailyEntryContext.Provider>
  );
};

const useDailyEntrySelect: () => DailyEntryContextType = () => {
  const context: DailyEntryContextType = useContext(DailyEntryContext);

  if (context === undefined) {
    throw new Error(
      "useDailyEntrySelect must be used within DailyEntryContext"
    );
  }

  return context;
};

export default useDailyEntrySelect;
