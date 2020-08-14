import React from "react";
import { Link } from "react-router-dom";
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

const Ul = styled.ul`
  background-color: ;
  padding: 15.5px 20px;
  list-style: none;

  button {
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
    font-color: #ffffff;
    cursor: pointer;
    outline: 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #eeeeee;
`;

export default function Days({ getDate }) {
  return (
    <DaysBox>
      <Ul>
        <button>
          <StyledLink>Day</StyledLink>
        </button>
      </Ul>
    </DaysBox>
  );
}
