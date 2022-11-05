import useAuthSelect from "../providers/auth";

export const numToMonth: (
  num: string
) =>
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug"
  | "Sep"
  | "Oct"
  | "Nov"
  | "Dec" = (num: string) => {
  switch (num) {
    case "01":
      return "Jan";
    case "02":
      return "Feb";
    case "03":
      return "Mar";
    case "04":
      return "Apr";
    case "05":
      return "May";
    case "06":
      return "Jun";
    case "07":
      return "Jul";
    case "08":
      return "Aug";
    case "09":
      return "Sep";
    case "10":
      return "Oct";
    case "11":
      return "Nov";
    case "12":
      return "Dec";
    default:
      throw new Error("Invalid month");
  }
};
// let dateNum: { date: number; weight: number }[] = [];
// userInfo.dailyEntry.map((item) => {
//   const dateInfo = item.date as string;
//   dateNum.push({
//     date: parseInt(dateInfo.replaceAll("-", "")),
//     weight: item.weight as number,
//   });
// });

// const sortedDate = dateNum.sort((a, b) => {
//   return a.date - b.date;
// });

// let weight: number[] = [];
// const getWeight = async () => {
//   let prev = 0;

//   for (let i = 0; i < sortedDate.length - 1; i++) {
//     console.log(parseInt(sortedDate[i].date.toString().slice(-2)));
//     if (parseInt(sortedDate[i].date.toString().slice(-2)) > prev) {
//       console.log("here");
//       prev = parseInt(sortedDate[i].date.toString().slice(-2));
//       weight.push(sortedDate[i].weight);
//     }
//   }
// };
// getWeight();

// const month: string[] = [];

// let monthSet: Set<string> = new Set();
// sortedDate.map((entry) => {
//   const date = entry.date.toString();
//   monthSet.add(date.slice(4, 6));
// });

// monthSet.forEach((item) => {
//   month.push(numToMonth(item));
// });
