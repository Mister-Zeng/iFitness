import React, { FC, useMemo, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import createStyles, { StyleSheetProps } from "./styles";
import { Appbar } from "react-native-paper";
import DailyMacrosTextInput from "../../ui/DailyMacrosTextInput";
import AddExerciseButton from "../../components/AddExerciseButton";
import ExerciseInfo from "../../components/ExerciseInfo";
import { DailyEntryType, EditProgressType, ExerciseType } from "../../models";
import Spinner from "react-native-loading-spinner-overlay/lib";
import useAuthSelect from "../../providers/auth";
import useDailyEntrySelect from "../../providers/dailyEntry/index";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<
    { params: { params: { dailyEntry: DailyEntryType } } },
    "params"
  >;
}

const EditProgressScreen: FC<IProps> = ({ navigation, route }: IProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const dailyEntry: DailyEntryType = route.params.params.dailyEntry;

  const { createDailyEntry } = useDailyEntrySelect();

  const { isLoading, setIsLoading } = useDailyEntrySelect();

  const [editProgressInfo, setEditProgressInfo] =
    useState<DailyEntryType>(dailyEntry);

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Edit Progress" />
        <Appbar.Action
          icon="content-save-check"
          onPress={() => createDailyEntry(editProgressInfo)}
        />
      </Appbar.Header>

      <Spinner visible={isLoading} />

      <ScrollView style={styles.infoContainer}>
        <View>
          <Text style={styles.infoTitle}>Weight</Text>

          <View>
            <DailyMacrosTextInput
              infoType="Weight"
              // value={userInfo.macros.calories}
              value={dailyEntry ? dailyEntry?.weight : 0}
              measurement="Lbs"
              onChangeText={(text) =>
                setEditProgressInfo({
                  ...editProgressInfo,
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
              measurement="Grams"
              onChangeText={(text) =>
                setEditProgressInfo({
                  ...editProgressInfo,
                  weight: parseInt(text),
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
                setEditProgressInfo({
                  ...editProgressInfo,
                  weight: parseInt(text),
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
                setEditProgressInfo({
                  ...editProgressInfo,
                  weight: parseInt(text),
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
                setEditProgressInfo({
                  ...editProgressInfo,
                  weight: parseInt(text),
                })
              }
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
        </View>

        <View>
          <Text style={styles.infoTitle}>Exercise</Text>

          {dailyEntry ? (
            dailyEntry.exercise.map((exercise: ExerciseType, index: number) => {
              return (
                <ExerciseInfo
                  key={index}
                  exerciseName={exercise.name}
                  sets={exercise.sets}
                  reps={exercise.reps}
                  weight={exercise.weight}
                />
              );
            })
          ) : (
            <View></View>
          )}

          <View style={styles.addExerciseBtn}>
            <AddExerciseButton
              onPress={() => navigation.navigate("AddExerciseScreen")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProgressScreen;
