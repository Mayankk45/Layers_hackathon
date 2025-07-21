import React from "react";
import { motion } from "framer-motion";

const ImagesFloatSection = () => {
    const positions = [
        { x: -250, y: -180 },
        { x: 500, y: 10 },
        { x: -250, y: 180 },
        { x: 220, y: 180 },
        { x: -500, y: -10 },
        { x: 220, y: -180 },
    ];

    return (
        <div
            data-scroll
            data-scroll-section
            data-scroll-speed="-.01"
            className="imageFloat_section"
        >
            <div className="word_scroll_bg">
                <div className="scroll_track">
                    <div className="all_words">
                        {/* First set */}
                        <div className="word word_1">
                            <span>P</span>
                            <span>O</span>
                            <span>W</span>
                            <span>E</span>
                            <span>R</span>
                            <span>F</span>
                            <span>U</span>
                            <span>L</span>
                        </div>
                        <div className="word word_2">
                            <span>A</span>
                            <span>C</span>
                            <span>C</span>
                            <span>U</span>
                            <span>R</span>
                            <span>A</span>
                            <span>T</span>
                            <span>E</span>
                        </div>
                        <div className="word word_3">
                            <span>U</span>
                            <span>N</span>
                            <span>I</span>
                            <span>Q</span>
                            <span>U</span>
                            <span>E</span>
                        </div>

                        {/* Duplicated set for smooth looping */}
                        <div className="word word_1">
                            <span>P</span>
                            <span>O</span>
                            <span>W</span>
                            <span>E</span>
                            <span>R</span>
                            <span>F</span>
                            <span>U</span>
                            <span>L</span>
                        </div>
                        <div className="word word_2">
                            <span>A</span>
                            <span>C</span>
                            <span>C</span>
                            <span>U</span>
                            <span>R</span>
                            <span>A</span>
                            <span>T</span>
                            <span>E</span>
                        </div>
                        <div className="word word_3">
                            <span>U</span>
                            <span>N</span>
                            <span>I</span>
                            <span>Q</span>
                            <span>U</span>
                            <span>E</span>
                        </div>
                    </div>
                </div>
            </div>

            {positions.map((pos, index) => (
                <motion.div
                    key={index}
                    className="imgCard"
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    whileInView={{ x: pos.x, y: pos.y, opacity: 1 }}
                    whileHover={{ y: pos.y - 10, scale: 1.05 }}
                    transition={{
                        duration: 1,
                        delay: index * 0.1,
                        ease: "easeOut",
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                />
            ))}
        </div>
    );
};

export default ImagesFloatSection;
