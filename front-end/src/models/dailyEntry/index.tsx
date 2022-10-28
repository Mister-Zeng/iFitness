type DailyEntryType = {
  id?: number;
  date: Date;
  weight: number;
  macros: MacrosType;
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
  id: number;
  name: string;
  sets: number;
  reps: number;
  weight: number;
};

type EditProgressType = {
  weight: number;
  macros: MacrosType;
  exercise: ExerciseType[];
};

export { MacrosType, DailyEntryType, ExerciseType, EditProgressType };
