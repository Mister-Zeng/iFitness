import moment from "moment";

const userInfoConstants = {
  firstName: "",
  lastName: "",
  username: "",
  emailAddress: "",
  password: "",
  role: "user",
  token: "",
  dailyEntry: [
    {
      date: moment(new Date()).format("YYYY-MM-DD"),
      weight: 0,
      dailyMacros: {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
      },
      exercise: [
        {
          name: "",
          sets: 0,
          reps: 0,
          weight: 0,
        },
      ],
    },
  ],
  macrosGoal: { calories: 0, protein: 0, carbs: 0, fat: 0 },
};

export { userInfoConstants };
