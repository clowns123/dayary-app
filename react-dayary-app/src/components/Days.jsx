import React from "react";
import styled from "styled-components";

const DaysBox = styled.div`
  box-sizing: border-box;
  background-color: #defcf9;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  margin: 0 auto;

  background-size: 40px 40px;
  background-image: linear-gradient(to right, #cca8e9 1px, transparent 1px),
    linear-gradient(to bottom, #cca8e9 1px, transparent 1px);
`;

const DayList = styled.div`
  background-color: wheat;
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
  color: #ffffff;
  cursor: pointer;
  outline: 0;
`;

export default function Days({ getDate }) {
  console.log(getDate);
  return (
    <DaysBox>
      <DayList>
        <DayListItem />
      </DayList>
    </DaysBox>
  );
}
