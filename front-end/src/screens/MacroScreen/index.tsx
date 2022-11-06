import React, { FC, useMemo } from "react";
import { ImageBackground, Alert, Text, View, SafeAreaView } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles, { StyleSheetProps } from "./styles";
import { MACRO_BACKGROUND, MACROS_ICON } from "../../assets";
import RegisterTextInput from "../../ui/RegisterTextInput";
import RegisterLoginText from "../../ui/RegisterLoginText";
import InitialScreenButton from "../../components/InitialScreenButton";
import { MacrosGoalType, RegisterType } from "../../models";
import { Appbar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Spinner from "react-native-loading-spinner-overlay/lib";
import useAuthSelect from "../../providers/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const MacroScreen: FC<IProps> = ({ navigation }) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const { register, isLoading } = useAuthSelect();

  const [macrosGoalInfo, setMacrosGoalInfo] = React.useState<MacrosGoalType>({
    id: null,
    calories: null,
    protein: null,
    carbs: null,
    fat: null,
  });

  const handleRegister: () => void = async () => {
    const jsonValue: string | null = await AsyncStorage.getItem("userInfo");
    const value: RegisterType = JSON.parse(jsonValue as string);

    if (
      macrosGoalInfo.calories === null ||
      isNaN(macrosGoalInfo.calories) ||
      macrosGoalInfo.fat === null ||
      isNaN(macrosGoalInfo.fat) ||
      macrosGoalInfo.protein === null ||
      isNaN(macrosGoalInfo.protein) ||
      macrosGoalInfo.carbs === null ||
      isNaN(macrosGoalInfo.carbs) ||
      macrosGoalInfo === null
    ) {
      Alert.alert("Alert", "Please enter value in number format");
    } else {
      const status: string | undefined = await register({
        ...value,
        macrosGoal: macrosGoalInfo,
      });

      if (status === "success") {
        Alert.alert(
          "Success",
          "You have successfully registered. Please login."
        );
        navigation.navigate("LoginScreen");
      }
    }
  };

  return (
    <View style={styles.body}>
      <Spinner visible={isLoading} />
      <ImageBackground source={MACRO_BACKGROUND} style={styles.background}>
        <View style={{ width: "100%" }}>
          <Appbar.Header style={{ backgroundColor: "transparent" }}>
            <Appbar.BackAction
              onPress={() => navigation.navigate("RegisterScreen")}
            />
          </Appbar.Header>
        </View>

        <View style={styles.footer}>
          <Text style={styles.title}>What Is Your Macro Goal?</Text>

          <KeyboardAwareScrollView
            contentContainerStyle={styles.inputContainer}
          >
            <RegisterTextInput
              title={"Enter Calories"}
              icon={MACROS_ICON}
              onChangeText={(text) =>
                setMacrosGoalInfo({
                  ...macrosGoalInfo,
                  calories: parseInt(text),
                })
              }
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
            />
            <RegisterTextInput
              title={"Enter Fat"}
              icon={MACROS_ICON}
              onChangeText={(text) =>
                setMacrosGoalInfo({ ...macrosGoalInfo, fat: parseInt(text) })
              }
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
            />
            <RegisterTextInput
              title={"Enter Protein"}
              icon={MACROS_ICON}
              onChangeText={(text) =>
                setMacrosGoalInfo({
                  ...macrosGoalInfo,
                  protein: parseInt(text),
                })
              }
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
            />
            <RegisterTextInput
              title={"Enter Carbs"}
              icon={MACROS_ICON}
              onChangeText={(text) =>
                setMacrosGoalInfo({ ...macrosGoalInfo, carbs: parseInt(text) })
              }
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
            />
          </KeyboardAwareScrollView>
          <InitialScreenButton
            title="Register"
            disabled={false}
            onPress={handleRegister}
          />

          <View style={styles.footerLink}>
            <RegisterLoginText
              title={"Have an account? "}
              link={"Login Now"}
              onPress={() => navigation.navigate("LoginScreen")}
              disabled={false}
            />

            <RegisterLoginText
              title={"By signing up, you agree with our "}
              link={"Terms & Conditions"}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MacroScreen;
