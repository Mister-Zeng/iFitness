import React, { FC, useMemo } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from "./styles";
import { INITIAL_BACKGROUND } from "../../assets";
import InitialScreenButton from "../../components/InitialScreenButton";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const InitialScreen: FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <ImageBackground source={INITIAL_BACKGROUND} style={styles.background}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>I'M TIRED</Text>
          <Text style={styles.text}>IT'S TOO COLD</Text>
          <Text style={styles.text}>IT'S RAINING</Text>
          <Text style={styles.text}>IT'S TOO LATE</Text>
          <Text style={styles.text2}>LET'S GO</Text>
        </View>
        <View style={styles.footer}>
          <InitialScreenButton
            title="Get Started"
            disabled={false}
            onPress={() => navigation.navigate("LoginScreen")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default InitialScreen;
