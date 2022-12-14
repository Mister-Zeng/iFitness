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
  inputIconContainer: ViewStyle;
  measurement: TextStyle;
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
    infoType: {
      fontSize: RFValue(12),
      color: Colors.ORANGE,
    },
    input: {
      height: RFValue(20),
      margin: RFValue(5),
      borderBottomWidth: 1,
      borderBottomColor: Colors.GREY,
      width: RFValue(200),
      fontSize: RFValue(12),
      color: Colors.WHITE,
      textAlign: "right",
    },
    inputIconContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: RFValue(30),
      justifyContent: "space-between",
    },
    measurement: {
      fontSize: RFValue(12),
      color: Colors.ORANGE,
    },
  });

export default createStyles;
