import React, {
  ComponentType,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  ParamListBase,
  StackNavigationState,
  TypedNavigator,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
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
  AddExerciseScreen,
  EditProgressScreen,
} from "../screens";

import AuthSelect, { AuthProvider } from "../providers/auth";

import Entypo from "@expo/vector-icons/Entypo";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ImageSourcePropType } from "react-native";
import { NativeStackNavigatorProps } from "@react-navigation/native-stack/lib/typescript/src/types";

const TabNavigation = () => {
  const Stack: TypedNavigator<
    ParamListBase,
    StackNavigationState<ParamListBase>,
    NativeStackNavigationOptions,
    NativeStackNavigationEventMap,
    ({
      id,
      initialRouteName,
      children,
      screenListeners,
      screenOptions,
      ...rest
    }: NativeStackNavigatorProps) => JSX.Element
  > = createNativeStackNavigator<ParamListBase>();

  const DailyEntryScreenNavigator: ComponentType<{
    route: any;
    jumpTo: (key: string) => void;
  }> = ({ route, jumpTo }) => {
    return (
      <Stack.Navigator initialRouteName="DailyEntryScreen">
        <Stack.Screen
          name="DailyEntryScreen"
          component={DailyEntryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddExerciseScreen"
          component={AddExerciseScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProgressScreen"
          component={EditProgressScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  const [index, setIndex] = useState<number>(0);
  const [routes] = useState<
    { key: string; title: string; focusedIcon: ImageSourcePropType }[]
  >([
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
    },
  ]);

  const renderScene: ({
    route,
    jumpTo,
  }: {
    route: any;
    jumpTo: (key: string) => void;
  }) => JSX.Element = BottomNavigation.SceneMap({
    home: HomeScreen,
    progress: ProgressScreen,
    daily_entry: DailyEntryScreenNavigator,
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
  AddExerciseScreen: undefined;
};
const MainStack: TypedNavigator<
  MainStackParamList,
  StackNavigationState<ParamListBase>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap,
  ({
    id,
    initialRouteName,
    children,
    screenListeners,
    screenOptions,
    ...rest
  }: NativeStackNavigatorProps) => JSX.Element
> = createNativeStackNavigator<MainStackParamList>();

function Screens() {
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

function Navigations() {
  const { userInfo } = AuthSelect();

  useEffect(() => {
    const getData: () => Promise<void> = async () => {
      try {
        const jsonValue: string | null = await AsyncStorage.getItem("userInfo");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [userInfo]);

  return userInfo.token ? <TabNavigation /> : <Screens />;
}

const Navigation: FC = () => {
  return (
    <AuthProvider>
      <Navigations />
    </AuthProvider>
  );
};

export default Navigation;
