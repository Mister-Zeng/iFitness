import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

export interface StyleSheetProps {
  heading: TextStyle;
  header: ViewStyle;
  container: ViewStyle;
  dropdownTextStyle: TextStyle;
  dropdownStyle: ViewStyle;
  dropdownBoxStyle: ViewStyle;
  dropdownContainer: ViewStyle;
  selectContainer: ViewStyle;
  title: TextStyle;
  searchButtonContainer: ViewStyle;
  exerciseTitle: TextStyle;
  groupContainer: ViewStyle;
  exerciseContainer: ViewStyle;
  response: TextStyle;
  instruction: TextStyle;
  scroll: ViewStyle;
  subHeading: TextStyle;
}

const createStyles: () => StyleSheetProps = () =>
  StyleSheet.create<StyleSheetProps>({
    header: {
      backgroundColor: Colors.GREY,
    },
    container: {
      backgroundColor: Colors.BLACK,
      height: "100%",
    },
    heading: {
      color: Colors.WHITE,
      fontSize: RFValue(15),
    },
    subHeading: {
      color: Colors.GREY,
      marginTop: RFValue(10),
      marginRight: RFValue(90),
    },
    dropdownTextStyle: {
      backgroundColor: "#EFF0F6",
      color: "black",
      marginLeft: RFValue(10),
      fontSize: RFValue(12),
    },
    dropdownStyle: {
      width: RFValue(200),
      height: RFValue(120),
      backgroundColor: "#EFF0F6",
      borderRadius: RFValue(5),
    },
    dropdownBoxStyle: {
      width: RFValue(200),
      height: RFValue(25),
      backgroundColor: "#EFF0F6",
      justifyContent: "center",
      borderRadius: RFValue(5),
    },
    dropdownContainer: {
      alignItems: "center",
      marginTop: RFValue(20),
    },
    selectContainer: {
      flexDirection: "row",
      marginTop: RFValue(20),
      alignItems: "center",
    },
    title: {
      color: Colors.ORANGE,
      fontSize: RFValue(13),
      width: RFValue(100),
    },
    searchButtonContainer: {
      marginTop: RFValue(20),
    },
    exerciseContainer: {
      padding: RFValue(10),
      marginLeft: RFValue(13),
      marginTop: RFValue(10),
    },
    exerciseTitle: {
      color: Colors.ORANGE,
      fontSize: RFValue(13),
      width: RFValue(140),
      paddingVertical: RFValue(2),
    },
    groupContainer: {
      flexDirection: "row",
    },
    response: {
      color: Colors.WHITE,
      paddingVertical: RFValue(2),
      width: RFValue(140),
    },
    instruction: {
      color: Colors.WHITE,
    },
    scroll: {
      height: "100%",
    },
  });

export default createStyles;
