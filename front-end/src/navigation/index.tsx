import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomNavigation, Text } from "react-native-paper";

import { HOME_ICON, PROGRESS_ICON, ENTRY_ICON, PROFILE_ICON } from "../assets";

import {
  InitialScreen,
  RegisterScreen,
  LoginScreen,
  HomeScreen,
  DailyEntryScreen,
  ProgressScreen,
  ProfileScreen,
} from "../screens";

import { Colors } from "react-native/Libraries/NewAppScreen";

import { UserInfoContext } from "../providers/userInfo";

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
        <MainStack.Screen name="LoginScreen" component={LoginScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

function Navigation() {
  function NavigationContainer() {
    return (
      <UserInfoContext.Consumer>
        {({ userInfo }) => (userInfo ? <TabNavigation /> : <Screens />)}
      </UserInfoContext.Consumer>
    );
  }

  return <NavigationContainer />;
}

export default Navigation;
