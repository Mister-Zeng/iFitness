import React, { FC, useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles, { StyleSheetProps } from "./styles";
import { Appbar } from "react-native-paper";
import DailyMacroText from "../../ui/DailyMacroText";
import AuthSelect from "../../providers/auth";
import DatePickers from "../../components/DatePicker";
import ExerciseInfo from "../../components/ExerciseInfo";
import AddExerciseButton from "../../components/AddExerciseButton";
import { DailyEntryType } from "../../models";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const DailyEntryScreen: FC<IProps> = ({ navigation }: IProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const { userInfo } = AuthSelect();

  const [dailyEntry, setDailyEntry] = useState<DailyEntryType>({
    date: new Date(),
    exercise: [],
    macros: {
      carbs: 0,
      fat: 0,
      protein: 0,
      calories: 0,
    },
    weight: 0,
  });

  // Function to retrieve date from child component DatePicker
  const retrieveDateHandler: (date: Date) => void = (date: Date) => {
    console.log(date);
    setDailyEntry({ ...dailyEntry, date: date });
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Action
          icon="clipboard-edit-outline"
          onPress={() => navigation.navigate("EditProgressScreen")}
        />
        <Appbar.Content
          title={<DatePickers retrieveDateHandler={retrieveDateHandler} />}
        />
      </Appbar.Header>

      <ScrollView style={styles.infoContainer}>
        <View>
          <Text style={styles.infoTitle}>Weight</Text>

          <View>
            <DailyMacroText
              infoType="Weight"
              // value={userInfo.macros.calories}
              value={0}
              measurement="Lbs"
            />
          </View>
        </View>

        <View>
          <Text style={styles.infoTitle}>Macros</Text>

          <View>
            <DailyMacroText
              infoType="Calories"
              // value={userInfo.macros.calories}
              value={0}
              measurement="Calories"
            />
            <DailyMacroText
              infoType="Fat"
              value={0}
              // value={userInfo.macros.fat}
              measurement="Grams"
            />
            <DailyMacroText
              infoType="Protein"
              value={0}
              // value={userInfo.macros.protein}
              measurement="Grams"
            />
            <DailyMacroText
              infoType="Carbs"
              value={0}
              // value={userInfo.macros.carbs}
              measurement="Grams"
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

export default DailyEntryScreen;
