import { registerRootComponent } from "expo";
import React, { useCallback, useEffect, useState } from "react";
import { View, StatusBar } from "react-native";
import Navigation from "./navigation";
import { Provider as PaperProvider, MD2DarkTheme } from "react-native-paper";

import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthProvider from "./providers/auth";
import { userInfoConstants } from "./constants/userInfo";
import Entypo from "@expo/vector-icons/Entypo";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { UserType } from "./models";

const theme = {
  ...MD2DarkTheme,
  roundness: 2,
  font: {
    ...MD2DarkTheme.fonts,
  },
  colors: {
    ...MD2DarkTheme.colors,
    primary: "#EBB03F",
    secondary: "#6A6A6A",
    tertiary: "#121212",
  },
};

function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    </PaperProvider>
  );
}

export default registerRootComponent(App);
