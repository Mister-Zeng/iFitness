import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { CONFIRM_ICON } from "../assets";
const Buttons = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{ bottom: RFValue(30), width: RFValue(25), height: RFValue(25) }}
      onPress={onPress}
    >
      <Image source={CONFIRM_ICON} />
    </TouchableOpacity>
  );
};

export default Buttons;
