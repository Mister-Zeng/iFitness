import React, { ComponentType, useMemo } from "react";
import { View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from "./styles";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const ProgressScreen: ComponentType<{
  route: any;
  jumpTo: (key: string) => void;
}> = ({ route, jumpTo }) => {
  const styles = useMemo(() => createStyles(), []);

  return <View style={styles.body}></View>;
};

export default ProgressScreen;
