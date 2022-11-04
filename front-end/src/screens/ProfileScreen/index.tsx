import React, { useState, useMemo, FC, useEffect } from "react";
import { Text, View, Image } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles, { StyleSheetProps } from "./styles";
import { Appbar } from "react-native-paper";
import { EditUserInfoType } from "../../models/auth";
import Spinner from "react-native-loading-spinner-overlay/lib";
import useAuthSelect from "../../providers/auth";
import { MacrosGoalType } from "../../models";
import { PROFILE_PIC_ICON } from "../../assets";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const ProfileScreen: FC<IProps> = ({ navigation }: IProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const { userInfo, logout, isLoading } = useAuthSelect();

  // const [profileInfo, setProfileInfo] = useState<EditUserInfoType>({
  //   id: userInfo.id,
  //   username: userInfo.username,
  //   firstName: userInfo.firstName,
  //   lastName: userInfo.lastName,
  //   emailAddress: userInfo.emailAddress,
  // });

  // const [macrosGoal, setMacrosGoal] = useState<MacrosGoalType>({
  //   id: userInfo.macrosGoal.id,
  //   calories: userInfo.macrosGoal.calories,
  //   carbs: userInfo.macrosGoal.carbs,
  //   fat: userInfo.macrosGoal.fat,
  //   protein: userInfo.macrosGoal.protein,
  // });

  // useEffect(() => {
  //   setProfileInfo(userInfo);
  //   setMacrosGoal(userInfo.macrosGoal);
  // }, [userInfo]);

  return (
    <View style={styles.body}>
      <Appbar.Header style={styles.header}>
        <Appbar.Action
          icon="clipboard-edit-outline"
          onPress={() => navigation.navigate("EditProfileScreen")}
        />

        <Appbar.Content title="Profile" />
        <Appbar.Action
          icon="logout"
          onPress={() => {
            logout();
          }}
        />
      </Appbar.Header>

      <Spinner visible={isLoading} />

      <View>
        <Text style={styles.infoTitle}>Personal Details</Text>
        <View style={styles.profilePicture}>
          <Image source={PROFILE_PIC_ICON} />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.userInfoContainer}>
            <Text style={styles.infoType}>Username</Text>
            <Text style={styles.input}>{userInfo.username}</Text>
          </View>

          <View style={styles.userInfoContainer}>
            <Text style={styles.infoType}>First Name</Text>
            <Text style={styles.input}>{userInfo.firstName}</Text>
          </View>

          <View style={styles.userInfoContainer}>
            <Text style={styles.infoType}>Last name</Text>
            <Text style={styles.input}>{userInfo.lastName}</Text>
          </View>

          <View style={styles.userInfoContainer}>
            <Text style={styles.infoType}>Email Address</Text>
            <Text style={styles.input}>{userInfo.emailAddress}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.infoTitle}>Daily Macros Goal</Text>
          <View style={styles.inputContainer}>
            <View style={styles.macroInfoContainer}>
              <Text style={styles.macroInfoType}>Calories</Text>
              <Text style={styles.macroinput}>
                {userInfo.macrosGoal.calories}
              </Text>
              <Text style={styles.measurement}>Calories</Text>
            </View>

            <View style={styles.macroInfoContainer}>
              <Text style={styles.macroInfoType}>Fat</Text>
              <Text style={styles.macroinput}>{userInfo.macrosGoal.fat}</Text>
              <Text style={styles.measurement}>Grams</Text>
            </View>

            <View style={styles.macroInfoContainer}>
              <Text style={styles.macroInfoType}>Protein</Text>
              <Text style={styles.macroinput}>
                {userInfo.macrosGoal.protein}
              </Text>
              <Text style={styles.measurement}>Grams</Text>
            </View>

            <View style={styles.macroInfoContainer}>
              <Text style={styles.macroInfoType}>Carbs</Text>
              <Text style={styles.macroinput}>{userInfo.macrosGoal.carbs}</Text>
              <Text style={styles.measurement}>Grams</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
