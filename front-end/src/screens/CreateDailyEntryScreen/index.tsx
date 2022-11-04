import React, { FC, useEffect, useMemo, useState } from "react";
import { View, Text, ScrollView, Alert, TextInput } from "react-native";
import {
  NavigationProp,
  ParamListBase,
  NavigationState,
  RouteProp,
} from "@react-navigation/native";
import createStyles, { StyleSheetProps } from "./styles";
import { Appbar } from "react-native-paper";
import DailyMacrosTextInput from "../../ui/DailyMacrosTextInput";
import AddButton from "../../components/AddButton";
import ExerciseInfo from "../../components/ExerciseInfo";
import { DailyEntryType, EditProgressType, ExerciseType } from "../../models";
import Spinner from "react-native-loading-spinner-overlay/lib";
import useDailyEntrySelect from "../../providers/dailyEntry/index";
import AddExerciseModal from "../../components/AddExerciseModal";

export interface CreateDailyEntryScreenIProps {
  navigation: NavigationProp<NavigationState>;
  route: RouteProp<
    {
      params: {
        params: { dailyEntryInfo: { date: string; userId: number } };
      };
    },
    "params"
  >;
}

const CreateDailyEntryScreen: FC<CreateDailyEntryScreenIProps> = ({
  navigation,
  route,
}: CreateDailyEntryScreenIProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const params: { date: string; userId: number } =
    route.params.params.dailyEntryInfo;

  const { createDailyEntry } = useDailyEntrySelect();

  const { isLoading } = useDailyEntrySelect();

  const [createDailyEntryInfo, setCreateDailyEntryInfo] =
    useState<DailyEntryType>({
      date: params.date,
      weight: 0,
      exercise: [],
      dailyMacros: {
        protein: 0,
        carbs: 0,
        fat: 0,
        calories: 0,
      },
    });
  console.log(createDailyEntryInfo);
  const [addExerciseModalVisible, setAddExerciseModalVisible] = useState(false);
  const showModal: () => void = () => setAddExerciseModalVisible(true);
  const hideModal: () => void = () => setAddExerciseModalVisible(false);

  const createEntryHandler: () => void = async () => {
    await createDailyEntry(createDailyEntryInfo);

    Alert.alert("Success", "Daily Entry Created");

    navigation.goBack();
  };

  const retrieveAddedExercise = (exercise: ExerciseType) => {
    setCreateDailyEntryInfo({
      ...createDailyEntryInfo,
      exercise: [...createDailyEntryInfo.exercise, exercise],
    });
  };

  const updateExerciseHandler: (exerciseList: ExerciseType[]) => void = (
    exerciseList: ExerciseType[]
  ) => {
    setCreateDailyEntryInfo({
      ...createDailyEntryInfo,
      exercise: exerciseList,
    });
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Create Entry" />
        <Appbar.Action icon="content-save-check" onPress={createEntryHandler} />
      </Appbar.Header>

      <Spinner visible={isLoading} />

      <ScrollView style={styles.infoContainer}>
        <View>
          <Text style={styles.infoTitle}>Weight</Text>

          <View>
            <DailyMacrosTextInput
              infoType="Weight"
              value={0}
              measurement="Lbs"
              onChangeText={(text) =>
                setCreateDailyEntryInfo({
                  ...createDailyEntryInfo,
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
              value={0}
              measurement="Grams"
              onChangeText={(text) =>
                setCreateDailyEntryInfo({
                  ...createDailyEntryInfo,
                  dailyMacros: {
                    ...createDailyEntryInfo.dailyMacros,
                    calories: parseInt(text),
                  },
                })
              }
              autoCapitalize="none"
              autoCorrect={false}
            />

            <DailyMacrosTextInput
              infoType="Fat"
              value={0}
              measurement="Grams"
              onChangeText={(text) =>
                setCreateDailyEntryInfo({
                  ...createDailyEntryInfo,
                  dailyMacros: {
                    ...createDailyEntryInfo.dailyMacros,
                    fat: parseInt(text),
                  },
                })
              }
              autoCapitalize="none"
              autoCorrect={false}
            />

            <DailyMacrosTextInput
              infoType="Protein"
              value={0}
              measurement="Grams"
              onChangeText={(text) =>
                setCreateDailyEntryInfo({
                  ...createDailyEntryInfo,
                  dailyMacros: {
                    ...createDailyEntryInfo.dailyMacros,
                    protein: parseInt(text),
                  },
                })
              }
              autoCapitalize="none"
              autoCorrect={false}
            />

            <DailyMacrosTextInput
              infoType="Carbs"
              value={0}
              measurement="Grams"
              onChangeText={(text) =>
                setCreateDailyEntryInfo({
                  ...createDailyEntryInfo,
                  dailyMacros: {
                    ...createDailyEntryInfo.dailyMacros,
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

          {createDailyEntryInfo.exercise.map((exercise, index) => {
            return (
              <ExerciseInfo
                id={exercise.id}
                key={index}
                exerciseName={exercise.name}
                sets={exercise.sets}
                reps={exercise.reps}
                weight={exercise.weight}
                updateExerciseHandler={updateExerciseHandler}
                exerciseList={createDailyEntryInfo.exercise}
                apiCall={false}
              />
            );
          })}

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

export default CreateDailyEntryScreen;
