import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

export interface StyleSheetProps {
  container: ViewStyle;
  exerciseContainer: ViewStyle;
  exerciseName: TextStyle;
  exerciseInfo: ViewStyle;
  cancelButton: ViewStyle;
}

const createStyles: () => StyleSheetProps = () =>
  StyleSheet.create<StyleSheetProps>({
    container: {
      flexDirection: "row",
      paddingHorizontal: RFValue(20),
      justifyContent: "space-between",
      paddingBottom: RFValue(10),
    },
    exerciseContainer: {
      flexDirection: "column",
    },
    exerciseName: {
      color: Colors.WHITE,
      fontSize: RFValue(12),
      fontWeight: "bold",
    },
    exerciseInfo: {
      color: Colors.WHITE,
      fontSize: RFValue(10),
      fontWeight: "bold",
    },
    cancelButton: {
      width: RFValue(25),
      height: RFValue(25),
    },
  });

export default createStyles;
