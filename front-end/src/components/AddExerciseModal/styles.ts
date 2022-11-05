import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

export interface StyleSheetProps {
  exerciseTitleContainer: ViewStyle;
  exerciseInputTitle: TextStyle;
  addExerciseModal: ViewStyle;
  modalContainer: ViewStyle;
  exerciseInputContainer: ViewStyle;
  title: TextStyle;
  textInput: ViewStyle;
  saveButton: ViewStyle;
}

const createStyles: () => StyleSheetProps = () =>
  StyleSheet.create<StyleSheetProps>({
    exerciseTitleContainer: {
      marginBottom: RFValue(20),
    },
    exerciseInputTitle: {
      color: Colors.WHITE,
      fontSize: RFValue(15),
      textAlign: "center",
    },
    addExerciseModal: {
      backgroundColor: Colors.GREY,
      paddingHorizontal: RFValue(20),
      width: RFValue(260),
      height: RFValue(240),
      borderRadius: RFValue(10),
    },
    modalContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    exerciseInputContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: RFValue(5),
    },
    title: {
      color: Colors.ORANGE,
      fontSize: RFValue(12),
    },
    textInput: {
      borderBottomWidth: 1,
      borderBottomColor: Colors.BLACK,
      width: RFValue(150),
      color: Colors.WHITE,
      textAlign: "center",
    },
    saveButton: {
      marginTop: RFValue(20),
      alignSelf: "center",
    },
  });

export default createStyles;
