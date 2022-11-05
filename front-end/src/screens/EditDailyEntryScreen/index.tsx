import React, { FC, useMemo, useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import createStyles, { StyleSheetProps } from "./styles";
import { Appbar } from "react-native-paper";
import DailyMacrosTextInput from "../../ui/DailyMacrosTextInput";
import AddButton from "../../components/AddButton";
import ExerciseInfo from "../../components/ExerciseInfo";
import { DailyEntryType, ExerciseType } from "../../models";
import Spinner from "react-native-loading-spinner-overlay/lib";
import useDailyEntrySelect from "../../providers/dailyEntry/index";
import AddExerciseModal from "../../components/AddExerciseModal";

export interface EditDailyEntryScreenIProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<
    { params: { params: { dailyEntry: DailyEntryType } } },
    "params"
  >;
}

const EditDailyEntryScreen: FC<EditDailyEntryScreenIProps> = ({
  navigation,
  route,
}: EditDailyEntryScreenIProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const dailyEntry: DailyEntryType = route.params.params.dailyEntry;

  const { isLoading, updateDailyEntry } = useDailyEntrySelect();

  const [updateDailyEntryInfo, setUpdateDailyEntryInfo] =
    useState<DailyEntryType>(dailyEntry);

  const editDailyEntryHandler: () => void = async () => {
    await updateDailyEntry(updateDailyEntryInfo);

    Alert.alert("Success", "Daily Entry Updated");

    navigation.goBack();
  };

  const [addExerciseModalVisible, setAddExerciseModalVisible] = useState(false);
  const showModal: () => void = () => setAddExerciseModalVisible(true);
  const hideModal: () => void = () => setAddExerciseModalVisible(false);

  const retrieveAddedExercise: (exercise: ExerciseType) => void = (
    exercise: ExerciseType
  ) => {
    setUpdateDailyEntryInfo({
      ...updateDailyEntryInfo,
      exercise: [...updateDailyEntryInfo.exercise, exercise],
    });
  };
  console.log(updateDailyEntryInfo);
  const updateEExerciseHandler: (exerciseList: ExerciseType[]) => void = (
    exerciseList: ExerciseType[]
  ) => {
    setUpdateDailyEntryInfo({
      ...updateDailyEntryInfo,
      exercise: exerciseList,
    });
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Edit Entry" />
        <Appbar.Action
          icon="content-save-check"
          onPress={editDailyEntryHandler}
        />
      </Appbar.Header>

      <Spinner visible={isLoading} />

      <ScrollView style={styles.infoContainer}>
        <View>
          <Text style={styles.infoTitle}>Weight</Text>

          <View>
            <DailyMacrosTextInput
              infoType="Weight"
              value={dailyEntry ? dailyEntry?.weight : 0}
              measurement="Lbs"
              onChangeText={(text) =>
                setUpdateDailyEntryInfo({
                  ...updateDailyEntryInfo,
                  weight: parseInt(text),
                })
              }
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
        </View>

        <View>
          <Text style={styles.infoTitle}>Macros</Text>

          <View>
            <DailyMacrosTextInput
              infoType="Calories"
              value={dailyEntry ? dailyEntry?.dailyMacros.calories : 0}
              measurement="Calories"
              onChangeText={(text) =>
                setUpdateDailyEntryInfo({
                  ...updateDailyEntryInfo,
                  dailyMacros: {
                    ...updateDailyEntryInfo.dailyMacros,
                    calories: parseInt(text),
                  },
                })
              }
              autoCapitalize="none"
              autoCorrect={false}
            />

            <DailyMacrosTextInput
              infoType="Fat"
              value={dailyEntry ? dailyEntry?.dailyMacros.fat : 0}
              measurement="Grams"
              onChangeText={(text) =>
                setUpdateDailyEntryInfo({
                  ...updateDailyEntryInfo,
                  dailyMacros: {
                    ...updateDailyEntryInfo.dailyMacros,
                    fat: parseInt(text),
                  },
                })
              }
              autoCapitalize="none"
              autoCorrect={false}
            />

            <DailyMacrosTextInput
              infoType="Protein"
              value={dailyEntry ? dailyEntry?.dailyMacros.protein : 0}
              measurement="Grams"
              onChangeText={(text) =>
                setUpdateDailyEntryInfo({
                  ...updateDailyEntryInfo,
                  dailyMacros: {
                    ...updateDailyEntryInfo.dailyMacros,
                    protein: parseInt(text),
                  },
                })
              }
              autoCapitalize="none"
              autoCorrect={false}
            />

            <DailyMacrosTextInput
              infoType="Carbs"
              value={dailyEntry ? dailyEntry?.dailyMacros.carbs : 0}
              measurement="Grams"
              onChangeText={(text) =>
                setUpdateDailyEntryInfo({
                  ...updateDailyEntryInfo,
                  dailyMacros: {
                    ...updateDailyEntryInfo.dailyMacros,
                    carbs: parseInt(text),
                  },
                })
              }
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
        </View>

        <View>
          <Text style={styles.infoTitle}>Exercise</Text>

          {updateDailyEntryInfo.exercise.map(
            (exercise: ExerciseType, index: number) => {
              return (
                <ExerciseInfo
                  key={index}
                  id={exercise.id}
                  exerciseName={exercise.name}
                  sets={exercise.sets}
                  reps={exercise.reps}
                  weight={exercise.weight}
                  updateExerciseHandler={updateEExerciseHandler}
                  exerciseList={updateDailyEntryInfo.exercise}
                  apiCall={true}
                />
              );
            }
          )}

          <View style={styles.addExerciseBtn}>
            <AddButton onPress={showModal} buttonText={"Add Exercise"} />
          </View>
        </View>

        <AddExerciseModal
          addExerciseModalVisible={addExerciseModalVisible}
          hideModal={hideModal}
          retrieveAddedExercise={retrieveAddedExercise}
        />
      </ScrollView>
    </View>
  );
};

export default EditDailyEntryScreen;
