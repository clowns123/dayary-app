import React, { createContext, useState } from "react";

const DateContext = createContext({
  state: { publishedDate: new Date(), message: "", userName: "" },
  action: {
    setPublishedDate: () => {},
    setMessage: () => {},
    setUserName: () => {},
  },
});

const DateProvider = ({ children }) => {
  const [publishedDate, setPublishedDate] = useState(new Date());
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const value = {
    state: { publishedDate, message, userName },
    action: { setPublishedDate, setMessage, setUserName },
  };

  return <DateContext.Provider value={value}></DateContext.Provider>;
};

const { Consumer: DateConsumer } = DateContext;

export { DateProvider, DateConsumer };
export default DateContext;
