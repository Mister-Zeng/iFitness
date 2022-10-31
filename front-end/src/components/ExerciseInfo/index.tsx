import React, { FC, useMemo } from "react";
import {
  Text,
  Image,
  GestureResponderEvent,
  View,
  TouchableOpacity,
} from "react-native";
import { CANCEL_ICON } from "../../assets";
import createStyles, { StyleSheetProps } from "./styles";

type IProps = {
  exerciseName: string | null;
  sets: number | null;
  reps: number | null;
  weight: number | null;
};

const ExerciseInfo: FC<IProps> = ({
  exerciseName,
  sets,
  reps,
  weight,
}: IProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const handleCancel: FC<GestureResponderEvent> = (
    event: GestureResponderEvent
  ) => {};

  return (
    <View style={styles.container}>
      <View style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{exerciseName}</Text>

        <Text style={styles.exerciseInfo}>
          {sets} sets, {reps} reps, {weight} lbs
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Image source={CANCEL_ICON} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExerciseInfo;
