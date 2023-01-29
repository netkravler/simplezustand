import React from "react";
import { ModalStyled } from "./Modal.Styled";
import { useModalStore } from "./useModalStore";

const Modal = () => {
  const { toggleModal, setToggleModal, modalPayload } = useModalStore();

  return (
    <ModalStyled showmodal={toggleModal}>
      <main>
        <span>
          <button onClick={() => setToggleModal("none")}>&times;</button>
        </span>
        <div>{modalPayload}</div>
      </main>
    </ModalStyled>
  );
};

export default Modal;
