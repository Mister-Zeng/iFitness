import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

export interface StyleSheetProps {
  header: ViewStyle;
  body: ViewStyle;
  profilePicture: ViewStyle;
  infoTitle: TextStyle;
  saveButtonContainer: ViewStyle;
  inputContainer: ViewStyle;
  infoType: TextStyle;
  input: TextStyle;
  userInfoContainer: ViewStyle;
  macroInfoContainer: ViewStyle;
  measurement: TextStyle;
  macroinput: TextStyle;
  macroInfoType: TextStyle;
}

const createStyles: () => StyleSheetProps = () =>
  StyleSheet.create<StyleSheetProps>({
    header: {
      backgroundColor: Colors.GREY,
    },
    body: {
      backgroundColor: Colors.BLACK,
      height: "100%",
    },
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
      marginBottom: RFValue(5),
    },
    saveButtonContainer: {
      marginTop: RFValue(20),
    },
    inputContainer: {
      marginVertical: RFValue(15),
    },
    infoType: {
      fontSize: RFValue(12),
      color: Colors.ORANGE,
    },
    macroInfoType: {
      fontSize: RFValue(12),
      color: Colors.ORANGE,
      width: RFValue(130),
    },
    input: {
      height: RFValue(20),
      margin: RFValue(5),
      fontSize: RFValue(12),
      color: Colors.WHITE,
    },
    macroinput: {
      height: RFValue(20),
      margin: RFValue(5),
      fontSize: RFValue(12),
      width: RFValue(110),
      color: Colors.WHITE,
    },
    userInfoContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: RFValue(30),
      justifyContent: "space-between",
    },
    macroInfoContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: RFValue(30),
    },
    measurement: {
      fontSize: RFValue(12),
      color: Colors.ORANGE,
      width: RFValue(60),
    },
  });

export default createStyles;
