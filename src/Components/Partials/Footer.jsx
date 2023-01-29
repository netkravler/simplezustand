import React from "react";
import { useLoginStore } from "../../Pages/Login/useLoginStore";

const Footer = () => {
  const { loggedIn } = useLoginStore();
  return <div>{loggedIn ? "Mine fødder er også private" : "Footer"}</div>;
};

export default Footer;
