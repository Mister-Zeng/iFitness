import moment from "moment";
import { DailyEntryType, DailyMacrosType, MacrosGoalType } from "../models";

const dailyMacrosConstant: DailyMacrosType = {
  id: 0,
  protein: 0,
  carbs: 0,
  fat: 0,
  calories: 0,
};

const macrosGoalConstant: MacrosGoalType = {
  id: 0,
  protein: 0,
  carbs: 0,
  fat: 0,
  calories: 0,
};

const dailyEntryConstant: DailyEntryType = {
  id: 0,
  date: moment(new Date()).format("YYYY-MM-DD"),
  dailyMacros: {
    id: 0,
    carbs: 0,
    calories: 0,
    fat: 0,
    protein: 0,
  },
  weight: 0,
  exercise: [],
  isTodayCreated: false,
};

export { dailyMacrosConstant, dailyEntryConstant, macrosGoalConstant };
