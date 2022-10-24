import React, { FC, useMemo } from "react";
import { View, Text } from "react-native";
import createStyles, { StyleSheetProps } from "./styles";

interface IProps {
  infoType: string;
  value: number;
  measurement: string;
}
const DailyMacroText: FC<IProps> = ({ infoType, value, measurement }) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  return (
    <View style={styles.inputIconContainer}>
      <Text style={styles.infoType}>{infoType}</Text>
      <Text style={styles.valueType}>{value}</Text>
      <Text style={styles.measurement}>{measurement}</Text>
    </View>
  );
};

export default DailyMacroText;
