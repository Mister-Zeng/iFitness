import { registerRootComponent } from "expo";
import React from "react";
import { View, StatusBar } from "react-native";
import Navigation from "./navigation";
import { Provider as PaperProvider, MD2DarkTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

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
      <NavigationContainer>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent={true}
        />
        <View style={{ flex: 1 }}>
          <Navigation />
        </View>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default registerRootComponent(App);
