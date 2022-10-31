import { Dispatch, SetStateAction } from "react";

type DailyEntryType = {
  id?: number;
  date: Date | string;
  weight: number | null;
  dailyMacros: MacrosType;
  exercise: ExerciseType[];
};

type MacrosType = {
  id?: number;
  calories: number | null;
  protein: number | null;
  carbs: number | null;
  fat: number | null;
};

type ExerciseType = {
  id?: number;
  name: string | null;
  sets: number | null;
  reps: number | null;
  weight: number | null;
};

type EditProgressType = {
  weight: number;
  macros: MacrosType;
  exercise: ExerciseType[];
};

type GetDailyEntryProps = {
  username: string;
  date: string;
};

interface DailyEntryContextType {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  dailyEntry: DailyEntryType | undefined;
  getDailyEntry: (dailyEntryInfo: GetDailyEntryProps) => Promise<void>;
  createDailyEntry: (createDailyEntryInfo: DailyEntryType) => Promise<void>;
}

export {
  GetDailyEntryProps,
  MacrosType,
  DailyEntryType,
  ExerciseType,
  EditProgressType,
  DailyEntryContextType,
};
