import React from "react";
import styled from "styled-components";

const HeaderBox = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Monoton&family=Roboto&display=swap");
  display: relative;
  background-color: #c3bef0;
  width: 100%;
  height: 7.5em;
  margin: 0;
  background-size: 40px 40px;
  background-image: linear-gradient(to right, #cca8e9 1px, transparent 1px),
    linear-gradient(to bottom, #cca8e9 1px, transparent 1px);

  h1 {
    font-family: "Major Mono Display", monospace;
    display: inline-block;
    font-weight: 900;
    font-size: 2.5em;
    position: relative;
    top: 5px;
    left: 40px;
    justify-content: center;
    color: #521262;
  }

  h2 {
    font-family: "Major Mono Display", monospace;
    display: inline-block;
    font-size: 2.5em;
    position: absolute;
    top: 3px;
    right: 5px;
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
