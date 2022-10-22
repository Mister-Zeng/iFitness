import React, { FC, useMemo } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from "./styles";
import { LOGIN_BACKGROUND, USER_ICON, VIEW_ICON } from "../../assets";
import InitialScreenButton from "../../components/InitialScreenButton";
import RegisterTextInput from "../../ui/RegisterTextInput";
import RegisterLoginText from "../../ui/RegisterLoginText";
import { LoginType } from "../../models";
import { Auth } from "../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const LoginScreen: FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);

  const [loginInfo, setLoginInfo] = React.useState<LoginType>({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    Auth.login(loginInfo)
      .then((data) => {
        console.log(data);
        AsyncStorage.setItem("userInfo", JSON.stringify(data));
        navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        console.log(error);
      });
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
            />
          </View>

          <InitialScreenButton
            title="Login"
            disabled={false}
            onPress={handleSubmit}
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
