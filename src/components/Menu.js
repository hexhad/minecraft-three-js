import React from "react";
import { useStore } from "../hooks/useStore";
import "./styles/MenuStyles.css";

export const Menu = () => {
  const [saveWorld, resetWorld] = useStore((state) => [
    state.saveWorld,
    state.resetWorld,
  ]);

  return (
    <div className="menu">
      <button onClick={()=>resetWorld()}>Reset</button>
      <button onClick={()=>saveWorld()}>Save</button>
      <button>use W,A,S,D,LSHIFT Keys and Mouse to move </button>
    </div>
  );
};
