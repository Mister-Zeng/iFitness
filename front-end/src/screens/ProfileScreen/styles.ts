import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

export interface StyleSheetProps {
  profilePicture: ViewStyle;
  infoTitle: TextStyle;
  saveButtonContainer: ViewStyle;
  inputContainer: ViewStyle;
}

const createStyles: () => StyleSheetProps = () =>
  StyleSheet.create<StyleSheetProps>({
    profilePicture: {
      backgroundColor: Colors.WHITE,
      width: RFValue(65),
      height: RFValue(65),
      borderRadius: RFValue(50),
      alignSelf: "center",
      marginTop: RFValue(20),
    },
    infoTitle: {
      fontSize: RFValue(15),
      fontWeight: "bold",
      color: Colors.ORANGE,
      alignSelf: "center",
      marginTop: RFValue(20),
    },
    saveButtonContainer: {
      marginTop: RFValue(20),
    },
    inputContainer: {
      marginVertical: RFValue(15),
    },
  });

export default createStyles;
