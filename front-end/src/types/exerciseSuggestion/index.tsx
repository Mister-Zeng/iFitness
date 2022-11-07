type ExerciseContextType = {
  getExercise: (exerciseInfo: ExerciseInfoType) => Promise<void>;
  ExerciseInfo: ExerciseResponseType[];
};

type ExerciseResponseType = {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
};

type ExerciseInfoType = {
  type: string;
  muscle: string;
  difficulty: string;
};

export { ExerciseContextType, ExerciseInfoType, ExerciseResponseType };
