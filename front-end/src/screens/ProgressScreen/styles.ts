import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

export interface StyleSheetProps {
  container: ViewStyle;
  infoContainer: ViewStyle;
  weightContainer: ViewStyle;
  graphTitle: TextStyle;
}

const createStyles: () => StyleSheetProps = () =>
  StyleSheet.create<StyleSheetProps>({
    container: {
      backgroundColor: Colors.BLACK,
      height: "100%",
    },
    infoContainer: {
      padding: RFValue(25),
    },
    weightContainer: {
      marginTop: RFValue(15),
      borderWidth: 2,
      borderColor: Colors.GREY,
      borderRadius: 5,
      padding: RFValue(15),
      alignItems: "center",
    },
    graphTitle: {
      color: Colors.WHITE,
      fontSize: RFValue(12),
      marginBottom: RFValue(10),
    },
  });

export default createStyles;
