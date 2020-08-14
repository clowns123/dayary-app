import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import client from "../lib/api/client";
import DateContext, { DateProvider } from "../contexts/date";

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
  font-family: "Major Mono Display", monospace;
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

const StyledInput = styled.input`
  text-align: left;
  width: 210px;
  height: 100px;
  letter-spacing: 1px;
  wrap: hard;
  margin-right: 10px;
`;

const SaveButton = styled.button`
  outline: none;
  border: none;
`;
let num = 0;
export default function Days({ months, lastDay }) {
  let obj = [];
  for (let i = 1; i <= lastDay; i++) {
    obj = [...obj, { [`${i}`]: i }];
  }
  const [modalVisible, setModalVisible] = useState(false);
  const a = useContext(DateContext);
  const openModal = async (n) => {
    if (n < 10) n = `${0}${n}`;

    const res = await client.get("/api/posts");
    const data = res.data.filter((d) => {
      return d.publishedDate.slice(8, 10) === n;
    });
    const message = data[0];
    if (message !== undefined) {
      a.state.message = message.message;
      setModalVisible(true);
    } else {
      a.state.publishedDate = `2020-08-${n}`;
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <DaysBox>
      <DayList>
        {modalVisible && (
          <Modal
            visible={modalVisible}
            closable={true}
            maskClosable={true}
            onClose={closeModal}
          >
            {a.state.message}
          </Modal>
        )}

        {obj.map((o, i) => {
          return (
            <DayListItem key={i} onClick={() => openModal(i + 1)}>
              Day {i + 1}
            </DayListItem>
          );
        })}
      </DayList>
    </DaysBox>
  );
}
