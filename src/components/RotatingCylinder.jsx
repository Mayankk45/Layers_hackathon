import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const RotatingCylinder = () => {
    const texture = useLoader(
        THREE.TextureLoader,
        "./modelSectionImages/watch-strip.png"
    ); // Make sure it's in public/
    const meshRef = useRef();

    return (
        <mesh ref={meshRef}>
            <cylinderGeometry args={[1, 1, 1, 64, 1, true]} />
            <meshStandardMaterial
                map={texture}
                roughness={0.05}
                metalness={0.7}
                side={THREE.DoubleSide}
                transparent
            />
        </mesh>
    );
};

export default RotatingCylinder;
