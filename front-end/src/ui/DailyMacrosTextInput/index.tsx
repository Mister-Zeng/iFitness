import React, { FC, useMemo } from "react";
import { Image, TextInput, View, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import createStyles from "./styles";

interface IProps {
  infoType: string;
  editable?: boolean;
  value: string;
  autoCapitalize: any;
  onChangeText: (text: string) => void;
  autoCorrect: boolean;
  measurement?: string;
}
const DailyMacrosTextInput: FC<IProps> = ({
  infoType,
  editable = true,
  value,
  measurement,
  ...props
}) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.inputIconContainer}>
      <Text style={styles.infoType}>{infoType}</Text>
      <TextInput
        style={styles.input}
        placeholder={value}
        placeholderTextColor="white"
        editable={editable}
        {...props}
      />
      {measurement && <Text style={styles.measurement}>{measurement}</Text>}
    </View>
  );
};

export default DailyMacrosTextInput;
