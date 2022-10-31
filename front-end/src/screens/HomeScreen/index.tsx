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

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
const HomeScreen: FC<IProps> = ({ navigation }: IProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const { userInfo } = useAuthSelect();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (userInfo.token !== null) {
      setIsLoaded(true);
    }
  }, [userInfo]);

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [200, 190, 180, 177, 176, 175, 174, 173, 172, 171, 170, 169],
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

  return isLoaded ? (
    <View style={styles.screen}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Home" />
      </Appbar.Header>

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
              progress={0.77}
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
              progress={0.65}
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
              progress={0.5}
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
              progress={0.7}
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
  ) : (
    <Text>loading</Text>
  );
};

export default HomeScreen;
