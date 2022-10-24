import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

export interface StyleSheetProps {
  body: ViewStyle;
  title: TextStyle;
  formContainer: ViewStyle;
  textInput: ViewStyle;
  infoContainer: ViewStyle;
  saveButton: ViewStyle;
}

const createStyles: () => StyleSheetProps = () =>
  StyleSheet.create<StyleSheetProps>({
    body: {
      backgroundColor: Colors.BLACK,
      height: "100%",
    },
    title: {
      color: Colors.ORANGE,
      fontSize: RFValue(12),
    },
    formContainer: {
      flexDirection: "column",
      paddingHorizontal: RFValue(30),
      marginTop: RFValue(50),
    },
    textInput: {
      borderBottomWidth: 1,
      borderBottomColor: Colors.GREY,
      width: RFValue(200),
      color: Colors.WHITE,
      textAlign: "center",
    },
    infoContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: RFValue(5),
    },
    saveButton: {
      marginTop: RFValue(20),
    },
  });

export default createStyles;
