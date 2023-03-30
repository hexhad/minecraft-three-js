import React from "react";
import "./styles/TemplateMenu.css";
import { temp } from "./utils/firebase";

import { useStore } from "../hooks/useStore";

export const TemplateMenu = () => {
  const [setWorld] = useStore((state) => [state.setWorld]);
  const changeWorld = (e) => {
    setWorld(e);
  };

  return (
    <div className="temp-menu">
      <div>
        <p className="temp-text">TemplateMenu</p>
        <div className="temp-select">
        {temp.map((e,i) => (
          <button key={i} className="temp-btn" onClick={() => changeWorld(e)}>
            Template {i}
          </button>
        ))}
        </div>
      </div>
    </div>
  );
};
