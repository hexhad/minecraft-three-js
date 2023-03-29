import React, { useState } from "react";
import { useBox } from "@react-three/cannon";
import * as textures from "../images/textures";
import { useStore } from "../hooks/useStore";

export const Cube = ({ texture, position }) => {
  const [isHovered, setIsHovered] = useState(false);

  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));
  const [addCube, removeCube] = useStore((state) => [
    state.addCube,
    state.removeCube,
  ]);

  const activeTex = textures[texture + "Tex"];

  return (
    <mesh
      ref={ref}
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        const { x, y, z } = ref.current.position;
        const clickedFace = Math.floor(e.faceIndex / 2);
        // console.log("FACE", clickedFace);
        if (e.altKey) {
          removeCube(x, y, z);
          return;
        } else if (clickedFace === 0) {
          addCube(x + 1, y, z);
          return;
        } else if (clickedFace === 1) {
          addCube(x - 1, y, z);
          return;
        } else if (clickedFace === 2) {
          addCube(x, y + 1, z);
          return;
        } else if (clickedFace === 3) {
          addCube(x, y - 1, z);
          return;
        } else if (clickedFace === 4) {
          addCube(x, y, z + 1);
          return;
        } else if (clickedFace === 5) {
          addCube(x, y, z - 1);
          return;
        } else {
          console.log("WOOO!! XD");
        }
      }}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial
        map={activeTex}
        attach="material"
        color={isHovered ? "gray" : "white"}
        transparent={true}
        opacity={texture === "glass" && 0.7}
      />
    </mesh>
  );
};
