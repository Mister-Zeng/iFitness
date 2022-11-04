import { Dispatch, SetStateAction } from "react";

type DailyEntryType = {
  id?: number;
  date: Date | string;
  weight: number | null;
  dailyMacros: DailyMacrosType;
  exercise: ExerciseType[];
  // used to check if today's daily entry has been created
  isTodayCreated?: boolean;
};

type DailyMacrosType = {
  id?: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

type MacrosGoalType = {
  id: number | null;
  calories: number | null;
  protein: number | null;
  carbs: number | null;
  fat: number | null;
};

type ExerciseType = {
  id?: number;
  name: string;
  sets: number;
  reps: number;
  weight: number;
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
  isLoading: boolean;
  dailyEntry: DailyEntryType | null;
  getDailyEntry: (dailyEntryInfo: {
    userId: number;
    date: string;
  }) => Promise<void>;
  createDailyEntry: (createDailyEntryInfo: DailyEntryType) => Promise<void>;
  updateDailyEntry: (updateDailyEntryInfo: DailyEntryType) => Promise<void>;
  deleteExercise: (exerciseId: number) => Promise<void>;
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
