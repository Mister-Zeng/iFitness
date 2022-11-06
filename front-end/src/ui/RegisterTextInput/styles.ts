import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

export interface StyleSheetProps {
  input: ViewStyle;
  inputIconContainer: ViewStyle;
  icon: ImageStyle;
}

const createStyles: () => StyleSheetProps = () =>
  StyleSheet.create<StyleSheetProps>({
    input: {
      height: RFValue(40),
      margin: RFValue(5),
      borderBottomWidth: 4,
      borderBottomColor: Colors.GREY,
      padding: RFValue(10),
      width: RFValue(280),
      fontSize: RFValue(12),
      fontWeight: "bold",
      color: Colors.WHITE,
    },
    inputIconContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      position: "absolute",
      justifyContent: "flex-end",
      right: RFValue(30),
    },
  });

export default createStyles;
