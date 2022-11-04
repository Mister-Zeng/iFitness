import React, { FC, useMemo } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { CANCEL_ICON } from "../../assets";
import { ExerciseType } from "../../models";
import useDailyEntrySelect from "../../providers/dailyEntry";
import createStyles, { StyleSheetProps } from "./styles";

type IProps = {
  exerciseList?: ExerciseType[];
  id: number | undefined;
  exerciseName: string | null;
  sets: number | null;
  reps: number | null;
  weight: number | null;
  disabled?: boolean;
  apiCall?: boolean;
  tempId?: string | number[] | null | undefined;
  updateExerciseHandler?: (exerciseList: ExerciseType[]) => void;
};

const ExerciseInfo: FC<IProps> = ({
  exerciseName,
  sets,
  reps,
  weight,
  updateExerciseHandler,
  id,
  exerciseList,
  disabled,
  apiCall,
  tempId,
}: IProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const { deleteExercise } = useDailyEntrySelect();

  const handleCancel: () => Promise<void> = async () => {
    apiCall && (await deleteExercise(id!));
    console.log(tempId);
    updateExerciseHandler!(
      exerciseList!.filter((exercise) => {
        return exercise.tempId !== tempId;
      })
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{exerciseName}</Text>

        <Text style={styles.exerciseInfo}>
          {sets} sets, {reps} reps, {weight} lbs
        </Text>
      </View>
      <View style={{ display: disabled ? "none" : "flex" }}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Image source={CANCEL_ICON} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExerciseInfo;
