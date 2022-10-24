import React, { FC, useMemo } from "react";
import { Text, GestureResponderEvent, TouchableOpacity } from "react-native";
import createStyles, { StyleSheetProps } from "./styles";

type IProps = {
  onPress: (event: GestureResponderEvent) => void;
};

const AddExerciseButton: FC<IProps> = ({ onPress }: IProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.addExerciseText}>Add Exercise</Text>
    </TouchableOpacity>
  );
};

export default AddExerciseButton;
