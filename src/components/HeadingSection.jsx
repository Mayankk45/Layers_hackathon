import { motion } from "framer-motion";
import { useState } from "react";

const HeadingSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    let headings = [
        "Stay Ahead of Time",
        "Wear the Future",
        "Design Meets Intelligence",
        "Every Second Counts",
        "Beyond Timekeeping",
    ];

    let headingsDetails = [
        "Smart features that keep you one step ahead, always.",
        "Cutting-edge design blended with futuristic technology.",
        "Elegance on the outside, brilliance on the inside.",
        "Precision and performance in every tick.",
        "More than a watch—your daily health and lifestyle partner.",
    ];

    return (
        <div
            data-scroll
            data-scroll-section
            data-scroll-speed="-.02"
            className="heading_section"
        >
            <div className="heading_section_left" onMouseMove={handleMouseMove}>
                {headings.map((heading, idx) => (
                    <motion.div
                        key={idx}
                        className="quote"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <hr className="topRow" />
                        <p>{heading}</p>
                    </motion.div>
                ))}
                <hr />

                {hoveredIndex !== null && (
                    <motion.div
                        className="floating_tooltip"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            type: "tween",
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        style={{
                            position: "fixed",
                            top: mousePos.y + 20,
                            left: mousePos.x + 20,
                            pointerEvents: "none",
                            zIndex: 1000,
                        }}
                    >
                        <div className="tooltip_content">
                            {headingsDetails[hoveredIndex]}
                        </div>
                    </motion.div>
                )}
            </div>

            <div className="heading_section_right">
                <video
                    autoPlay
                    loop
                    muted
                    src="/headingSectionAsset/watchVideo.mp4"
                ></video>
            </div>
        </div>
    );
};

export default HeadingSection;
