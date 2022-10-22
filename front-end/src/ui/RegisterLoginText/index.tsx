import React, { FC, useMemo } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import createStyles from "./styles";

interface IProps {
  title: string;
  link: string;
  onPress?: () => void;
  disabled?: boolean;
}
const RegisterLoginText: FC<IProps> = ({
  title,
  link,
  onPress,
  disabled,
}: IProps) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.registerContainer}>
      <Text style={styles.registerText}>{title}</Text>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Text style={styles.registerBtnText}>{link}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterLoginText;
