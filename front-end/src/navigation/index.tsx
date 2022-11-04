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
  CreateDailyEntryScreen,
  ProgressScreen,
  ProfileScreen,
  MacroScreen,
  AddExerciseScreen,
  DailyEntryScreen,
  EditProfileScreen,
  EditDailyEntryScreen,
} from "../screens";

import AuthSelect from "../providers/auth";
import { CreateDailyEntryScreenIProps } from "../screens/CreateDailyEntryScreen";
import { EditDailyEntryScreenIProps } from "../screens/EditDailyEntryScreen";

export type MainStackParamList = {
  HomeScreen: undefined;
  CreateDailyEntryScreen: CreateDailyEntryScreenIProps;
  ProgressScreen: undefined;
  EditProfileScreen: undefined;
  ProfileScreen: undefined;
  AddExerciseScreen: undefined;
  DailyEntryScreen: undefined;
  EditDailyEntryScreen: EditDailyEntryScreenIProps;
};

export type AuthStackParamList = {
  InitialScreen: undefined;
  RegisterScreen: undefined;
  MacroScreen: undefined;
  LoginScreen: undefined;
};

const Navigation = () => {
  const { userInfo } = AuthSelect();

  const Tab = createMaterialBottomTabNavigator();

  const AuthStack = createNativeStackNavigator<AuthStackParamList>();

  const MainStack = createNativeStackNavigator<MainStackParamList>();

  function InitialScreens() {
    return (
      <AuthStack.Navigator
        initialRouteName="InitialScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <AuthStack.Screen name="InitialScreen" component={InitialScreen} />
        <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
        <AuthStack.Screen name="MacroScreen" component={MacroScreen} />
        <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      </AuthStack.Navigator>
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
            name="CreateDailyEntryScreen"
            component={CreateDailyEntryScreen}
          />
          <MainStack.Screen
            name="DailyEntryScreen"
            component={DailyEntryScreen}
          />
          <MainStack.Screen
            name="AddExerciseScreen"
            component={AddExerciseScreen}
          />
          <MainStack.Screen
            name="EditDailyEntryScreen"
            component={EditDailyEntryScreen}
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
