import React, { useRef, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import client from "../lib/api/client";
import DateContext from "../contexts/date";

function Modal({ className, onClose, maskClosable, visible, children }) {
  const a = useContext(DateContext);
  const onMaskClick = (e) => {
    a.state.message = "";
    onClose(e);
  };

  const enter = async (e) => {
    if (e.keyCode !== 13) {
      return;
    }
    await client.post("/api/posts", {
      message: changeRef.current.value,
      publishedDate: a.state.publishedDate,
    });

    onClose(e);
  };

  const changeRef = useRef();
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        {children === "" ? (
          <ModalInner tabIndex="0" className="modal-inner">
            <input autoFocus ref={changeRef} onKeyDown={enter}></input>
          </ModalInner>
        ) : (
          <ModalInner tabIndex="0" className="modal-inner">
            {children}
          </ModalInner>
        )}
      </ModalWrapper>
    </>
  );
}

Modal.propTypes = {
  visible: PropTypes.bool,
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #311d3f;
  opacity: 0.7;
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

export default Modal;
