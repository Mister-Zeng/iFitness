import React, { FC, useMemo, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, Image } from "react-native";
import createStyles, { StyleSheetProps } from "./styles";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CancelButton from "../CancelButton";
import ConfirmButton from "../ConfirmButton";
import {
  ARROW_DOWN_ICON,
  ARROW_UP_ICON,
  EXPAND_LEFT_ICON,
  EXPAND_RIGHT_ICON,
} from "../../assets";
import { RFValue } from "react-native-responsive-fontsize";

const DatePickers: ({
  retrieveDateHandler,
}: {
  retrieveDateHandler: (date: Date) => void;
}) => JSX.Element = ({
  retrieveDateHandler,
}: {
  retrieveDateHandler: (date: Date) => void;
}) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const [dateSelected, setDateSelected] = useState(new Date().toDateString());

  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);

  const showDatePicker: () => void = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker: () => void = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm: (date: Date) => void = (date: Date) => {
    setDateSelected(date.toDateString());
    console.warn("A date has been picked: ", date);

    // Send selected date to parent component to be used in DailyEntryScreen
    retrieveDateHandler(date);
    hideDatePicker();
  };

  const Header: FC = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Select Date</Text>
      </View>
    );
  };

  const ModalHeader: FC = () => {
    const isToday: () => string = () => {
      const todaysDate: string = new Date().toDateString();

      if (dateSelected === todaysDate) {
        return "Today";
      } else {
        return dateSelected;
      }
    };

    return (
      <TouchableOpacity
        style={styles.dateTimePickerButtom}
        onPress={showDatePicker}
      >
        <Image source={EXPAND_LEFT_ICON} />
        <Text
          style={{
            color: "white",
            fontSize: RFValue(14),
            marginLeft: RFValue(5),
          }}
        >
          {isToday()}
        </Text>
        {isDatePickerVisible ? (
          <Image source={ARROW_UP_ICON} />
        ) : (
          <Image source={ARROW_DOWN_ICON} />
        )}
        <Image source={EXPAND_RIGHT_ICON} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <ModalHeader />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        pickerContainerStyleIOS={styles.pickerContainerStyleIOS}
        customConfirmButtonIOS={ConfirmButton}
        customCancelButtonIOS={CancelButton}
        customHeaderIOS={Header}
      />
    </View>
  );
};

export default DatePickers;
