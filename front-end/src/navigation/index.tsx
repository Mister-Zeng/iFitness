import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import {
  WelcomeScreen,
  RegisterScreen,
  LoginScreen,
  HomeScreen,
} from "../screens";

export type MainStackParamList = {
  WelcomeScreen: undefined;
  RegisterScreen: undefined;
  LoginScreen: undefined;
  HomeScreen: undefined;
};
const MainStack = createNativeStackNavigator<MainStackParamList>();

export default function Screens() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <MainStack.Screen name="RegisterScreen" component={RegisterScreen} />
        <MainStack.Screen name="LoginScreen" component={LoginScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
