import React, { FC, useMemo } from "react";
import {
  TouchableOpacity,
  StyleProp,
  TextStyle,
  ViewStyle,
  Text,
  GestureResponderEvent,
} from "react-native";
import createStyles, { StyleSheetProps } from "./styles";
import { Colors } from "../../constants/colors";

interface IProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
const InitialScreenButton: FC<IProps> = ({
  title,
  onPress,
  disabled,
  buttonStyle,
  textStyle,
}: IProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: disabled ? Colors.GREY : Colors.ORANGE,
        },
        buttonStyle,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default InitialScreenButton;
