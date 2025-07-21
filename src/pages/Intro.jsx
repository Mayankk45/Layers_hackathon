import { useEffect } from "react";
import { motion } from "framer-motion";

const Intro = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 10000);
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <motion.div
            className="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="intro_video">
                <video src="./watch.mp4" autoPlay muted loop playsInline />
            </div>
            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                Welcome to{" "}
                {"Smartwatch".split("").map((letter, idx) => (
                    <motion.span
                        key={idx}
                        style={{ display: "inline-block" }}
                        animate={{
                            y: [0, -3, 0.5, 3, -0.5, 0],
                        }}
                        transition={{
                            duration: 2.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: idx * 0.12,
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}{" "}
                World
            </motion.h1>

            {/* Loader */}
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </motion.div>
    );
};

export default Intro;
