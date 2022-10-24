import React, { ComponentType, useState, useMemo } from "react";
import { Alert, Text, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles, { StyleSheetProps } from "./styles";
import { Appbar } from "react-native-paper";
import SaveButton from "../../components/SaveButton";
import { MacrosType } from "../../models";
import ProfileInfoInput from "../../ui/ProfileInfoTextInput";
import { EditUserInfoType } from "../../models/auth";
import { macrosConstant } from "../../constants/dailyEntry";
import DailyMacrosTextInput from "../../ui/DailyMacrosTextInput";
import AuthSelect from "../../providers/auth";

const ProfileScreen: ComponentType<{
  route: any;
  jumpTo: (key: string) => void;
}> = ({ route, jumpTo }) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const { userInfo, editProfile } = AuthSelect();

  const [editUserInfo, setEditUserInfo] = useState<EditUserInfoType>({
    username: userInfo.username,
    first_name: userInfo.first_name,
    last_name: userInfo.last_name,
    email_address: userInfo.email_address,
  });
  console.log(editUserInfo);
  const [editMacrosGoal, setEditMacrosGoal] =
    useState<MacrosType>(macrosConstant);

  const handleEditProfile: () => void = () => {
    editProfile(editUserInfo);
    Alert.alert("Success", "Profile has been updated");
  };

  const handleDailyMacrosGoalSubmit: () => void = () => {};

  return (
    <View>
      <Appbar.Header mode="center-aligned">
        <Appbar.Action icon="logout" onPress={() => {}} />
        <Appbar.Content title="Profile" />
      </Appbar.Header>

      <View>
        <Text style={styles.infoTitle}>Personal Details</Text>
        <View style={styles.profilePicture}>
          <Text></Text>
        </View>

        <View style={styles.inputContainer}>
          <ProfileInfoInput
            infoType="Username"
            editable={false}
            value={userInfo.username}
            onChangeText={(text) =>
              setEditUserInfo({ ...editUserInfo, username: text })
            }
            autoCapitalize="none"
            autoCorrect={false}
          />
          <ProfileInfoInput
            infoType="First Name"
            value={userInfo.first_name}
            onChangeText={(text) =>
              setEditUserInfo({ ...editUserInfo, first_name: text })
            }
            autoCapitalize="none"
            autoCorrect={false}
          />
          <ProfileInfoInput
            infoType="Last name"
            value={userInfo.last_name}
            onChangeText={(text) =>
              setEditUserInfo({ ...editUserInfo, last_name: text })
            }
            autoCapitalize="none"
            autoCorrect={false}
          />
          <ProfileInfoInput
            infoType="Email Address"
            value={userInfo.email_address}
            onChangeText={(text) =>
              setEditUserInfo({ ...editUserInfo, email_address: text })
            }
            autoCapitalize="none"
            autoCorrect={false}
          />

          <View style={styles.saveButtonContainer}>
            <SaveButton title={"Save"} onPress={handleEditProfile} />
          </View>
        </View>

        <View>
          <Text style={styles.infoTitle}>Daily Macros Goal</Text>

          <View style={styles.inputContainer}>
            <DailyMacrosTextInput
              infoType="Calories"
              value={"100"}
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
              value={"100"}
              onChangeText={(text) =>
                setEditMacrosGoal({ ...editMacrosGoal, fat: parseInt(text) })
              }
              autoCapitalize="none"
              autoCorrect={false}
              measurement="Grams"
            />
            <DailyMacrosTextInput
              infoType="Protein"
              value={"100"}
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
              infoType="Carb"
              value={"100"}
              onChangeText={(text) =>
                setEditMacrosGoal({
                  ...editMacrosGoal,
                  calories: parseInt(text),
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

export default ProfileScreen;
