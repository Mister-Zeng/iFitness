import React, { ComponentType, useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from "./styles";
import { Appbar } from "react-native-paper";
import DailyMacroText from "../../ui/DailyMacroText";
import AuthSelect from "../../providers/auth";
import DatePickers from "../../components/DatePicker";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const DailyEntryScreen: ComponentType<{
  route: any;
  jumpTo: (key: string) => void;
}> = ({ route, jumpTo }) => {
  const styles = useMemo(() => createStyles(), []);

  const { userInfo } = AuthSelect();

  return (
    <View>
      <Appbar.Header mode="center-aligned">
        <Appbar.Action icon="clipboard-edit-outline" onPress={() => {}} />
        <Appbar.Content title="Daily Entry" />
        <Appbar.Action icon="clipboard-edit-outline" onPress={() => {}} />
      </Appbar.Header>

      <ScrollView style={styles.infoContainer}>
        <View>
          <Text style={styles.infoTitle}>Weight</Text>

          <View style={styles.macrosContainer}>
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

          <View style={styles.macrosContainer}>
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

        <DatePickers />
      </ScrollView>
    </View>
  );
};

export default DailyEntryScreen;
