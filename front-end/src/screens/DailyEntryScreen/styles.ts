import { Dimensions, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

export interface StyleSheetProps {
  header: ViewStyle;
  container: ViewStyle;
  infoTitle: TextStyle;
  infoContainer: ViewStyle;
  createEntryContainer: ViewStyle;
  addExerciseBtn: ViewStyle;
  createEntryBtnText: TextStyle;
  createEntryBtn: ViewStyle;
  message: TextStyle;
}

const createStyles: () => StyleSheetProps = () =>
  StyleSheet.create<StyleSheetProps>({
    header: {
      backgroundColor: Colors.GREY,
    },
    container: {
      backgroundColor: Colors.BLACK,
      height: Dimensions.get("window").height,
    },
    infoTitle: {
      fontSize: RFValue(15),
      fontWeight: "bold",
      color: Colors.ORANGE,
      alignSelf: "center",
      marginVertical: RFValue(30),
    },
    infoContainer: {
      height: "100%",
    },
    addExerciseBtn: {
      marginLeft: RFValue(20),
      marginTop: RFValue(10),
    },
    createEntryContainer: {
      top: RFValue(200),
      alignItems: "center",
    },
    createEntryBtnText: {
      color: Colors.WHITE,
    },
    createEntryBtn: {
      backgroundColor: Colors.ORANGE,
      padding: RFValue(10),
      borderRadius: RFValue(50),
    },
    message: {
      fontSize: RFValue(15),
      color: Colors.ORANGE,
      width: RFValue(200),
      textAlign: "center",
      marginBottom: RFValue(20),
    },
  });

export default createStyles;
