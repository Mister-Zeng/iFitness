import { Dispatch, SetStateAction } from "react";

type DailyEntryType = {
  id?: number;
  date: Date | string;
  weight: number | null;
  dailyMacros: DailyMacrosType;
  exercise: ExerciseType[];
};

type DailyMacrosType = {
  id?: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

type MacrosGoalType = {
  id: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

type ExerciseType = {
  id: number | null;
  name: string | null;
  sets: number | null;
  reps: number | null;
  weight: number | null;
};

type EditProgressType = {
  weight: number;
  macros: DailyMacrosType;
  exercise: ExerciseType[];
};

type GetDailyEntryProps = {
  username: string;
  date: string;
};

interface DailyEntryContextType {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  dailyEntry: DailyEntryType | null;
  getDailyEntry: (dailyEntryInfo: {
    userId: number;
    date: string;
  }) => Promise<void>;
  createDailyEntry: (createDailyEntryInfo: DailyEntryType) => Promise<void>;
}

export {
  GetDailyEntryProps,
  MacrosGoalType,
  DailyMacrosType,
  DailyEntryType,
  ExerciseType,
  EditProgressType,
  DailyEntryContextType,
};
