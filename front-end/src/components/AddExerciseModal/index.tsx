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
import uuid from "react-native-uuid";
import ExerciseInfo from "../ExerciseInfo/index";

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

  const ExerciseInfoConstant = {
    name: null,
    sets: null,
    reps: null,
    weight: null,
    id: null,
  };

  const [exerciseInfo, setExerciseInfo] =
    useState<ExerciseType>(ExerciseInfoConstant);
  console.log(exerciseInfo);
  const onSubmit: () => void = async () => {
    if (
      exerciseInfo.name === null ||
      exerciseInfo.sets === null ||
      exerciseInfo.reps === null ||
      exerciseInfo.weight === null
    ) {
      Alert.alert("Alert", "Please enter all required value");
    } else if (
      isNaN(exerciseInfo.sets) ||
      isNaN(exerciseInfo.reps) ||
      isNaN(exerciseInfo.weight)
    ) {
      Alert.alert("Alert", "Please enter valid number value");
    } else {
      retrieveAddedExercise(exerciseInfo);
      hideModal();
      setExerciseInfo(ExerciseInfoConstant);
    }
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
              onChangeText={(text) =>
                setExerciseInfo({
                  ...exerciseInfo,
                  name: text,
                  id: parseInt(uuid.v4().toString().replace(/-/g, "")),
                })
              }
            />
          </View>
          <View style={styles.exerciseInputContainer}>
            <Text style={styles.title}>Weight</Text>
            <TextInput
              style={styles.textInput}
              placeholder={"Required"}
              placeholderTextColor={"darkgray"}
              onChangeText={(text) =>
                setExerciseInfo({ ...exerciseInfo, weight: parseInt(text) })
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
                setExerciseInfo({ ...exerciseInfo, sets: parseInt(text) })
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
                setExerciseInfo({
                  ...exerciseInfo,
                  reps: parseInt(text),
                })
              }
            />
          </View>

          <View style={styles.saveButton}>
            <AddButton buttonText={"Add"} onPress={onSubmit} />
          </View>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default AddExerciseModal;
