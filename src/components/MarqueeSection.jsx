import { useEffect } from "react";

const MarqueeSection = ({ isLargeScreen, setIsLargeScreen }) => {
    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth > 768);
        };

        checkScreenSize();
    }, []);

    return (
        <div className="marquee_wrapper">
            <div
                className="marquee_section"
                {...(isLargeScreen && {
                    "data-scroll": true,
                    "data-scroll-section": true,
                    "data-scroll-speed": "-.10",
                })}
            >
                <hr />
                <div className="text">
                    <div className="p">Precision in motion</div>
                    <div className="p">Precision in motion</div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default MarqueeSection;
