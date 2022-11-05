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
      width: "30%",
      alignSelf: "center",
      padding: RFValue(5),
      alignItems: "center",
      borderRadius: RFValue(50),
    },
    text: {
      color: Colors.WHITE,
      fontSize: RFValue(15),
      fontWeight: "bold",
    },
  });

export default createStyles;
