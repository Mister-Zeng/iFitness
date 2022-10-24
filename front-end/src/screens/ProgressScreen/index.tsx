import React, { ComponentType, useMemo } from "react";
import { ScrollView, View, Text } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles, { StyleSheetProps } from "./styles";
import { Appbar } from "react-native-paper";
import { LineChart } from "react-native-chart-kit";
import { Colors } from "../../constants/colors";
import { RFValue } from "react-native-responsive-fontsize";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const ProgressScreen: ComponentType<{
  route: any;
  jumpTo: (key: string) => void;
}> = ({ route, jumpTo }) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

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
        data: [150, 160, 180, 183, 176],
        color: () => "#2a9d8f",
        strokeWidth: 2,
      },
      {
        data: [173, 172, 171, 170, 169],
        color: () => "#219ebc",
        strokeWidth: 2,
      },
      {
        data: [155, 158, 161, 168, 179],
        color: () => "#e63946",
        strokeWidth: 2,
      },
    ],
    legend: ["Bench Press", "Squats", "Deadlifts"],
  };
  const chartConfig = {
    backgroundGradientFrom: Colors.BLACK,
    backgroundGradientTo: Colors.BLACK,
    color: () => Colors.WHITE,
    useShadowColorFromDataset: true,
    propsForBackgroundLines: {
      strokeDasharray: "", // solid background lines with no dashes
    },
    decimalPlaces: 0,
  };

  return (
    <View style={styles.container}>
      <Appbar.Header mode="center-aligned">
        <Appbar.Content title={"Progress"} />
      </Appbar.Header>

      <ScrollView style={styles.infoContainer}>
        <View style={styles.weightContainer}>
          <LineChart
            data={data}
            width={RFValue(280)}
            height={200}
            withShadow={false}
            verticalLabelRotation={25}
            chartConfig={chartConfig}
            bezier
            style={{ paddingRight: RFValue(35), marginLeft: RFValue(25) }}
            segments={8}
            yAxisInterval={0.5}
          />
        </View>

        <View style={styles.weightContainer}>
          <LineChart
            data={data}
            width={RFValue(280)}
            height={200}
            withShadow={false}
            verticalLabelRotation={25}
            chartConfig={chartConfig}
            bezier
            style={{ paddingRight: RFValue(35), marginLeft: RFValue(25) }}
            segments={8}
            yAxisInterval={0.5}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProgressScreen;
