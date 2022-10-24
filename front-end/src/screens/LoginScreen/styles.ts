import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

export interface StyleSheetProps {
  body: ViewStyle;
  background: ImageStyle;
  text: TextStyle;
  inputContainer: ViewStyle;
  footer: ViewStyle;
  forgotPasswordBtn: ViewStyle;
  forgotPasswordBtnText: TextStyle;
}

const createStyles: () => StyleSheetProps = () =>
  StyleSheet.create<StyleSheetProps>({
    body: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    background: {
      width: "100%",
      height: "100%",
      alignItems: "center",
    },
    text: {
      fontSize: RFValue(25),
      fontWeight: "300",
      color: Colors.WHITE,
    },
    inputContainer: {
      marginBottom: RFValue(25),
    },
    footer: {
      position: "absolute",
      bottom: RFValue(74),
      width: "100%",
      alignItems: "center",
    },
    forgotPasswordBtn: {
      alignSelf: "flex-end",
      paddingRight: RFValue(40),
    },
    forgotPasswordBtnText: {
      color: Colors.WHITE,
      fontSize: RFValue(12),
      fontWeight: "bold",
      padding: RFValue(10),
    },
  });

export default createStyles;
