import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DateContext from "../contexts/date";

const MonthBox = styled.button`
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
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #eeeeee;
`;

export default function Months() {
  const state = useContext(DateContext);
  const click = (title, e) => {
    state.actions.setInOpened(true);
    console.log(state.state);
  };

  return state.state.map(({ title }, i) => (
    <MonthBox key={i} onClick={(e) => click(title, e)}>
      {title}
    </MonthBox>
  ));
}
