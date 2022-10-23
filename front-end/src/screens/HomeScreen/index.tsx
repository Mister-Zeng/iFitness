import React, { ComponentType, useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from "./styles";
import { Appbar } from "react-native-paper";
import { LineChart } from "react-native-chart-kit";
import * as Progress from "react-native-progress";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";
import AuthSelect from "../../providers/auth";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const HomeScreen: ComponentType<{
  route: any;
  jumpTo: (key: string) => void;
}> = ({ route, jumpTo }) => {
  const styles = useMemo(() => createStyles(), []);

  const { userInfo } = AuthSelect();

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
  };

  return (
    <View style={styles.screen}>
      <Appbar.Header mode="center-aligned">
        <Appbar.Content title="Home" />
      </Appbar.Header>

      <ScrollView style={styles.infoContainer}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hello </Text>
          <Text style={styles.userName}>
            {userInfo &&
              userInfo.first_name[0].toUpperCase() +
                userInfo.first_name.slice(1) +
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
          />
        </View>
        <View style={styles.macroContainer}>
          <Text style={styles.graphTitle}>Daily Macros Limit</Text>
          <View style={styles.macroProgressContainer}>
            <Text style={styles.macroProgressTitle}>Calories</Text>
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
            <Text style={styles.macroProgressTitle}>Fat</Text>
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
              progress={0.5}
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
