import { Dimensions, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export interface StyleSheetProps {
  headerContainer: ViewStyle;
  headerText: TextStyle;
  pickerContainerStyleIOS: ViewStyle;
  dateTimePickerButtom: ViewStyle;
  todayHeaderText: TextStyle;
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
    dateTimePickerButtom: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: RFValue(5),
    },
    todayHeaderText: {
      color: "white",
      fontSize: RFValue(14),
      marginLeft: RFValue(5),
    },
  });

export default createStyles;
