import { registerRootComponent } from "expo";
import React from "react";
import { StatusBar } from "react-native";
import Navigation from "./navigation";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./providers/auth";
import { DailyEntryProvider } from "./providers/dailyEntry/index";

function App() {
  return (
    <AuthProvider>
      <DailyEntryProvider>
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
      </DailyEntryProvider>
    </AuthProvider>
  );
}

export default registerRootComponent(App);
