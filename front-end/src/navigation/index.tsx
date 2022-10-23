import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomNavigation } from "react-native-paper";

import { HOME_ICON, PROGRESS_ICON, ENTRY_ICON, PROFILE_ICON } from "../assets";

import {
  InitialScreen,
  RegisterScreen,
  LoginScreen,
  HomeScreen,
  DailyEntryScreen,
  ProgressScreen,
  ProfileScreen,
  MacroScreen,
} from "../screens";

import { Colors } from "react-native/Libraries/NewAppScreen";

import AuthSelect, { AuthProvider } from "../providers/auth";

import Entypo from "@expo/vector-icons/Entypo";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TabNavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: HOME_ICON,
    },
    {
      key: "progress",
      title: "Progress",
      focusedIcon: PROGRESS_ICON,
    },
    { key: "daily_entry", title: "Daily Entry", focusedIcon: ENTRY_ICON },
    {
      key: "profile",
      title: "Profile",
      focusedIcon: PROFILE_ICON,
      color: Colors.ORANGE,
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    progress: ProgressScreen,
    daily_entry: DailyEntryScreen,
    profile: ProfileScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: "#6A6A6A" }}
      inactiveColor="#EBB03F"
      activeColor="#EBB03F"
    />
  );
};

export type MainStackParamList = {
  InitialScreen: undefined;
  RegisterScreen: undefined;
  MacroScreen: undefined;
  LoginScreen: undefined;
  HomeScreen: undefined;
  DailyEntryScreen: undefined;
  ProgressScreen: undefined;
  ProfileScreen: undefined;
};
const MainStack = createNativeStackNavigator<MainStackParamList>();

function Screens() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="InitialScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="InitialScreen" component={InitialScreen} />
        <MainStack.Screen name="RegisterScreen" component={RegisterScreen} />
        <MainStack.Screen name="MacroScreen" component={MacroScreen} />
        <MainStack.Screen name="LoginScreen" component={LoginScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

function Navigations() {
  const { userInfo } = AuthSelect();

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("userInfo");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [userInfo]);

  return userInfo.token ? <TabNavigation /> : <Screens />;
}

const Navigation = () => {
  return (
    <AuthProvider>
      <Navigations />
    </AuthProvider>
  );
};

export default Navigation;
