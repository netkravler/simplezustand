import React from "react";
import Login from "../../Pages/Login";
import { useLoginStore } from "../../Pages/Login/useLoginStore";
import { useModalStore } from "../Modal/useModalStore";

const Header = () => {
  const { loggedIn, setLogOut } = useLoginStore();
  const { setModalPayload } = useModalStore();

  return <div> {!loggedIn ? <button onClick={() => setModalPayload(<Login />)}>Log in</button> : <button onClick={() => setLogOut()}>Log ud</button>}</div>;
};

export default Header;
