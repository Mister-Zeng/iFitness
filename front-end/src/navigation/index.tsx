import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import { HOME_ICON, PROGRESS_ICON, ENTRY_ICON, PROFILE_ICON } from "../assets";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  InitialScreen,
  RegisterScreen,
  LoginScreen,
  HomeScreen,
  DailyEntryScreen,
  ProgressScreen,
  ProfileScreen,
  MacroScreen,
  AddExerciseScreen,
  EditProgressScreen,
  EditProfileScreen,
} from "../screens";

import AuthSelect from "../providers/auth";

export type MainStackParamList = {
  InitialScreen: undefined;
  RegisterScreen: undefined;
  MacroScreen: undefined;
  LoginScreen: undefined;
  HomeScreen: undefined;
  DailyEntryScreen: undefined;
  ProgressScreen: undefined;
  EditProfileScreen: undefined;
  ProfileScreen: undefined;
  AddExerciseScreen: undefined;
  EditProgressScreen: undefined;
};

const Navigation = () => {
  const { userInfo } = AuthSelect();

  const Tab = createMaterialBottomTabNavigator();

  const MainStack = createNativeStackNavigator<MainStackParamList>();

  function InitialScreens() {
    return (
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
    );
  }

  const TabNavigation: FC = () => {
    // Different Screen Navigator
    const DailyEntryScreenNavigator: FC = () => {
      return (
        <MainStack.Navigator
          initialRouteName="DailyEntryScreen"
          screenOptions={{ headerShown: false }}
        >
          <MainStack.Screen
            name="DailyEntryScreen"
            component={DailyEntryScreen}
          />
          <MainStack.Screen
            name="AddExerciseScreen"
            component={AddExerciseScreen}
          />
          <MainStack.Screen
            name="EditProgressScreen"
            component={EditProgressScreen}
          />
        </MainStack.Navigator>
      );
    };

    const ProfileScreenNavigator: FC = () => {
      return (
        <MainStack.Navigator
          initialRouteName="ProfileScreen"
          screenOptions={{ headerShown: false }}
        >
          <MainStack.Screen name="ProfileScreen" component={ProfileScreen} />
          <MainStack.Screen
            name="EditProfileScreen"
            component={EditProfileScreen}
          />
        </MainStack.Navigator>
      );
    };
    const HomeScreenNavigator: FC = () => {
      return (
        <MainStack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{ headerShown: false }}
        >
          <MainStack.Screen name="HomeScreen" component={HomeScreen} />
        </MainStack.Navigator>
      );
    };

    const ProgressScreenNavigator: FC = () => {
      return (
        <MainStack.Navigator
          initialRouteName="ProgressScreen"
          screenOptions={{ headerShown: false }}
        >
          <MainStack.Screen name="ProgressScreen" component={ProgressScreen} />
        </MainStack.Navigator>
      );
    };

    return (
      <Tab.Navigator
        inactiveColor="#EBB03F"
        activeColor="#EBB03F"
        initialRouteName="Home"
        shifting={true}
        sceneAnimationEnabled={false}
        barStyle={{ backgroundColor: "#6A6A6A" }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreenNavigator}
          options={{
            tabBarIcon: () => <Image source={HOME_ICON} />,
          }}
        />
        <Tab.Screen
          name="Progress"
          component={ProgressScreenNavigator}
          options={{
            tabBarIcon: () => <Image source={PROGRESS_ICON} />,
          }}
        />
        <Tab.Screen
          name="Entry"
          component={DailyEntryScreenNavigator}
          options={{
            tabBarIcon: () => <Image source={ENTRY_ICON} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreenNavigator}
          options={{
            tabBarIcon: () => <Image source={PROFILE_ICON} />,
          }}
        />
      </Tab.Navigator>
    );
  };

  return userInfo.token ? <TabNavigation /> : <InitialScreens />;
};

export default Navigation;
