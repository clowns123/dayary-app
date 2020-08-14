import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import MonthsContainer from "../containers/MonthsContainer";
import DaysContainer from "../containers/DaysContainer";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  `;

const MainBlock = styled.div`
  background-color: #defcf9;
  background-size: 40px 40px;
  background-image: linear-gradient(to right, #cca8e9 1px, transparent 1px),
    linear-gradient(to bottom, #cca8e9 1px, transparent 1px);
  height: 2000px;
`;

export default function Main() {
  return (
    <>
      <GlobalStyle />
      <MainBlock>
        <HeaderContainer />
        <MonthsContainer />
        <DaysContainer />
      </MainBlock>
    </>
  );
}
