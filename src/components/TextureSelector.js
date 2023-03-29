import React, { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";
import { useKeyboard } from "../hooks/useKeyboard";
import "./styles/TextureSelectorStyles.css";
import { dirt, grass, glass, wood, log } from "../images/index";

const images = { dirt, grass, glass, wood, log };
export const TextureSelector = () => {
  const [visible, setVisible] = useState(false);
  const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture])

  const { dirt, grass, glass, wood, log } = useKeyboard();

  useEffect(() => {
    const textures = {
      dirt,
      grass,
      glass,
      wood,
      log,
    };
    const pressedTexture = Object.entries(textures).find(([k, v]) => v);
    if (pressedTexture) {
    //   console.log(pressedTexture[0]);
      setTexture(pressedTexture[0]);
    }
  }, [setTexture, dirt, grass, glass, wood, log]);

  useEffect(() => {
    // console.log("activeTexture", activeTexture);
    const visibilityTimeout = setTimeout(() => {
      setVisible(false);
    }, 2000);
    setVisible(true);
    return () => {
      clearTimeout(visibilityTimeout);
    };
  }, [activeTexture]);

  return (
    visible && (
      <div className="tex-visible">
        {Object.entries(images).map(([k, src]) => {
          return (
            <img
              key={k}
              src={src}
              alt={k}
              className={activeTexture === k && "active"}
            />
          );
        })}
      </div>
    )
  );
};
