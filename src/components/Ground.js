import { usePlane } from "@react-three/cannon";
import { grassTex } from "../images/textures";
import { useStore } from "../hooks/useStore";

export const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));

  const [addCube] = useStore((state) => [state.addCube]);

  return (
    <mesh
      onClick={(e) => {
        e.stopPropagation();
        const [x, y, z] = Object.values(e.point).map((e) => Math.ceil(e));
        // console.log(x, y, z);
        addCube(x, y, z);
        // debugger
      }}
      ref={ref}
    >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={grassTex} />
    </mesh>
  );
};
