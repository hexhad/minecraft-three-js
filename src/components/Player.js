import { useFrame, useThree } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { useRef, useEffect } from "react";
import { Vector3 } from "three";
import { useKeyboard } from "../hooks/useKeyboard";
const JUMP_FORCE = 3;
const SPEED = 3;

export const Player = () => {
  const { moveForward, moveBackward, moveLeft, moveRight, jump } =
    useKeyboard();
  //   console.log(
  //     "actions",
  //     Object.entries(actions).filter(([k, v]) => v)
  //   );

  const { camera } = useThree();

  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 1, 0],
  }));

  const velo = useRef([0, 0, 0]);

  useEffect(() => {
    api.velocity.subscribe((vel) => (velo.current = vel));
  }, [api.velocity]);

  const posi = useRef([0, 0, 0]);

  useEffect(() => {
    api.position.subscribe((pos) => (posi.current = pos));
  }, [api.position]);

  useFrame(() => {
    camera.position.copy(
      new Vector3(posi.current[0], posi.current[1], posi.current[2])
    );

    const direction = new Vector3();

    const frontVector = new Vector3(
      0,
      0,
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
    );

    const sideVector = new Vector3(
      (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
      0,
      0
    );

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, velo.current[1], direction.z);

    if (jump && Math.abs(velo.current[1]) < 0.05) {
      api.velocity.set(velo.current[0], JUMP_FORCE, velo.current[2]);
    }
  });

  return <mesh ref={ref}></mesh>;
};
