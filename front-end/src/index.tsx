import { registerRootComponent } from "expo";
import React from "react";
import { View } from "react-native";
import Screens from "./navigation";

function App() {
  return (
    <View style={{ flex: 1 }}>
      <Screens />
    </View>
  );
}

export default registerRootComponent(App);
