import React, {
  createContext,
  FC,
  useContext,
  useState,
  Context,
  PropsWithChildren,
} from "react";
import {
  DailyEntryContextType,
  DailyEntryType,
  ExerciseType,
} from "../../models";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import useAuthSelect from "../auth/index";
import { dailyEntryConstant } from "../../constants/dailyEntry";
import moment from "moment";

export const DailyEntryContext: Context<DailyEntryContextType> =
  createContext<DailyEntryContextType>({
    dailyEntry: null,
    isLoading: true,
    allDailyEntries: [],
    getEntries: async () => Promise.resolve(),
    getDailyEntry: () => Promise.resolve(),
    updateDailyEntry: () => Promise.resolve(),
    createDailyEntry: () => Promise.resolve(),
    deleteExercise: () => Promise.resolve(),
  });

export const DailyEntryProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const instance: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/v1/",
    timeout: 15000,
  });

  const { userInfo, setUserInfo } = useAuthSelect();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [dailyEntry, setDailyEntry] =
    useState<DailyEntryType>(dailyEntryConstant);

  const [allDailyEntries, setAllDailyEntries] = useState<DailyEntryType[]>([]);

  const getEntries: (userId: number) => Promise<void> = async (
    userId: number
  ): Promise<void> => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-Type": "application/json",
        },
        params: {
          userId: userId,
        },
      };

      const response: AxiosResponse = await instance.get("getEntries", config);

      const entries: DailyEntryType[] = await response.data;

      setAllDailyEntries(entries);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

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

      dailyEntryData.date == undefined
        ? setDailyEntry(dailyEntryConstant)
        : setDailyEntry(dailyEntryData);

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
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-Type": "application/json",
        },
      };

      const response: AxiosResponse = await instance.post(
        `createDailyEntry/user/${userInfo.id}`,
        createDailyEntryInfo,
        config
      );

      const dailyEntryData: DailyEntryType = await response.data;

      setDailyEntry(dailyEntryData);

      console.log(dailyEntryData);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateDailyEntry: (
    updateDailyEntryInfo: DailyEntryType
  ) => Promise<void> = async (updateDailyEntryInfo: DailyEntryType) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-Type": "application/json",
        },
      };

      const response: AxiosResponse = await instance.put(
        `updateDailyEntry/${userInfo.id}/dailyEntry`,
        updateDailyEntryInfo,
        config
      );

      const dailyEntryData: DailyEntryType = await response.data;

      setDailyEntry(dailyEntryData);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteExercise: (id: number) => Promise<void> = async (id: number) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-Type": "application/json",
        },
        params: {
          exerciseId: id,
        },
      };

      const response: AxiosResponse = await instance.delete(
        "deleteExercise",
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
    dailyEntry,
    allDailyEntries,
    getEntries,
    getDailyEntry,
    createDailyEntry,
    updateDailyEntry,
    deleteExercise,
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
