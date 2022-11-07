import React, {
  createContext,
  FC,
  useContext,
  useState,
  Context,
  PropsWithChildren,
} from "react";
import { API_KEY } from "@env";
import axios, { AxiosResponse } from "axios";

import {
  ExerciseContextType,
  ExerciseResponseType,
  ExerciseInfoType,
} from "../../types/exerciseSuggestion";

export const ExerciseContext: Context<ExerciseContextType> =
  createContext<ExerciseContextType>({
    getExercise: async () => Promise.resolve(),
    ExerciseInfo: [],
  });

export const ExerciseProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [ExerciseInfo, setExerciseInfo] = useState<ExerciseResponseType[]>([]);

  const getExercise: (exerciseInfo: ExerciseInfoType) => Promise<void> = async (
    exerciseInfo: ExerciseInfoType
  ): Promise<void> => {
    try {
      const config = {
        headers: {
          "X-Api-Key": API_KEY,
          "Content-Type": "application/json",
        },
        params: exerciseInfo,
      };

      const response: AxiosResponse = await axios.get(
        "https://api.api-ninjas.com/v1/exercises",
        config
      );

      const entry = await response.data;

      setExerciseInfo(entry);
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    getExercise,
    ExerciseInfo,
  };

  return (
    <ExerciseContext.Provider value={value}>
      {children}
    </ExerciseContext.Provider>
  );
};

const useExerciseSelect: () => ExerciseContextType = () => {
  const context: ExerciseContextType = useContext(ExerciseContext);

  if (context === undefined) {
    throw new Error("useExerciseSelect must be used within ExerciseContext");
  }

  return context;
};

export default useExerciseSelect;
