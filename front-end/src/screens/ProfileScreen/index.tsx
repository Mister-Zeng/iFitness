import React, { ComponentType, useState, useMemo, FC, useEffect } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles, { StyleSheetProps } from "./styles";
import { Appbar } from "react-native-paper";
import SaveButton from "../../components/SaveButton";
import { MacrosType } from "../../models";
import { EditUserInfoType } from "../../models/auth";
import { macrosConstant } from "../../constants/dailyEntry";
import DailyMacrosTextInput from "../../ui/DailyMacrosTextInput";
import AuthSelect from "../../providers/auth";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const ProfileScreen: FC<IProps> = ({ navigation }: IProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const { userInfo } = AuthSelect();

  const [profileInfo, setProfileInfo] = useState<EditUserInfoType>({
    username: userInfo.username,
    first_name: userInfo.first_name,
    last_name: userInfo.last_name,
    email_address: userInfo.email_address,
  });

  useEffect(() => {
    setProfileInfo(userInfo);
  }, [userInfo]);

  return (
    <View style={styles.body}>
      <Appbar.Header mode="center-aligned">
        <Appbar.Action
          icon="clipboard-edit-outline"
          onPress={() => navigation.navigate("EditProfileScreen")}
        />

        <Appbar.Content title="Profile" />
        <Appbar.Action icon="logout" onPress={() => {}} />
      </Appbar.Header>

      <View>
        <Text style={styles.infoTitle}>Personal Details</Text>
        <View style={styles.profilePicture}>
          <Text></Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.userInfoContainer}>
            <Text style={styles.infoType}>Username</Text>
            <Text style={styles.input}>{profileInfo.username}</Text>
          </View>

          <View style={styles.userInfoContainer}>
            <Text style={styles.infoType}>First Name</Text>
            <Text style={styles.input}>{profileInfo.first_name}</Text>
          </View>

          <View style={styles.userInfoContainer}>
            <Text style={styles.infoType}>Last name</Text>
            <Text style={styles.input}>{profileInfo.last_name}</Text>
          </View>

          <View style={styles.userInfoContainer}>
            <Text style={styles.infoType}>Email Address</Text>
            <Text style={styles.input}>{profileInfo.email_address}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.infoTitle}>Daily Macros Goal</Text>
          <View style={styles.inputContainer}>
            <View style={styles.macroInfoContainer}>
              <Text style={styles.macroInfoType}>Calories</Text>
              <Text style={styles.macroinput}>
                {userInfo.macros_goal.calories}
              </Text>
              <Text style={styles.measurement}>Calories</Text>
            </View>

            <View style={styles.macroInfoContainer}>
              <Text style={styles.macroInfoType}>Fat</Text>
              <Text style={styles.macroinput}>{userInfo.macros_goal.fat}</Text>
              <Text style={styles.measurement}>Grams</Text>
            </View>

            <View style={styles.macroInfoContainer}>
              <Text style={styles.macroInfoType}>Protein</Text>
              <Text style={styles.macroinput}>
                {userInfo.macros_goal.protein}
              </Text>
              <Text style={styles.measurement}>Grams</Text>
            </View>

            <View style={styles.macroInfoContainer}>
              <Text style={styles.macroInfoType}>Carbs</Text>
              <Text style={styles.macroinput}>
                {userInfo.macros_goal.carbs}
              </Text>
              <Text style={styles.measurement}>Grams</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
