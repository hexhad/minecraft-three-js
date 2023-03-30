import React from "react";
import './App.css'
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/Player";
import { FirstPersionView } from "./components/FirstPersionView";
import { Cubes } from "./components/Cubes";
import { TextureSelector } from "./components/TextureSelector";
import { Menu } from "./components/Menu.js";
import { TemplateMenu } from "./components/TemplateMenu";

export default function App() {
  return (
    <>
      {/* <div>outside canvas</div> */}
      <Canvas>
        <Sky sunPosition={[200, 200, 200]} />
        <ambientLight intensity={0.5} />
        <FirstPersionView/>
        <Physics>
          <Player/>
          <Cubes/>
          <Ground />
        </Physics>
      </Canvas>
      <div className="middle-target">+</div>
      <TextureSelector/>
      <Menu/>
      <TemplateMenu/>
    </>
  );
}
