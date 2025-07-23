const MarqueeSection = () => {
    return (
        <div className="marquee_wrapper">
            <div
                className="marquee_section"
                data-scroll
                data-scroll-section
                data-scroll-speed="-.10"
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
