import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const RotateHandSection = () => {
    const [angle, setAngle] = useState(0);
    const [showCustomCursor, setShowCustomCursor] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });

            const circle = document.querySelector(".circle");
            const rect = circle.getBoundingClientRect();

            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;

            const angleDeg = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setAngle(angleDeg + 90);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            data-scroll
            data-scroll-section
            data-scroll-speed="-.7"
            className="rotateHand_Section"
        >
            <div
                className="rotateHand_bg"
                onMouseEnter={() => setShowCustomCursor(true)}
                onMouseLeave={() => setShowCustomCursor(false)}
            >
                {showCustomCursor && (
                    <div
                        className="setShowCustomCursor"
                        style={{
                            top: `${mousePos.y}px`,
                            left: `${mousePos.x}px`,
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        Layer
                    </div>
                )}

                <div className="rotateHand_img">
                    <img
                        src="/watchHandSectionAsset/watchRotateHand.jpg"
                        alt=""
                    />

                    <div className="circle">
                        <div
                            className="handContainer"
                            style={{
                                transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                            }}
                        >
                            <img
                                src="/watchHandSectionAsset/watchArrow.png"
                                alt="Arrow"
                            />
                        </div>
                    </div>
                </div>
                <div className="text_container">
                    <motion.p
                        className="text"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        TIME
                    </motion.p>
                    <motion.p
                        className="text"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        IS
                    </motion.p>
                    <motion.p
                        className="text"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.7, duration: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        YOURS
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default RotateHandSection;
