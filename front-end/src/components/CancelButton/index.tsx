import React from "react";
import { TouchableOpacity, Image, GestureResponderEvent } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { CANCEL_ICON } from "../../assets";

type IProps = {
  onPress: (event: GestureResponderEvent) => void;
};

const CancelButton = ({ onPress }: IProps) => {
  return (
    <TouchableOpacity
      style={{ bottom: RFValue(155), width: RFValue(25), height: RFValue(25) }}
      onPress={onPress}
    >
      <Image source={CANCEL_ICON} />
    </TouchableOpacity>
  );
};

export default CancelButton;
