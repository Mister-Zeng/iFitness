import React, { FC, useMemo } from "react";
import { ImageBackground, Alert, Text, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles, { StyleSheetProps } from "./styles";
import { MACRO_BACKGROUND, MACROS_ICON } from "../../assets";
import RegisterTextInput from "../../ui/RegisterTextInput";
import RegisterLoginText from "../../ui/RegisterLoginText";
import InitialScreenButton from "../../components/InitialScreenButton";
import { MacrosType, RegisterType } from "../../models";
import { Appbar } from "react-native-paper";
import AuthSelect from "../../providers/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Spinner from "react-native-loading-spinner-overlay/lib";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const MacroScreen: FC<IProps> = ({ navigation }) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const { register, isLoading } = AuthSelect();

  const [macrosInfo, setMacrosInfo] = React.useState<MacrosType>({
    calories: null,
    protein: null,
    carbs: null,
    fat: null,
  });

  const handleRegister: () => void = async () => {
    const jsonValue: string | null = await AsyncStorage.getItem("userInfo");
    const value: RegisterType = JSON.parse(jsonValue as string);

    if (
      macrosInfo.calories === null ||
      isNaN(macrosInfo.calories) ||
      macrosInfo.fat === null ||
      isNaN(macrosInfo.fat) ||
      macrosInfo.protein === null ||
      isNaN(macrosInfo.protein) ||
      macrosInfo.carbs === null ||
      isNaN(macrosInfo.carbs) ||
      macrosInfo === null
    ) {
      Alert.alert("Alert", "Please enter value in number format");
    } else {
      const status: string | undefined = await register({
        ...value,
        macrosGoal: macrosInfo,
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

          <View style={styles.inputContainer}>
            <RegisterTextInput
              title={"Enter Calories"}
              icon={MACROS_ICON}
              onChangeText={(text) =>
                setMacrosInfo({ ...macrosInfo, calories: parseInt(text) })
              }
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              autoFocus={true}
            />
            <RegisterTextInput
              title={"Enter Fat"}
              icon={MACROS_ICON}
              onChangeText={(text) =>
                setMacrosInfo({ ...macrosInfo, fat: parseInt(text) })
              }
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              autoFocus={true}
            />
            <RegisterTextInput
              title={"Enter Protein"}
              icon={MACROS_ICON}
              onChangeText={(text) =>
                setMacrosInfo({ ...macrosInfo, protein: parseInt(text) })
              }
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              autoFocus={true}
            />
            <RegisterTextInput
              title={"Enter Carbs"}
              icon={MACROS_ICON}
              onChangeText={(text) =>
                setMacrosInfo({ ...macrosInfo, carbs: parseInt(text) })
              }
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              autoFocus={true}
            />
          </View>
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
