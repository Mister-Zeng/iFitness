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
import AddExerciseButton from "../../components/AddExerciseButton";
import ExerciseInfo from "../../components/ExerciseInfo";
import { DailyEntryType, EditProgressType, ExerciseType } from "../../models";
import Spinner from "react-native-loading-spinner-overlay/lib";
import useAuthSelect from "../../providers/auth";
import useDailyEntrySelect from "../../providers/dailyEntry/index";
import { dailyMacrosConstant } from "../../constants/dailyEntry";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<
    {
      params: {
        params: { dailyEntryInfo: { date: string; userId: number } };
      };
    },
    "params"
  >;
}

const CreateDailyEntryScreen: FC<IProps> = ({ navigation, route }: IProps) => {
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

  const createEntryHandler: () => void = async () => {
    await createDailyEntry(createDailyEntryInfo);

    Alert.alert("Success", "Daily Entry Created");

    navigation.goBack();
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

export default CreateDailyEntryScreen;
