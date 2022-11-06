import React, { FC, useEffect, useMemo, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles, { StyleSheetProps } from "./styles";
import { Appbar } from "react-native-paper";
import DailyMacroText from "../../ui/DailyMacroText";
import DatePickers from "../../components/DatePicker";
import ExerciseInfo from "../../components/ExerciseInfo";
import AddExerciseButton from "../../components/AddButton";
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
    userId: userInfo.id,
    date: moment(new Date()).format("YYYY-MM-DD"),
  });

  useEffect(() => {
    getDailyEntry(dailyEntryInfo);
  }, [dailyEntryInfo.date]);

  // Function to retrieve date from child component DatePicker
  const retrieveDateHandler: (date: Date) => void = (date: Date) => {
    setDailyEntryInfo({
      userId: userInfo.id,
      date: moment(date).format("YYYY-MM-DD"),
    });
  };

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <Appbar.Header style={styles.header}>
        {dailyEntry!.isTodayCreated !== false && (
          <Appbar.Action
            icon="clipboard-edit-outline"
            onPress={() =>
              navigation.navigate("EditDailyEntryScreen", {
                params: { dailyEntry },
              })
            }
          />
        )}

        <Appbar.Content
          title={<DatePickers retrieveDateHandler={retrieveDateHandler} />}
        />
      </Appbar.Header>
      <ScrollView style={styles.infoContainer}>
        {dailyEntry!.isTodayCreated === false ? (
          <View style={styles.createEntryContainer}>
            <Text style={styles.message}>
              There is currently no entry for this date
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CreateDailyEntryScreen", {
                  params: { dailyEntryInfo },
                })
              }
              style={styles.createEntryBtn}
            >
              <Text style={styles.createEntryBtnText}>Create Entry</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <View>
              <Text style={styles.infoTitle}>Weight</Text>

              <View>
                <DailyMacroText
                  infoType="Weight"
                  value={dailyEntry?.weight}
                  measurement="Lbs"
                />
              </View>
            </View>

            <View>
              <Text style={styles.infoTitle}>Macros</Text>

              <View>
                <DailyMacroText
                  infoType="Calories"
                  value={dailyEntry?.dailyMacros.calories}
                  measurement="Calories"
                />
                <DailyMacroText
                  infoType="Fat"
                  value={dailyEntry?.dailyMacros.fat}
                  measurement="Grams"
                />
                <DailyMacroText
                  infoType="Protein"
                  value={dailyEntry?.dailyMacros.protein}
                  measurement="Grams"
                />
                <DailyMacroText
                  infoType="Carbs"
                  value={dailyEntry?.dailyMacros.carbs}
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
                      id={exercise.id}
                      exerciseName={exercise.name}
                      sets={exercise.sets}
                      reps={exercise.reps}
                      weight={exercise.weight}
                      disabled={true}
                    />
                  );
                })
              ) : (
                <View></View>
              )}
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default DailyEntryScreen;
