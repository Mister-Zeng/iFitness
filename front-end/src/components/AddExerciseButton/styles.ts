import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

export interface StyleSheetProps {
  addExerciseText: TextStyle;
  btn: ViewStyle;
}

const createStyles: () => StyleSheetProps = () =>
  StyleSheet.create<StyleSheetProps>({
    addExerciseText: {
      color: Colors.WHITE,
    },
    btn: {
      backgroundColor: Colors.ORANGE,
      width: RFValue(80),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: RFValue(50),
      padding: RFValue(5),
    },
  });

export default createStyles;
