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
  state: months,
  actions: {
    setInOpened: () => {},
  },
});

const DateProvider = ({ children }) => {
  const [inOpened, setInOpened] = useState(false);
  const value = {
    state: inOpened,
    actions: setInOpened,
  };

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

const { Consumer } = DateContext;

export { DateProvider, Consumer };
export default DateContext;
