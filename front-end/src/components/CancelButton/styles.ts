import { StyleSheet, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export interface StyleSheetProps {
  button: ViewStyle;
}

const createStyles: () => StyleSheetProps = () =>
  StyleSheet.create<StyleSheetProps>({
    button: {
      bottom: RFValue(155),
      width: RFValue(25),
      height: RFValue(25),
    },
  });

export default createStyles;
