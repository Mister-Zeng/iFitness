import React, { FC, useMemo } from "react";
import { TouchableOpacity, Text } from "react-native";
import createStyles, { StyleSheetProps } from "./styles";
import { Colors } from "../../constants/colors";

interface IProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
}
const SaveButton: FC<IProps> = ({ title, onPress, disabled }: IProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: disabled ? Colors.GREY : Colors.ORANGE,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SaveButton;
