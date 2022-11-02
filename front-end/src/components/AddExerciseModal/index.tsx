import React, { FC, useMemo, useState } from "react";
import {
  Text,
  GestureResponderEvent,
  TouchableOpacity,
  TextInput,
  View,
  Alert,
} from "react-native";
import createStyles, { StyleSheetProps } from "./styles";
import { Modal, Portal, Provider } from "react-native-paper";
import AddButton from "../AddButton";
import { ExerciseType } from "../../models";

type IProps = {
  addExerciseModalVisible: boolean;
  hideModal: () => void;
  retrieveAddedExercise: (exercise: ExerciseType) => void;
};

const AddExerciseModal: FC<IProps> = ({
  addExerciseModalVisible,
  hideModal,
  retrieveAddedExercise,
}: IProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const [exerciseInfo, setExerciseInfo] = useState({
    name: "",
    sets: 0,
    reps: 0,
    weight: 0,
  });

  const onSubmit: () => void = async () => {
    if (
      exerciseInfo.name.trim().length < 1 ||
      exerciseInfo.sets.toString().trim().length < 1 ||
      exerciseInfo.reps.toString().trim().length < 1 ||
      exerciseInfo.weight.toString().trim().length < 1
    ) {
      Alert.alert("Alert", "Please enter all required value");
      return;
    }
    retrieveAddedExercise(exerciseInfo);
    hideModal();
  };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={addExerciseModalVisible}
          onDismiss={hideModal}
          contentContainerStyle={styles.addExerciseModal}
          style={styles.modalContainer}
        >
          <View style={styles.exerciseTitleContainer}>
            <Text style={styles.exerciseInputTitle}>
              Enter Your Exercise Information
            </Text>
          </View>

          <View style={styles.exerciseInputContainer}>
            <Text style={styles.title}>Type</Text>
            <TextInput
              style={styles.textInput}
              placeholder={"Required"}
              placeholderTextColor={"darkgray"}
              // onChangeText={(text) =>
              //   setExerciseInfo({ ...exerciseInfo, name: text })
              // }
            />
          </View>
          <View style={styles.exerciseInputContainer}>
            <Text style={styles.title}>Weight</Text>
            <TextInput
              style={styles.textInput}
              placeholder={"Required"}
              placeholderTextColor={"darkgray"}
              onChangeText={(text) =>
                setExerciseInfo({ ...exerciseInfo, name: text })
              }
            />
          </View>
          <View style={styles.exerciseInputContainer}>
            <Text style={styles.title}>Sets</Text>
            <TextInput
              style={styles.textInput}
              placeholder={"Required"}
              placeholderTextColor={"darkgray"}
              onChangeText={(text) =>
                setExerciseInfo({ ...exerciseInfo, name: text })
              }
            />
          </View>
          <View style={styles.exerciseInputContainer}>
            <Text style={styles.title}>Reps</Text>
            <TextInput
              style={styles.textInput}
              placeholder={"Required"}
              placeholderTextColor={"darkgray"}
              onChangeText={(text) =>
                setExerciseInfo({ ...exerciseInfo, name: text })
              }
            />
          </View>

          <View style={styles.saveButton}>
            <AddButton buttonText={"Add Exercise"} onPress={onSubmit} />
          </View>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default AddExerciseModal;
