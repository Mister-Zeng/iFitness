import moment from "moment";
import { DailyEntryType, DailyMacrosType, MacrosGoalType } from "../models";

const dailyMacrosConstant: DailyMacrosType = {
  dailyMacrosId: 0,
  protein: 0,
  carbs: 0,
  fat: 0,
  calories: 0,
};

const macrosGoalConstant: MacrosGoalType = {
  macrosGoalId: 0,
  protein: 0,
  carbs: 0,
  fat: 0,
  calories: 0,
};

const dailyEntryConstant: DailyEntryType = {
  dailyEntryId: 0,
  date: moment(new Date()).format("YYYY-MM-DD"),
  dailyMacros: {
    dailyMacrosId: 0,
    carbs: 10,
    calories: 0,
    fat: 0,
    protein: 0,
  },
  weight: 0,
  exercise: [],
};

export { dailyMacrosConstant, dailyEntryConstant, macrosGoalConstant };
