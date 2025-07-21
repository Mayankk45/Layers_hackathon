import React from "react";

const MarqueeSection = () => {
    return (
        <div className="marquee_wrapper">
            <div
                data-scroll
                data-scroll-section
                data-scroll-speed="-.10"
                className="marquee_section"
            >
                <hr />
                <div className="text">
                    <div className="p">Precission in motion</div>
                    <div className="p">Precission in motion</div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default MarqueeSection;
