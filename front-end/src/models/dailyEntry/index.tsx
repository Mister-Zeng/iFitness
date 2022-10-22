type MacrosType = {
  id?: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

type DailyEntryType = {
  id: number;
  date: Date;
  weight: number;
  macros: MacrosType;
  exercise: ExerciseType[];
};

type ExerciseType = {
  id: number;
  name: string;
  sets: number;
  reps: number;
  weight: number;
};

export { MacrosType, DailyEntryType, ExerciseType };
