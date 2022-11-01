import React, { FC, useEffect, useMemo, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles, { StyleSheetProps } from "./styles";
import { Appbar } from "react-native-paper";
import DailyMacroText from "../../ui/DailyMacroText";
import DatePickers from "../../components/DatePicker";
import ExerciseInfo from "../../components/ExerciseInfo";
import AddExerciseButton from "../../components/AddExerciseButton";
import { DailyEntryType } from "../../models";
import useAuthSelect from "../../providers/auth";
import useDailyEntrySelect from "../../providers/dailyEntry";
import moment from "moment";
import { useIsFocused } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay/lib";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const DailyEntryScreen: FC<IProps> = ({ navigation }: IProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const { userInfo } = useAuthSelect();

  const { dailyEntry, getDailyEntry, isLoading } = useDailyEntrySelect();

  const [dailyEntryInfo, setDailyEntryInfo] = useState<{
    userId: number;
    date: string;
  }>({
    userId: userInfo.userId,
    date: moment(new Date()).format("YYYY-MM-DD"),
  });

  useEffect(() => {
    console.log("called");

    getDailyEntry(dailyEntryInfo);
  }, [dailyEntryInfo.date]);

  // Function to retrieve date from child component DatePicker
  const retrieveDateHandler: (date: Date) => void = (date: Date) => {
    setDailyEntryInfo({
      userId: userInfo.userId,
      date: moment(date).format("YYYY-MM-DD"),
    });
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Action
          icon="clipboard-edit-outline"
          onPress={() =>
            navigation.navigate("EditProgressScreen", {
              params: { dailyEntry },
            })
          }
        />
        <Appbar.Content
          title={<DatePickers retrieveDateHandler={retrieveDateHandler} />}
        />
      </Appbar.Header>

      {!isLoading ? (
        <ScrollView style={styles.infoContainer}>
          <View>
            <Text style={styles.infoTitle}>Weight</Text>

            <View>
              <DailyMacroText
                infoType="Weight"
                // value={userInfo.macros.calories}
                value={dailyEntry ? dailyEntry?.weight : 0}
                measurement="Lbs"
              />
            </View>
          </View>

          <View>
            <Text style={styles.infoTitle}>Macros</Text>

            <View>
              <DailyMacroText
                infoType="Calories"
                value={dailyEntry ? dailyEntry?.dailyMacros.calories : 0}
                measurement="Calories"
              />
              <DailyMacroText
                infoType="Fat"
                value={dailyEntry ? dailyEntry?.dailyMacros.fat : 0}
                measurement="Grams"
              />
              <DailyMacroText
                infoType="Protein"
                value={dailyEntry ? dailyEntry?.dailyMacros.protein : 0}
                measurement="Grams"
              />
              <DailyMacroText
                infoType="Carbs"
                value={dailyEntry ? dailyEntry?.dailyMacros.carbs : 0}
                measurement="Grams"
              />
            </View>
          </View>

          <View>
            <Text style={styles.infoTitle}>Exercise</Text>

            {dailyEntry ? (
              dailyEntry?.exercise.map((exercise, index) => {
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
      ) : (
        <View
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CreateDailyEntryScreen", {
                params: { dailyEntryInfo },
              })
            }
            style={{ backgroundColor: "orange", padding: 10, borderRadius: 50 }}
          >
            <Text style={{ color: "white" }}>Create Entry</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default DailyEntryScreen;
