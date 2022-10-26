import React, { ComponentType, useMemo } from "react";
import { ScrollView, View, Text } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles, { StyleSheetProps } from "./styles";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const SplashScreen: ComponentType<{
  route: any;
  jumpTo: (key: string) => void;
}> = ({ route, jumpTo }) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  return <LottieView source={require("./animation.json")} autoPlay loop />;
};

export default SplashScreen;
