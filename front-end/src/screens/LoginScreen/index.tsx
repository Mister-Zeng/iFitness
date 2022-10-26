import React, { FC, useMemo, useState } from "react";
import {
  Alert,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles, { StyleSheetProps } from "./styles";
import { LOGIN_BACKGROUND, USER_ICON, VIEW_ICON } from "../../assets";
import InitialScreenButton from "../../components/InitialScreenButton";
import RegisterTextInput from "../../ui/RegisterTextInput";
import RegisterLoginText from "../../ui/RegisterLoginText";
import { LoginType } from "../../models";
import AuthSelect from "../../providers/auth";
import Spinner from "react-native-loading-spinner-overlay";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const LoginScreen: FC<IProps> = ({ navigation }) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const { login, isLoading } = AuthSelect();

  const [loginInfo, setLoginInfo] = useState<LoginType>({
    username: "",
    password: "",
  });

  const handleLogin: (loginInfo: LoginType) => void = async (
    loginInfo: LoginType
  ) => {
    if (
      loginInfo.username.trim().length < 1 ||
      loginInfo.password.trim().length < 1
    ) {
      Alert.alert("Alert", "Please enter all required value");
      return;
    }

    login(loginInfo);
  };
  return (
    <View style={styles.body}>
      <ImageBackground source={LOGIN_BACKGROUND} style={styles.background}>
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <RegisterTextInput
              title={"Enter Username"}
              icon={USER_ICON}
              value={loginInfo.username}
              onChangeText={(text) =>
                setLoginInfo({ ...loginInfo, username: text })
              }
              autoCapitalize="none"
              autoCorrect={false}
            />
            <RegisterTextInput
              title={"Enter Password"}
              icon={VIEW_ICON}
              value={loginInfo.password}
              onChangeText={(text) =>
                setLoginInfo({ ...loginInfo, password: text })
              }
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
            />
          </View>

          <Spinner visible={isLoading} />

          <InitialScreenButton
            title="Login"
            disabled={false}
            onPress={() => {
              handleLogin(loginInfo);
            }}
          />
          <TouchableOpacity style={styles.forgotPasswordBtn}>
            <Text style={styles.forgotPasswordBtnText}>Forgot Password?</Text>
          </TouchableOpacity>

          <RegisterLoginText
            title={"Don't have an account? "}
            link={"Register Now"}
            onPress={() => navigation.navigate("RegisterScreen")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
