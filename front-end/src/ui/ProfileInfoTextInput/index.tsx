import React, { FC, useMemo } from "react";
import { Image, TextInput, View, Text } from "react-native";
import createStyles from "./styles";

interface IProps {
  infoType: string;
  editable?: boolean;
  value: string;
  autoCapitalize: any;
  onChangeText: (text: string) => void;
  autoCorrect: boolean;
}
const ProfileInfoTextInput: FC<IProps> = ({
  infoType,
  editable = true,
  value,
  ...props
}) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.inputIconContainer}>
      <Text style={styles.infoType}>{infoType}</Text>
      <TextInput
        style={styles.input}
        placeholder={value}
        placeholderTextColor="#6A6A6A"
        editable={editable}
      />
    </View>
  );
};

export default ProfileInfoTextInput;
