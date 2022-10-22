import React, { ComponentType, useMemo } from "react";
import { Text, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from "./styles";
import { Appbar } from "react-native-paper";
import UserInfoSelect from "../../providers/userInfo";
import DailyMacroText from "../../ui/DailyMacroText";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const DailyEntryScreen: ComponentType<{
  route: any;
  jumpTo: (key: string) => void;
}> = ({ route, jumpTo }) => {
  const styles = useMemo(() => createStyles(), []);

  const { userInfo } = UserInfoSelect();

  return (
    <View>
      <Appbar.Header mode="center-aligned">
        <Appbar.Action icon="clipboard-edit-outline" onPress={() => {}} />
        <Appbar.Content title="Daily Entry" />
      </Appbar.Header>

      <View>
        <Text style={styles.infoTitle}>Personal Details</Text>
        <DailyMacroText
          infoType="Calories"
          value={userInfo.macros.calories}
          measurement="Grams"
        />
        <DailyMacroText
          infoType="Fat"
          value={userInfo.macros.fat}
          measurement="Grams"
        />
        <DailyMacroText
          infoType="Protein"
          value={userInfo.macros.protein}
          measurement="Grams"
        />
        <DailyMacroText
          infoType="Carbs"
          value={userInfo.macros.carbs}
          measurement="Grams"
        />
      </View>
    </View>
  );
};

export default DailyEntryScreen;
