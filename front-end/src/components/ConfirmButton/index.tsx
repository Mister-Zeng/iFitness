import React, { FC, useMemo } from "react";
import { TouchableOpacity, Image, GestureResponderEvent } from "react-native";
import { CustomCancelButtonPropTypes } from "react-native-modal-datetime-picker";
import createStyles, { StyleSheetProps } from "./styles";
import { CONFIRM_ICON } from "../../assets";

type IProps = {
  onPress: (event: GestureResponderEvent) => void;
};

const ConfirmButton: FC<CustomCancelButtonPropTypes> = ({
  onPress,
}: IProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={CONFIRM_ICON} />
    </TouchableOpacity>
  );
};

export default ConfirmButton;
