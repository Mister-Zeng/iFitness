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
import {
  AuthConfigType,
  DailyEntryContextType,
  DailyEntryType,
} from "../../models";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Alert } from "react-native";
import useAuthSelect from "../auth/index";
import { GetDailyEntryProps } from "../../models/dailyEntry";
import { dailyEntryConstant } from "../../constants/dailyEntry";
import moment from "moment";

export const DailyEntryContext: Context<DailyEntryContextType> =
  createContext<DailyEntryContextType>({
    dailyEntry: dailyEntryConstant,
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

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [dailyEntry, setDailyEntry] = useState<DailyEntryType>({
    id: 0,
    date: moment(new Date()).format("YYYY-MM-DD"),
    dailyMacros: {
      carbs: 0,
      calories: 0,
      fat: 0,
      protein: 0,
    },
    weight: 0,
    exercise: [],
  });

  const getDailyEntry: (
    dailyEntryInfo: GetDailyEntryProps
  ) => Promise<void> = async (
    dailyEntryInfo: GetDailyEntryProps
  ): Promise<void> => {
    try {
      setIsLoading(true);

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
      console.log(dailyEntryData + " daily entry data");

      setDailyEntry(dailyEntryData);

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
    try {
      setIsLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-Type": "application/json",
        },
        params: createDailyEntryInfo,
      };

      const response: AxiosResponse = await instance.get(
        "createDailyEntry",
        config
      );

      const dailyEntryData: DailyEntryType = await response.data;

      console.log(dailyEntryData);

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
