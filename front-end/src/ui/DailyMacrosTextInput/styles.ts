import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

export interface StyleSheetProps {
  infoType: TextStyle;
  input: ViewStyle;
  inputIconContainer: ViewStyle;
  measurement: TextStyle;
}

const createStyles: () => StyleSheetProps = () =>
  StyleSheet.create<StyleSheetProps>({
    infoType: {
      fontSize: RFValue(12),
      color: Colors.ORANGE,
    },
    input: {
      height: RFValue(20),
      margin: RFValue(5),
      borderBottomWidth: 1,
      borderBottomColor: Colors.GREY,
      width: RFValue(200),
      fontSize: RFValue(12),
      color: Colors.WHITE,
      textAlign: "center",
    },
    inputIconContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: RFValue(30),
      justifyContent: "space-between",
    },
    measurement: {
      fontSize: RFValue(12),
      color: Colors.ORANGE,
      position: "absolute",
      right: 45,
    },
  });

export default createStyles;
