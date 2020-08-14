import React, { useContext } from "react";
import styled from "styled-components";
import DateContext from "../contexts/date";

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
    color: #eeeeee;
    outline: 0;

    &:hover {
      background-color: #181818;
    }
  }
`;

export default function Months() {
  const state = useContext(DateContext);
  const click = (title, e) => {
    state.actions.setInOpened(true);
    console.log(state.state);
  };

  return state.state.map(({ title }, i) => (
    <MonthBox>
      <button key={i} onClick={(e) => click(title, e)}>
        {title}
      </button>
    </MonthBox>
  ));
}
