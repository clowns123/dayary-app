import React from "react";
import Months from "../components/Months";

export default function MonthsContainer({ months, click, lastDay }) {
  return <Months months={months} click={click} lastDay={lastDay} />;
}
