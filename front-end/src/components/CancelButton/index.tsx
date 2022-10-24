import React, { FC, useMemo } from "react";
import { TouchableOpacity, Image, GestureResponderEvent } from "react-native";
import { CustomCancelButtonPropTypes } from "react-native-modal-datetime-picker";
import { CANCEL_ICON } from "../../assets";
import createStyles, { StyleSheetProps } from "./styles";

type IProps = {
  onPress: (event: GestureResponderEvent) => void;
};

const CancelButton: FC<CustomCancelButtonPropTypes> = ({ onPress }: IProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={CANCEL_ICON} />
    </TouchableOpacity>
  );
};

export default CancelButton;
