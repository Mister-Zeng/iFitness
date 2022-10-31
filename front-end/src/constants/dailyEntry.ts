import moment from "moment";
import { DailyEntryType, MacrosType } from "../models";

const macrosConstant: MacrosType = {
  protein: 0,
  carbs: 0,
  fat: 0,
  calories: 0,
};

const dailyEntryConstant: DailyEntryType = {
  date: moment(new Date()).format("YYYY-MM-DD"),
  dailyMacros: {
    carbs: 10,
    calories: 0,
    fat: 0,
    protein: 0,
  },
  weight: 0,
  exercise: [],
};

export { macrosConstant, dailyEntryConstant };
