import React, { FC, useMemo } from "react";
import { Text, GestureResponderEvent, TouchableOpacity } from "react-native";
import createStyles, { StyleSheetProps } from "./styles";

type IProps = {
  onPress: (event: GestureResponderEvent) => void;
  buttonText: string;
};

const AddButton: FC<IProps> = ({ onPress, buttonText }: IProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.addExerciseText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default AddButton;
