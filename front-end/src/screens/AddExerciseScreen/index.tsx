import React, { FC, useMemo, useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles, { StyleSheetProps } from "./styles";
import { Appbar } from "react-native-paper";
import SaveButton from "../../components/SaveButton";
import Spinner from "react-native-loading-spinner-overlay/lib";
import useAuthSelect from "../../providers/auth";
import { ExerciseType } from "../../models";
import useDailyEntrySelect from "../../providers/dailyEntry";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const AddExerciseScreen: FC<IProps> = ({ navigation }: IProps) => {
  const styles: StyleSheetProps = useMemo(() => createStyles(), []);

  const { isLoading } = useAuthSelect();

  const [exerciseInfo, setExerciseInfo] = useState({
    name: "",
    sets: 0,
    reps: 0,
    weight: 0,
  });

  const onSubmit: () => void = async () => {
    if (
      exerciseInfo.name.trim().length < 1 ||
      exerciseInfo.sets.toString().trim().length < 1 ||
      exerciseInfo.reps.toString().trim().length < 1 ||
      exerciseInfo.weight.toString().trim().length < 1
    ) {
      Alert.alert("Alert", "Please enter all required value");
      return;
    }

    Alert.alert("Success", "Exercise Added");

    new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
      return Promise.resolve();
    });

    navigation.goBack();
  };

  return (
    <View style={styles.body}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Add Exercise" />
      </Appbar.Header>

      <Spinner visible={isLoading} />

      <View style={styles.formContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Exercise</Text>
          <TextInput
            style={styles.textInput}
            placeholder={"Required"}
            placeholderTextColor={"#6A6A6A"}
            onChangeText={(text) =>
              setExerciseInfo({ ...exerciseInfo, name: text })
            }
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>Sets</Text>
          <TextInput
            style={styles.textInput}
            placeholder={"Required"}
            placeholderTextColor={"#6A6A6A"}
            onChangeText={(text) =>
              setExerciseInfo({ ...exerciseInfo, sets: parseInt(text) })
            }
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>Reps</Text>
          <TextInput
            style={styles.textInput}
            placeholder={"Required"}
            placeholderTextColor={"#6A6A6A"}
            onChangeText={(text) =>
              setExerciseInfo({ ...exerciseInfo, reps: parseInt(text) })
            }
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>Weight</Text>
          <TextInput
            style={styles.textInput}
            placeholderTextColor={"#6A6A6A"}
            placeholder={"Required"}
            onChangeText={(text) =>
              setExerciseInfo({ ...exerciseInfo, weight: parseInt(text) })
            }
          />
        </View>

        <View style={styles.saveButton}>
          <SaveButton title={"Add"} onPress={onSubmit} disabled={false} />
        </View>
      </View>
    </View>
  );
};

export default AddExerciseScreen;
