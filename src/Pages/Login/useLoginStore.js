import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import useFlashMessageStore from "../../Components/FlashMessages/useFlashMessageStore";

export const useLoginStore = create(
  persist(
    (set) => ({
      loggedIn: false,
      user: "",
      setLoggedIn: (user) =>
        set(() => {
          useFlashMessageStore.getState().setFlashMessage("Du er logged in");
          return { loggedIn: true, user: user };
        }),
      setLogOut: () =>
        set(() => {
          useFlashMessageStore.getState().setFlashMessage("Du er logged out");
          return { loggedIn: false, user: "" };
        }),
    }),
    { name: "kraenToken", storage: createJSONStorage(() => localStorage) }
  )
);
