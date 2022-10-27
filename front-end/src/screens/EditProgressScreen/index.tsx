import React, { FC, useMemo, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles, { StyleSheetProps } from "./styles";
import { Appbar } from "react-native-paper";
import DailyMacrosTextInput from "../../ui/DailyMacrosTextInput";
import AddExerciseButton from "../../components/AddExerciseButton";
import ExerciseInfo from "../../components/ExerciseInfo";
import { EditProgressType } from "../../models";
import Spinner from "react-native-loading-spinner-overlay/lib";
import AuthSelect from "../../providers/auth";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const EditProgressScreen: FC<IProps> = ({ navigation }: IProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const { isLoading } = AuthSelect();

  const [editProgressInfo, setEditProgressInfo] = useState<EditProgressType>({
    weight: 0,
    macros: {
      id: 0,
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    },
    exercise: [
      {
        id: 0,
        name: "",
        sets: 0,
        reps: 0,
        weight: 0,
      },
    ],
  });

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Edit Progress" />
        <Appbar.Action
          icon="content-save-check"
          onPress={() => navigation.goBack()}
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
              value={editProgressInfo.weight.toString()}
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
              // value={userInfo.macros.calories}
              value={editProgressInfo.macros.calories.toString()}
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
              // value={userInfo.macros.fat}
              value={editProgressInfo.macros.fat.toString()}
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
              // value={userInfo.macros.protein}
              value={editProgressInfo.macros.protein.toString()}
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
              // value={userInfo.macros.carbs}
              value={editProgressInfo.macros.carbs.toString()}
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

          <ExerciseInfo
            exercise_name="Bench Press"
            sets={4}
            reps={8}
            weight={120}
          />

          <ExerciseInfo
            exercise_name="Bench Press"
            sets={4}
            reps={8}
            weight={120}
          />

          <ExerciseInfo
            exercise_name="Bench Press"
            sets={4}
            reps={8}
            weight={120}
          />

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
