import React, { useContext } from "react";
import styled from "styled-components";
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

export default function Months({ months, click }) {
  return months.map((months, i) => (
    <MonthBox key={i}>
      <button
        onClick={(e) => click(months.title)}
        className={months.inOpened ? "test" : ""}
      >
        {months.title}
      </button>
    </MonthBox>
  ));
}
