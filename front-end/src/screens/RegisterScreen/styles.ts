import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

export interface StyleSheetProps {
  body: ViewStyle;
  background: ImageStyle;
  title: TextStyle;
  inputContainer: ViewStyle;
  text: TextStyle;
  container: ViewStyle;
  footerLink: TextStyle;
  buttonContainer: ViewStyle;
}

const createStyles: () => StyleSheetProps = () =>
  StyleSheet.create<StyleSheetProps>({
    body: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Colors.BLACK,
    },
    background: {
      width: "100%",
      height: "100%",
      alignItems: "center",
    },
    title: {
      color: Colors.WHITE,
      fontWeight: "bold",
      fontSize: RFValue(18),
    },
    inputContainer: {
      marginTop: RFValue(60),
      height: RFValue(300),
      justifyContent: "center",
    },
    text: {
      fontSize: RFValue(25),
      fontWeight: "300",
      color: Colors.BLACK,
    },
    buttonContainer: {
      marginTop: RFValue(20),
    },
    container: {
      marginTop: RFValue(240),
      alignItems: "center",
    },
    footerLink: {
      marginTop: RFValue(20),
      alignItems: "center",
    },
  });

export default createStyles;
