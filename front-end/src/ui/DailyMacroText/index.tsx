import React, { FC, useMemo } from "react";
import { Image, TextInput, View, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import createStyles from "./styles";

interface IProps {
  infoType: string;
  value: number;
  measurement: string;
}
const DailyMacroText: FC<IProps> = ({ infoType, value, measurement }) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.inputIconContainer}>
      <Text style={styles.infoType}>{infoType}</Text>
      <Text style={styles.infoType}>{value}</Text>
      <Text style={styles.measurement}>{measurement}</Text>
    </View>
  );
};

export default DailyMacroText;
