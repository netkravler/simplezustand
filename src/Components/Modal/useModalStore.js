import { create } from "zustand";

export const useModalStore = create((set) => ({
  toggleModal: "grid",
  modalPayload: null,
  setToggleModal: (toggleVal) => set(() => ({ toggleModal: toggleVal, modalPayload: null })),
  setModalPayload: (modalPayload) => set(() => ({ toggleModal: "block", modalPayload: modalPayload })),
}));
