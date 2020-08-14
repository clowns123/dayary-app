import React from "react";
import Months from "../components/Months";

export default function MonthsContainer() {
  const months = [];

  for (let i = 0; i <= 11; i++) {
    let nowMonth = new Date(2020, i);
    const options = { month: "short" };
    let month = {
      title: new Intl.DateTimeFormat("en-US", options).format(nowMonth),
      inOpened: false,
    };
    months.push(month);
    console.log(month);
  }
  return <Months months={months} />;
}
