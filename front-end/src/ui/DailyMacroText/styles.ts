import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

export interface StyleSheetProps {
  inputIconContainer: ViewStyle;
  infoType: TextStyle;
  valueType: TextStyle;
  measurement: TextStyle;
}

const createStyles: () => StyleSheetProps = () =>
  StyleSheet.create<StyleSheetProps>({
    inputIconContainer: {
      flexDirection: "row",
      alignContent: "space-around",
      paddingHorizontal: RFValue(30),
      justifyContent: "space-between",
      height: RFValue(30),
    },
    infoType: {
      fontSize: RFValue(12),
      color: Colors.ORANGE,
    },
    valueType: {
      fontSize: RFValue(12),
      color: Colors.WHITE,
      right: RFValue(130),
    },
    measurement: {
      fontSize: RFValue(12),
      color: Colors.ORANGE,
      position: "absolute",
      right: RFValue(30),
    },
  });

export default createStyles;
