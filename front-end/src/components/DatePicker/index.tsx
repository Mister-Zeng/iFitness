import React, { FC, useMemo, useState } from "react";
import {
  Button,
  Dimensions,
  SafeAreaView,
  TouchableHighlight,
  View,
} from "react-native";
import { Text } from "react-native";
import createStyles from "./styles";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Buttons from "../Button";
import { RFValue } from "react-native-responsive-fontsize";
import CancelButton from "../CancelButton";
import ConfirmButton from "../ConfirmButton";
import { Colors } from "react-native/Libraries/NewAppScreen";

const DatePickers: FC = () => {
  const styles = useMemo(() => createStyles(), []);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const Header = () => {
    return (
      <View style={{ alignSelf: "center" }}>
        <Text
          style={{
            color: "white",
            fontSize: RFValue(15),
            paddingTop: RFValue(8),
          }}
        >
          Select Date
        </Text>
      </View>
    );
  };
  return (
    <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        pickerContainerStyleIOS={{
          width: Dimensions.get("window").width,
          alignSelf: "center",
          backgroundColor: "#6A6A6A",
          top: 90,
        }}
        customConfirmButtonIOS={ConfirmButton}
        customCancelButtonIOS={CancelButton}
        customHeaderIOS={Header}
      />
    </View>
  );
};

export default DatePickers;
