import React from "react";
import styled from "styled-components";

const HeaderBox = styled.div`
  background-color: #c3bef0;
  height: 7.5em;
  margin: 0;
  background-size: 40px 40px;
  background-image: linear-gradient(to right, #cca8e9 1px, transparent 1px),
    linear-gradient(to bottom, #cca8e9 1px, transparent 1px);

  h1 {
    display: inline-block;
    font-size: 2.5em;
    position: relative;
    top: 30px;
    left: 40px;
    justify-content: center;
    color: #521262;
  }

  h2 {
    display: inline-block;
    font-size: 2.5em;
    position: absolute;
    top: 30px;
    right: 40px;
    justify-content: center;
    color: #521262;
  }
`;

export default function Header() {
  return (
    <HeaderBox>
      <h1>Dayary &nbsp; {new Date().getFullYear()}</h1>
      <h2>One Line A Day</h2>
    </HeaderBox>
  );
}
