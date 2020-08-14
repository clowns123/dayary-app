import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import MonthsContainer from "../containers/MonthsContainer";
import DaysContainer from "../containers/DaysContainer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

export default function Main() {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer />
      <MonthsContainer />
      <DaysContainer />
    </>
  );
}
