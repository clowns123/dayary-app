import React, { useContext } from "react";
import styled from "styled-components";
import DateData from "../App";

const DaysBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  margin: 0 auto;
`;

const DayList = styled.div`
  padding: 15.5px 20px;
  list-style: none;
`;

const DayListItem = styled.button`
  text-decoration: none;
  color: #eeeeee;

  display: block;
  background-color: #521262;
  width: 50px;
  height: 50px;
  margin: 20px 0;
  border-radius: 25px;
  display: table;
  margin-left: auto;
  margin-right: auto;
  border-style: none;
  cursor: pointer;
  outline: 0;
`;

export default function Days({ getDate, click }) {
  return (
    <DaysBox>
      <DayList>
        <DayListItem onClick={click} />
      </DayList>
    </DaysBox>
  );
}
