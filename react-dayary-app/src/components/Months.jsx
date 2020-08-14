import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MonthBox = styled.div`
  ul {
    margin: 0;
    padding: 30px 20px;
    display: flex;
    justify-content: center;
    background-color: #defcf9;
    background-size: 40px 40px;
    background-image: linear-gradient(to right, #cca8e9 1px, transparent 1px),
      linear-gradient(to bottom, #cca8e9 1px, transparent 1px);
  }

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

export default function Months({ months, isOpened }) {
  return (
    <MonthBox>
      <ul>
        {months.map((month) => (
          <button>
            <StyledLink>{month.title}</StyledLink>
          </button>
        ))}
      </ul>
    </MonthBox>
  );
}
