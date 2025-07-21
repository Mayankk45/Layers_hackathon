import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import RotatingCylinder from "./RotatingCylinder";
import { Suspense } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { motion } from "framer-motion";

const ModelSection = () => {
    return (
        <div data-scroll data-scroll-speed="-.4" className="model_section">
            <div className="left_view">
                <div className="left_heading">
                    <div className="banner">
                        <motion.img
                            initial={{ width: 0 }}
                            animate={{ width: 220 }}
                            transition={{ duration: 1.2 }}
                            src="./modelSectionImages/img.jpg"
                            alt=""
                        />
                    </div>
                    <h1>LAYERS</h1>
                </div>
                <p>powerful. accurate. unique.</p>
            </div>

            <div className="right_view" style={{ flex: 2 }}>
                <Canvas
                    shadows
                    camera={{ position: [1, 1, 5], fov: 35 }}
                    gl={{
                        antialias: true,
                        toneMapping: THREE.ReinhardToneMapping,
                        outputEncoding: THREE.sRGBEncoding,
                    }}
                >
                    <ambientLight intensity={1} color="#ffffff" />

                    <directionalLight
                        position={[0, 0, 9]}
                        intensity={3}
                        color={"#ffffff"}
                        castShadow
                    />

                    {/* left-front light*/}
                    <directionalLight
                        position={[-4, 3, 5]}
                        intensity={3.5}
                        color={"#fff1d0"}
                    />

                    {/* goldish light effect*/}
                    <pointLight
                        position={[2, 2, -4]}
                        intensity={2.8}
                        color={"#ffc68a"}
                    />

                    {/* Strong front spotlight */}
                    <spotLight
                        position={[0, 2, 5]}
                        angle={0.3}
                        penumbra={1}
                        intensity={4}
                        color={"#ffffff"}
                    />

                    <Suspense fallback={null}>
                        <RotatingCylinder />

                        {/* Bloom Glow */}
                        <EffectComposer>
                            <Bloom
                                intensity={3.5}
                                luminanceThreshold={0.05}
                                luminanceSmoothing={0.6}
                                mipmapBlur
                            />
                        </EffectComposer>
                    </Suspense>

                    {/* Auto Rotate */}
                    <OrbitControls
                        enableDamping
                        dampingFactor={0.1}
                        autoRotate
                        autoRotateSpeed={1.2}
                        enableZoom={true}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={0}
                    />
                </Canvas>
            </div>
        </div>
    );
};

export default ModelSection;
