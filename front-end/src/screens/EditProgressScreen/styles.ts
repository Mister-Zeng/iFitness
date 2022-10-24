import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

export interface StyleSheetProps {
  container: ViewStyle;
  infoTitle: TextStyle;
  infoContainer: ViewStyle;
  addExerciseBtn: ViewStyle;
}

const createStyles: () => StyleSheetProps = () =>
  StyleSheet.create<StyleSheetProps>({
    container: {
      backgroundColor: Colors.BLACK,
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
  });

export default createStyles;
