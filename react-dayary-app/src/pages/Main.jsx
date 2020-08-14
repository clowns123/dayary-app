import React, { useState, useEffect } from "react";
import HeaderContainer from "../containers/HeaderContainer";
import MonthsContainer from "../containers/MonthsContainer";
import DaysContainer from "../containers/DaysContainer";
import styled, { createGlobalStyle } from "styled-components";
import Modal from "../components/Modal";

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
const setInitData = () => {
  const temp = [];
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
    temp.push(month);
  }
  return temp;
};

export default function Main() {
  const [months, setMonths] = useState([]);
  useEffect(() => {
    setMonths(setInitData);
  }, []);

  const click = (title) => {
    const temp = months.map((month) => {
      return month.title === title
        ? { ...month, inOpened: true }
        : { ...month, inOpened: false };
    });
    setMonths([...temp]);
  };

  const viewDay = months.filter((month) => {
    return month.inOpened === true;
  });

  const now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth();
  const lastDay = viewDay[0]
    ? viewDay[0].day
    : new Date(nowYear, nowMonth, 0).getDate();

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    console.log("open");
    setModalVisible(true);
  };
  const closeModal = () => {
    console.log("close");
    setModalVisible(false);
  };

  return (
    <>
      <GlobalStyle />
      <MainBlock>
        <HeaderContainer />
        <MonthsContainer months={months} click={click} lastDay={lastDay} />
        <DaysContainer months={months} lastDay={lastDay} />
      </MainBlock>
    </>
  );
}
