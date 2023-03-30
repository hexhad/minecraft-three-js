import React from "react";
import "./styles/TemplateMenu.css";
import { temp } from "./utils/firebase";

import { useStore } from "../hooks/useStore";

export const TemplateMenu = () => {
  const [setWorld] = useStore((state) =>[ state.setWorld]);
  const changeWorld = () => {
    setWorld(temp);
  };

  return (
    <div className="temp-menu">
      <div>
        <p className="temp-text">TemplateMenu</p>
        <button className="temp-btn" onClick={changeWorld}> Template 1</button>
      </div>
    </div>
  );
};
