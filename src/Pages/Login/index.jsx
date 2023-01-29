import React from "react";
import { useModalStore } from "../../Components/Modal/useModalStore";

import { useLoginStore } from "./useLoginStore";

const Login = () => {
  const { setLoggedIn } = useLoginStore();
  const { setToggleModal } = useModalStore();

  return (
    <>
      <h2>Login</h2>
      <fieldset>
        <button
          onClick={() => {
            setLoggedIn({ fornavn: "mig selv" });
            setToggleModal("none");
          }}
        >
          Log in
        </button>
      </fieldset>
      <p>Her kan du logge ind, der på ingen måde taget hensy til sikkerhed, udelukkende for at vise hvordan man kan bruge globale ændringer i state</p>
    </>
  );
};

export default Login;
