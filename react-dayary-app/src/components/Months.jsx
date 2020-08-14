import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DateContext, { DateProvider } from "../contexts/date";

const MonthBox = styled.div`
  display: inline-block;
  position: relative;
  left: 160px;
  margin-top: 11px;
  padding: 20px 5px;

  button {
    display: inline-block;
    background-color: #311d3f;
    width: 50px;
    height: 50px;
    border: none;
    margin: 5px 20px;
    cursor: pointer;
    border-radius: 25px;
    outline: 0;

    &:hover {
      background-color: #181818;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #eeeeee;
`;

export default function Months() {
  const state = useContext(DateContext);
  console.log();
  const click = (title, e) => {
    state.state.months = state.state.months.map((s) => {
      return title === s.title
        ? { ...s, inOpened: true }
        : { ...s, inOpened: false };
    });
    console.log(state.state.months);
  };


  return state.state.months.map(({ title }, i) => (
    <MonthBox key={i} onClick={(e) => click(title, e)}>
      {title}
    </MonthBox>
  ));
}
