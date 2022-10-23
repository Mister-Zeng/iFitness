import React from "react";
import { TouchableOpacity, Image, GestureResponderEvent } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { CONFIRM_ICON } from "../../assets";

type IProps = {
  onPress: (event: GestureResponderEvent) => void;
};

const ConfirmButton = ({ onPress }: IProps) => {
  return (
    <TouchableOpacity
      style={{
        bottom: RFValue(197),
        left: RFValue(315),
        width: RFValue(25),
        height: RFValue(25),
      }}
      onPress={onPress}
    >
      <Image source={CONFIRM_ICON} />
    </TouchableOpacity>
  );
};

export default ConfirmButton;
