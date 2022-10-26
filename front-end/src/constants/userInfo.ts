const userInfoConstants = {
  id: 0,
  first_name: "",
  last_name: "",
  username: "",
  email_address: "",
  password: "",
  role: "user",
  token: "",
  daily_entry: [
    {
      id: 0,
      date: new Date(),
      weight: 0,
      macros: {
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
  macros_goal: { calories: 0, protein: 0, carbs: 0, fat: 0 },
};

export { userInfoConstants };
