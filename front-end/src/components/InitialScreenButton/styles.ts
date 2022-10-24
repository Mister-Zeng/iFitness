import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

export interface StyleSheetProps {
  button: ViewStyle;
  text: TextStyle;
}

const createStyles: () => StyleSheetProps = () =>
  StyleSheet.create<StyleSheetProps>({
    button: {
      width: "70%",
      alignSelf: "center",
      padding: RFValue(10),
      alignItems: "center",
      borderRadius: RFValue(10),
    },
    text: {
      color: Colors.WHITE,
      fontSize: RFValue(20),
      fontWeight: "bold",
    },
  });

export default createStyles;
