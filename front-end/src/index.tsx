import { registerRootComponent } from "expo";
import React from "react";
import { StatusBar } from "react-native";
import Navigation from "./navigation";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./providers/auth";

function App() {
  return (
    <AuthProvider>
      <PaperProvider>
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
