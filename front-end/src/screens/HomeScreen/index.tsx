import React, { FC, useEffect, useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import createStyles, { StyleSheetProps } from "./styles";
import { Appbar } from "react-native-paper";
import { LineChart } from "react-native-chart-kit";
import * as Progress from "react-native-progress";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import useAuthSelect from "../../providers/auth";
import useDailyEntrySelect from "../../providers/dailyEntry";
import moment from "moment";
import { numToMonth } from "../../constants/helperFunction";
import Spinner from "react-native-loading-spinner-overlay/lib";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
const HomeScreen: FC<IProps> = ({ navigation }: IProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const { userInfo } = useAuthSelect();

  const { dailyEntry, getDailyEntry, getEntries, allDailyEntries } =
    useDailyEntrySelect();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getDailyEntryInfo = async () => {
      await getDailyEntry({
        userId: userInfo.id,
        date: moment(new Date()).format("YYYY-MM-DD"),
      });
    };

    getDailyEntryInfo();

    if (userInfo.token == null) {
      setIsLoaded(true);
    } else {
      setIsLoaded(false);
    }
  }, [userInfo]);

  useEffect(() => {
    getEntries(userInfo.id);
  }, [dailyEntry]);

  const weight: number[] = [];

  const month: string[] = [];

  let dateNum: { date: number; weight: number }[] = [];

  allDailyEntries.map((item) => {
    const dateInfo = item.date as string;
    dateNum.push({
      date: parseInt(dateInfo.replaceAll("-", "")),
      weight: item.weight as number,
    });
  });

  const sortedDate = dateNum.sort((a, b) => {
    return a.date - b.date;
  });

  if (allDailyEntries.length > 1) {
    // If the current date is smaller or equal to the previous date
    // then this is the first entry of the month
    const getWeights = () => {
      let prev = Number.MAX_VALUE;
      for (let i = 0; i < sortedDate.length - 1; i++) {
        if (
          sortedDate[i].date.toString().slice(-2) >
            sortedDate[i + 1].date.toString().slice(-2) &&
          sortedDate[i].date.toString().slice(-4, -2) !==
            sortedDate[i + 1].date.toString().slice(-4, -2)
        ) {
          weight.push(sortedDate[i].weight);
          month.push(numToMonth(sortedDate[i].date.toString().slice(-4, -2)));
          prev = sortedDate[i].date;
        }
      }
    };

    getWeights();
  }

  const data = {
    labels: month,
    datasets: [
      {
        data: weight,
        color: () => Colors.ORANGE,
        strokeWidth: 2, // optional
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: Colors.BLACK,
    backgroundGradientTo: Colors.BLACK,
    color: () => Colors.WHITE,
    useShadowColorFromDataset: false, // optional
    propsForBackgroundLines: {
      strokeDasharray: "", // solid background lines with no dashes
    },
    decimalPlaces: 0,
  };

  return (
    <View style={styles.screen}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Home" />
      </Appbar.Header>

      <Spinner visible={isLoaded} textContent={"Loading..."} />

      <ScrollView style={styles.infoContainer}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hello </Text>
          <Text style={styles.userName}>
            {userInfo.firstName[0].toUpperCase() +
              userInfo.firstName.slice(1) +
              "!"}
          </Text>
        </View>

        <Text style={styles.dashboard}>Dashboard</Text>

        <View style={styles.weightContainer}>
          <Text style={styles.graphTitle}>Weight Tracker Per Month</Text>
          <LineChart
            fromNumber={0}
            fromZero={true}
            data={data}
            width={RFValue(280)}
            height={200}
            verticalLabelRotation={25}
            chartConfig={chartConfig}
            bezier
            withShadow={false}
            style={{ paddingRight: RFValue(35), marginLeft: RFValue(25) }}
          />
        </View>
        <View style={styles.macroContainer}>
          <Text style={styles.graphTitle}>Daily Macros Limit</Text>
          <View style={styles.macroProgressContainer}>
            <Text style={styles.macroProgressTitle}>Calories</Text>
            <Progress.Bar
              progress={
                dailyEntry!.dailyMacros.calories / userInfo.macrosGoal.calories!
              }
              width={320}
              height={25}
              borderRadius={20}
              color={Colors.ORANGE}
              unfilledColor={Colors.WHITE}
            />
          </View>
          <View style={styles.macroProgressContainer}>
            <Text style={styles.macroProgressTitle}>Fat</Text>
            <Progress.Bar
              progress={dailyEntry!.dailyMacros.fat / userInfo.macrosGoal.fat!}
              width={320}
              height={25}
              borderRadius={20}
              color={Colors.ORANGE}
              unfilledColor={Colors.WHITE}
            />
          </View>
          <View style={styles.macroProgressContainer}>
            <Text style={styles.macroProgressTitle}>Protein</Text>
            <Progress.Bar
              progress={
                dailyEntry!.dailyMacros.protein / userInfo.macrosGoal.protein!
              }
              width={320}
              height={25}
              borderRadius={20}
              color={Colors.ORANGE}
              unfilledColor={Colors.WHITE}
            />
          </View>
          <View style={styles.macroProgressContainer}>
            <Text style={styles.macroProgressTitle}>Carb</Text>
            <Progress.Bar
              progress={
                dailyEntry!.dailyMacros.carbs / userInfo.macrosGoal.carbs!
              }
              width={320}
              height={25}
              borderRadius={20}
              color={Colors.ORANGE}
              unfilledColor={Colors.WHITE}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
