import React, { FC, useMemo, useState } from "react";

import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles, { StyleSheetProps } from "./styles";
import ModalDropdown from "react-native-modal-dropdown";
import { Appbar } from "react-native-paper";
import { Text, View, ScrollView } from "react-native";
import useExerciseSelect from "../../providers/exerciseSuggestion";
import AddButton from "../../components/AddButton/index";
import {
  typeList,
  muscleList,
  difficultyList,
} from "../../constants/exerciseSelection";
import {
  ExerciseInfoType,
  ExerciseResponseType,
} from "../../types/exerciseSuggestion";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const ProgressScreen: FC<IProps> = ({ navigation }: IProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const { getExercise, ExerciseInfo } = useExerciseSelect();

  const [exerciseInfo, setExerciseInfo] = useState<ExerciseInfoType>({
    type: "",
    muscle: "",
    difficulty: "",
  });

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title={"Exercises"} />
      </Appbar.Header>

      <View style={styles.dropdownContainer}>
        <Text style={styles.heading}>Looking For Exercises?</Text>

        <View style={styles.selectContainer}>
          <Text style={styles.title}>Type</Text>
          <ModalDropdown
            options={typeList}
            onSelect={(index, value) =>
              setExerciseInfo({ ...exerciseInfo, type: value })
            }
            style={styles.dropdownBoxStyle}
            dropdownStyle={styles.dropdownStyle}
            dropdownTextStyle={styles.dropdownTextStyle}
            textStyle={styles.dropdownTextStyle}
            animated={true}
          />
        </View>

        <View style={styles.selectContainer}>
          <Text style={styles.title}>Muscle Target</Text>
          <ModalDropdown
            options={muscleList}
            onSelect={(index, value) =>
              setExerciseInfo({ ...exerciseInfo, muscle: value })
            }
            style={styles.dropdownBoxStyle}
            dropdownStyle={styles.dropdownStyle}
            dropdownTextStyle={styles.dropdownTextStyle}
            textStyle={styles.dropdownTextStyle}
            animated={true}
          />
        </View>

        <View style={styles.selectContainer}>
          <Text style={styles.title}>Difficulty</Text>
          <ModalDropdown
            options={difficultyList}
            onSelect={(index, value) =>
              setExerciseInfo({ ...exerciseInfo, difficulty: value })
            }
            style={styles.dropdownBoxStyle}
            dropdownStyle={styles.dropdownStyle}
            dropdownTextStyle={styles.dropdownTextStyle}
            textStyle={styles.dropdownTextStyle}
            animated={true}
          />
        </View>
        <Text style={styles.subHeading}>
          Select At Least One To Search Exercises
        </Text>
        <View style={styles.searchButtonContainer}>
          <AddButton
            buttonText={"Search"}
            onPress={() => getExercise(exerciseInfo)}
          />
        </View>
      </View>
      <ScrollView style={styles.scroll}>
        <View>
          {ExerciseInfo.map((exercise: ExerciseResponseType, index: number) => {
            return (
              <View key={index} style={styles.exerciseContainer}>
                <View style={styles.groupContainer}>
                  <Text style={styles.exerciseTitle}>Exercise Name:</Text>
                  <Text style={styles.response}>{exercise.name}</Text>
                </View>
                <View style={styles.groupContainer}>
                  <Text style={styles.exerciseTitle}>Exercise Type:</Text>
                  <Text style={styles.response}>{exercise.type}</Text>
                </View>
                <View style={styles.groupContainer}>
                  <Text style={styles.exerciseTitle}>Muscle Target:</Text>
                  <Text style={styles.response}>{exercise.muscle}</Text>
                </View>
                <View style={styles.groupContainer}>
                  <Text style={styles.exerciseTitle}>Equiment:</Text>
                  <Text style={styles.response}>{exercise.equipment}</Text>
                </View>
                <View style={styles.groupContainer}>
                  <Text style={styles.exerciseTitle}>Difficulty:</Text>
                  <Text style={styles.response}>{exercise.difficulty}</Text>
                </View>

                <Text style={styles.exerciseTitle}>Instructions: </Text>
                <Text style={styles.instruction}>{exercise.instructions}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProgressScreen;
