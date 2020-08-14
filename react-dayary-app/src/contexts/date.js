import React from "react";
const { createContext, useState } = require("react");

const months = [];

for (let i = 0; i <= 11; i++) {
  let nowMonth = new Date(2020, i);
  let lastDay = new Date(2020, `${i + 1}`, 0);
  lastDay = lastDay.getDate();
  const options = { month: "short" };
  let month = {
    title: new Intl.DateTimeFormat("en-US", options).format(nowMonth),
    day: lastDay,
    inOpened: i === new Date().getMonth() ? true : false,
  };
  months.push(month);
}

const DateContext = createContext({
  state: { months },
  action: {
    setMonths: () => {},
  },
});

const DateProvider = ({ children }) => {
  const [state, setState] = useState(months);

  const value = {
    state: { state },
    action: { setState },
  };

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

const { Consumer } = DateContext;

export { DateProvider, Consumer };
export default DateContext;
