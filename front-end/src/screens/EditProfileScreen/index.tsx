import React, { useState, useMemo, FC } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles, { StyleSheetProps } from "./styles";
import { Appbar } from "react-native-paper";
import SaveButton from "../../components/SaveButton";
import { MacrosType } from "../../models";
import { EditUserInfoType } from "../../models/auth";
import DailyMacrosTextInput from "../../ui/DailyMacrosTextInput";
import Spinner from "react-native-loading-spinner-overlay/lib";
import useAuthSelect from "../../providers/auth";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const EditProfileScreen: FC<IProps> = ({ navigation }: IProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const { userInfo, editProfile, editMacro, isLoading } = useAuthSelect();

  const [editUserInfo, setEditUserInfo] = useState<EditUserInfoType>({
    username: userInfo.username,
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    emailAddress: userInfo.emailAddress,
  });
  console.log(editUserInfo);
  const [editMacrosGoal, setEditMacrosGoal] = useState<MacrosType>({
    id: userInfo.macrosGoal.id,
    calories: userInfo.macrosGoal.calories,
    carbs: userInfo.macrosGoal.carbs,
    fat: userInfo.macrosGoal.fat,
    protein: userInfo.macrosGoal.protein,
  });

  const handleEditProfile: () => void = () => {
    // Email format validation
    const emailReg: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (
      // Check if input is not empty
      editUserInfo.firstName.trim().length < 1 ||
      editUserInfo.lastName.trim().length < 1 ||
      editUserInfo.emailAddress.trim().length < 1
    ) {
      Alert.alert("Alert", "Please enter all required value");
    } else if (emailReg.test(editUserInfo.emailAddress) === false) {
      Alert.alert("Alert", "Please enter valid email address");
    } else {
      editProfile(editUserInfo);
      Alert.alert("Success", "Profile has been updated");
      navigation.navigate("ProfileScreen");
    }
  };

  const handleDailyMacrosGoalSubmit: () => void = () => {
    if (
      // Check if input in a number
      editMacrosGoal.calories === null ||
      isNaN(editMacrosGoal.calories) ||
      editMacrosGoal.fat === null ||
      isNaN(editMacrosGoal.fat) ||
      editMacrosGoal.protein === null ||
      isNaN(editMacrosGoal.protein) ||
      editMacrosGoal.carbs === null ||
      isNaN(editMacrosGoal.carbs) ||
      editMacrosGoal === null
    ) {
      Alert.alert("Alert", "Please enter value in number format");
    } else {
      editMacro(editMacrosGoal);
      Alert.alert("Success", "Macros goal has been updated");
      navigation.navigate("ProfileScreen");
    }
  };

  return (
    <View style={styles.body}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Edit Profile" />
      </Appbar.Header>

      <Spinner visible={isLoading} />

      <View>
        <Text style={styles.infoTitle}>Personal Details</Text>
        <View style={styles.profilePicture}>
          <Text></Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputIconContainer}>
            <Text style={styles.infoType}>Username</Text>
            <TextInput
              style={styles.input}
              editable={false}
              value={userInfo.username}
              onChangeText={(text) =>
                setEditUserInfo({ ...editUserInfo, username: text })
              }
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.inputIconContainer}>
            <Text style={styles.infoType}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder={userInfo.firstName}
              onChangeText={(text) =>
                setEditUserInfo({ ...editUserInfo, firstName: text })
              }
              placeholderTextColor="#6A6A6A"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.inputIconContainer}>
            <Text style={styles.infoType}>Last name</Text>
            <TextInput
              style={styles.input}
              placeholder={userInfo.lastName}
              onChangeText={(text) =>
                setEditUserInfo({ ...editUserInfo, lastName: text })
              }
              placeholderTextColor="#6A6A6A"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.inputIconContainer}>
            <Text style={styles.infoType}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder={userInfo.emailAddress}
              onChangeText={(text) =>
                setEditUserInfo({ ...editUserInfo, emailAddress: text })
              }
              placeholderTextColor="#6A6A6A"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.saveButtonContainer}>
            <SaveButton title={"Save"} onPress={handleEditProfile} />
          </View>
        </View>

        <View>
          <Text style={styles.infoTitle}>Daily Macros Goal</Text>

          <View style={styles.inputContainer}>
            <DailyMacrosTextInput
              infoType="Calories"
              value={userInfo.macrosGoal.calories}
              onChangeText={(text) =>
                setEditMacrosGoal({
                  ...editMacrosGoal,
                  calories: parseInt(text),
                })
              }
              autoCapitalize="none"
              autoCorrect={false}
              measurement="Calories"
            />
            <DailyMacrosTextInput
              infoType="Fat"
              value={userInfo.macrosGoal.fat}
              onChangeText={(text) =>
                setEditMacrosGoal({ ...editMacrosGoal, fat: parseInt(text) })
              }
              autoCapitalize="none"
              autoCorrect={false}
              measurement="Grams"
            />
            <DailyMacrosTextInput
              infoType="Protein"
              value={userInfo.macrosGoal.protein}
              onChangeText={(text) =>
                setEditMacrosGoal({
                  ...editMacrosGoal,
                  protein: parseInt(text),
                })
              }
              autoCapitalize="none"
              autoCorrect={false}
              measurement="Grams"
            />
            <DailyMacrosTextInput
              infoType="Carbs"
              value={userInfo.macrosGoal.carbs}
              onChangeText={(text) =>
                setEditMacrosGoal({
                  ...editMacrosGoal,
                  carbs: parseInt(text),
                })
              }
              autoCapitalize="none"
              autoCorrect={false}
              measurement="Grams"
            />

            <View style={styles.saveButtonContainer}>
              <SaveButton
                title={"Save"}
                onPress={handleDailyMacrosGoalSubmit}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditProfileScreen;
