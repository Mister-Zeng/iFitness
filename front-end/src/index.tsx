import { registerRootComponent } from "expo";
import React from "react";
import { StatusBar } from "react-native";
import Navigation from "./navigation";
import { Provider as PaperProvider, MD2DarkTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./providers/auth";

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
    <AuthProvider>
      <PaperProvider theme={theme}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent={true}
        />
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </AuthProvider>
  );
}

export default registerRootComponent(App);
