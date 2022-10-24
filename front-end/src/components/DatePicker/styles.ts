import { Dimensions, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export interface StyleSheetProps {
  headerContainer: ViewStyle;
  headerText: TextStyle;
  pickerContainerStyleIOS: ViewStyle;
}

const createStyles: () => StyleSheetProps = () =>
  StyleSheet.create<StyleSheetProps>({
    headerContainer: {
      alignSelf: "center",
    },
    headerText: {
      color: "white",
      fontSize: RFValue(15),
      paddingTop: RFValue(8),
    },
    pickerContainerStyleIOS: {
      width: Dimensions.get("window").width,
      alignSelf: "center",
      backgroundColor: "#6A6A6A",
      top: 90,
    },
  });

export default createStyles;
