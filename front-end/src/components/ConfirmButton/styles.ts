import { StyleSheet, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export interface StyleSheetProps {
  button: ViewStyle;
}

const createStyles: () => StyleSheetProps = () =>
  StyleSheet.create<StyleSheetProps>({
    button: {
      left: RFValue(315),
      bottom: RFValue(198),
      width: RFValue(25),
      height: RFValue(25),
    },
  });

export default createStyles;
