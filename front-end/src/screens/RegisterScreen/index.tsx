import React, { FC, useMemo } from "react";
import { ImageBackground, Alert, Text, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from "./styles";
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

import AuthSelect from "../../providers/auth";
interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const RegisterScreen: FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);

  const { register } = AuthSelect();

  const [registerInfo, setRegisterInfo] = React.useState<RegisterType>({
    first_name: "",
    last_name: "",
    username: "",
    email_address: "",
    password: "",
  });

  const handleRegister = async () => {
    // register(registerInfo);
    // Alert.alert("Success", "You have successfully registered. Please login.");
    navigation.navigate("MacroScreen");
  };

  return (
    <View style={styles.body}>
      <ImageBackground source={REGISTER_BACKGROUND} style={styles.background}>
        <View style={styles.footer}>
          <Text style={styles.title}>Add Your Details Below To Sign Up</Text>

          <View style={styles.inputContainer}>
            <RegisterTextInput
              title={"Enter First Name"}
              icon={USER_CIRCLE_ICON}
              value={registerInfo.first_name}
              onChangeText={(text) =>
                setRegisterInfo({ ...registerInfo, first_name: text })
              }
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={true}
            />
            <RegisterTextInput
              title={"Enter Last Name"}
              icon={USER_CIRCLE_ICON}
              value={registerInfo.last_name}
              onChangeText={(text) =>
                setRegisterInfo({ ...registerInfo, last_name: text })
              }
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={true}
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
              autoFocus={true}
            />
            <RegisterTextInput
              title={"Enter Email Address"}
              icon={MESSAGE_ICON}
              value={registerInfo.email_address}
              onChangeText={(text) =>
                setRegisterInfo({ ...registerInfo, email_address: text })
              }
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={true}
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
              autoFocus={true}
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
    </View>
  );
};

export default RegisterScreen;
