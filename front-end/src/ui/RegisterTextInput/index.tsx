import React, { FC, useMemo } from "react";
import { Image, TextInput, View, ImageSourcePropType } from "react-native";
import createStyles from "./styles";

interface IProps {
  title: string;
  icon: ImageSourcePropType;
  value: string;
  autoCapitalize: any;
  onChangeText: (text: string) => void;
  autoCorrect: boolean;
}
const RegisterTextInput: FC<IProps> = ({ title, icon, ...props }) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.inputIconContainer}>
      <TextInput
        style={styles.input}
        placeholder={title}
        placeholderTextColor="#6A6A6A"
        {...props}
      />
      <Image style={styles.icon} source={icon} />
    </View>
  );
};

export default RegisterTextInput;
