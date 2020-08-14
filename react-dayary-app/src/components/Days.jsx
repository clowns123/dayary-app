import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

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

let num = 0;
export default function Days({ months, lastDay }) {
  let obj = [];
  for (let i = 1; i <= lastDay; i++) {
    obj = [...obj, { [`${i}`]: i }];
  }
  const click = (num) => {
    console.log(num);
  };
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (n) => {
    num = n;
    setModalVisible(true);
  };

  const closeModal = () => {
    console.log("close");
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
            {num}
            <input autoFocus></input>
          </Modal>
        )}

        {obj.map((o, i) => {
          return (
            <DayListItem key={o} onClick={() => openModal(i + 1)}></DayListItem>
          );
        })}
      </DayList>
    </DaysBox>
  );
}
