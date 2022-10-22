import { registerRootComponent } from "expo";
import React, { useCallback, useEffect, useState } from "react";
import { View, StatusBar } from "react-native";
import Navigation from "./navigation";
import { Provider as PaperProvider, MD2DarkTheme } from "react-native-paper";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserInfoContext } from "./providers/userInfo";
import { userInfoConstants } from "./constants/userInfo";
import Entypo from "@expo/vector-icons/Entypo";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { UserType } from "./models";

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
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  const [userInfo, setUserInfo] = useState<UserType>(userInfoConstants);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const value = await AsyncStorage.getItem("userInfo");
        if (value !== null) {
          setUserInfo(JSON.parse(value));
        } else {
          setUserInfo(null);
        }
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      {appIsReady ? (
        <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
          <PaperProvider theme={theme}>
            <StatusBar
              backgroundColor="transparent"
              barStyle="light-content"
              translucent={true}
            />
            <View style={{ flex: 1 }}>
              <Navigation />
            </View>
          </PaperProvider>
        </UserInfoContext.Provider>
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          onLayout={onLayoutRootView}
        ></View>
      )}
    </>
  );
}

export default registerRootComponent(App);
