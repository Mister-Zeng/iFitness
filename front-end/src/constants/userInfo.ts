import moment from "moment";

const userInfoConstants = {
  userId: 0,
  firstName: "",
  lastName: "",
  username: "",
  emailAddress: "",
  password: "",
  role: "user",
  token: "",
  dailyEntry: [
    {
      dailyEntryId: 0,
      date: moment(new Date()).format("YYYY-MM-DD"),
      weight: 0,
      dailyMacros: {
        dailyMacrosId: 0,
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
      },
      exercise: [
        {
          exerciseId: 0,
          name: "",
          sets: 0,
          reps: 0,
          weight: 0,
        },
      ],
    },
  ],
  macrosGoal: { macrosGoalId: 0, calories: 0, protein: 0, carbs: 0, fat: 0 },
};

export { userInfoConstants };
