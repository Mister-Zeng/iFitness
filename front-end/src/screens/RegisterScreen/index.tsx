import React, { FC, useMemo, useState } from "react";
import { ImageBackground, Alert, Text, View, SafeAreaView } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles, { StyleSheetProps } from "./styles";
import {
  REGISTER_BACKGROUND,
  USER_ICON,
  VIEW_ICON,
  USER_CIRCLE_ICON,
  MESSAGE_ICON,
} from "../../assets";
import RegisterTextInput from "../../ui/RegisterTextInput";
import RegisterLoginText from "../../ui/RegisterLoginText";
import InitialScreenButton from "../../components/InitialScreenButton";
import { RegisterType } from "../../models";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Spinner from "react-native-loading-spinner-overlay/lib";
import useAuthSelect from "../../providers/auth";
interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const RegisterScreen: FC<IProps> = ({ navigation }) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const { isLoading } = useAuthSelect();

  const [registerInfo, setRegisterInfo] = useState<RegisterType>({
    firstName: "",
    lastName: "",
    username: "",
    emailAddress: "",
    password: "",
    macrosGoal: { id: 0, calories: 0, protein: 0, carbs: 0, fat: 0 },
  });

  const handleRegister: () => void = () => {
    let emailReg: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (
      registerInfo.firstName.trim().length < 1 ||
      registerInfo.lastName.trim().length < 1 ||
      registerInfo.username.trim().length < 1 ||
      registerInfo.emailAddress.trim().length < 1 ||
      registerInfo.password.trim().length < 1
    ) {
      Alert.alert("Alert", "Please enter all required value");
    } else if (emailReg.test(registerInfo.emailAddress) === false) {
      Alert.alert("Alert", "Please enter valid email address");
    } else {
      AsyncStorage.setItem("userInfo", JSON.stringify(registerInfo));

      navigation.navigate("MacroScreen");
    }
  };

  return (
    <SafeAreaView style={styles.body}>
      <Spinner visible={isLoading} />

      <ImageBackground source={REGISTER_BACKGROUND} style={styles.background}>
        <View style={styles.footer}>
          <Text style={styles.title}>Add Your Details Below To Sign Up</Text>

          <View style={styles.inputContainer}>
            <RegisterTextInput
              title={"Enter First Name"}
              icon={USER_CIRCLE_ICON}
              value={registerInfo.firstName}
              onChangeText={(text) =>
                setRegisterInfo({ ...registerInfo, firstName: text })
              }
              autoCapitalize="none"
              autoCorrect={false}
            />
            <RegisterTextInput
              title={"Enter Last Name"}
              icon={USER_CIRCLE_ICON}
              value={registerInfo.lastName}
              onChangeText={(text) =>
                setRegisterInfo({ ...registerInfo, lastName: text })
              }
              autoCapitalize="none"
              autoCorrect={false}
            />
            <RegisterTextInput
              title={"Enter Username"}
              icon={USER_ICON}
              value={registerInfo.username}
              onChangeText={(text) =>
                setRegisterInfo({ ...registerInfo, username: text })
              }
              autoCapitalize="none"
              autoCorrect={false}
            />
            <RegisterTextInput
              title={"Enter Email Address"}
              icon={MESSAGE_ICON}
              value={registerInfo.emailAddress}
              onChangeText={(text) =>
                setRegisterInfo({ ...registerInfo, emailAddress: text })
              }
              autoCapitalize="none"
              autoCorrect={false}
            />
            <RegisterTextInput
              title={"Enter Password"}
              icon={VIEW_ICON}
              value={registerInfo.password}
              onChangeText={(text) =>
                setRegisterInfo({ ...registerInfo, password: text })
              }
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
            />
          </View>
          <InitialScreenButton
            title="Continue"
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
    </SafeAreaView>
  );
};

export default RegisterScreen;
