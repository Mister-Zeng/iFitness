import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

export interface StyleSheetProps {
  body: ViewStyle;
  background: ImageStyle;
  title: TextStyle;
  inputContainer: ViewStyle;
  text: TextStyle;
  footer: ViewStyle;
  footerLink: TextStyle;
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
    title: {
      color: Colors.WHITE,
      fontWeight: "bold",
      fontSize: RFValue(18),
    },
    inputContainer: {
      paddingVertical: RFValue(20),
    },
    text: {
      fontSize: RFValue(25),
      fontWeight: "300",
      color: Colors.BLACK,
    },
    footer: {
      position: "absolute",
      bottom: RFValue(20),
      width: "100%",
      alignItems: "center",
    },
    footerLink: {
      marginTop: RFValue(20),
      alignItems: "center",
    },
  });

export default createStyles;
