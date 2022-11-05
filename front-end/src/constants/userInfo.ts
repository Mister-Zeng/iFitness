import moment from "moment";

const userInfoConstants = {
  id: 0,
  firstName: "",
  lastName: "",
  username: "",
  emailAddress: "",
  password: "",
  role: "user",
  token: "",
  dailyEntry: [
    {
      id: 0,
      date: moment(new Date()).format("YYYY-MM-DD"),
      weight: 0,
      dailyMacros: {
        id: 0,
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
      },
      exercise: [
        {
          id: 0,
          name: "",
          sets: 0,
          reps: 0,
          weight: 0,
        },
      ],
    },
  ],
  macrosGoal: { id: 0, calories: 0, protein: 0, carbs: 0, fat: 0 },
};

export { userInfoConstants };
