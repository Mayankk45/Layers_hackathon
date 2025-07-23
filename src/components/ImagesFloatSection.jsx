import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ImagesFloatSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            const isMobileView = window.innerWidth <= 768;
            setIsMobile(isMobileView);
        };
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const positions = [
        { x: -250, y: -180, src: "./floatSectionAsset/img1.jpg" },
        { x: 500, y: 10, src: "./floatSectionAsset/img2.jpg" },
        { x: -250, y: 180, src: "./floatSectionAsset/img3.jpg" },
        { x: 250, y: 180, src: "./floatSectionAsset/img4.jpg" },
        { x: -500, y: -10, src: "./floatSectionAsset/img5.jpg" },
        { x: 250, y: -180, src: "./floatSectionAsset/img6.jpg" },
    ];

    const [audioEnabled, setAudioEnabled] = useState(false);

    const enableAudio = (input) => {
        if (input == "unmute") setAudioEnabled(true);
        else setAudioEnabled(false);
    };
    return (
        <div
            className="imageFloat_section"
            data-scroll
            data-scroll-section
            data-scroll-speed="-0.01"
        >
            <div className="word_scroll_bg">
                <div className="scroll_track">
                    <div className="all_words">
                        {["POWERFUL", "ACCURATE", "UNIQUE"].map((word, i) =>
                            [...Array(2)].map((_, j) => (
                                <div
                                    key={`${word}-${j}`}
                                    className={`word word_${i + 1}`}
                                >
                                    {[...word].map((char, k) => (
                                        <span key={k}>{char}</span>
                                    ))}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {/* Floating video cards */}
            {positions.map((pos, index) => (
                <motion.div
                    key={index}
                    className="imgCard"
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    whileInView={{
                        x: isMobile ? 0 : pos.x,
                        y: isMobile ? 0 : pos.y,
                        opacity: 1,
                    }}
                    whileHover={{
                        y: isMobile ? 0 : pos.y - 10,
                        scale: isMobile ? 1 : 1.05,
                    }}
                    transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                        ease: "easeOut",
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {/* <video
                        src={pos.src}
                        loop
                        muted
                        playsInline
                        preload="auto"
                        onMouseEnter={(e) => {
                            // e.target.muted = !audioEnabled;
                            e.target.play();
                        }}
                        onMouseLeave={(e) => {
                            e.target.pause();
                            e.target.currentTime = 0;
                        }}
                    /> */}
                    <img src={pos.src} alt="no img" />
                </motion.div>
            ))}
        </div>
    );
};

export default ImagesFloatSection;
