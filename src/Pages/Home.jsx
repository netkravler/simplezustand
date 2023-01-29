import React from "react";
import { useLoginStore } from "./Login/useLoginStore";

const Home = () => {
  const { loggedIn } = useLoginStore();
  return <div>{loggedIn ? "Mit private hjem" : "Home"}</div>;
};

export default Home;
