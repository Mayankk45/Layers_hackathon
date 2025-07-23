import { motion } from "framer-motion";

const watchContent = [
    {
        image: "./ImageRollSectionAsset/watchPoster1.jpg",
        title: "Precision in Motion",
        description:
            "Experience cutting-edge engineering with every tick. Designed for accuracy and performance.",
    },
    {
        image: "./ImageRollSectionAsset/watchPoster2.jpg",
        title: "Bold & Timeless",
        description:
            "A perfect fusion of tradition and modernity — crafted for those who value elegance.",
    },
    {
        image: "./ImageRollSectionAsset/watchPoster3.jpg",
        title: "Uncompromising Style",
        description:
            "Make a statement with a timepiece that reflects your personality and ambition.",
    },
    {
        image: "./ImageRollSectionAsset/watchPoster4.jpg",
        title: "Built for Adventure",
        description:
            "Rugged design meets high-functionality. For those who push boundaries and never stop exploring.",
    },
];

const ImageRollSection = () => {
    return (
        <div className="imageRoll_section">
            {watchContent.map((content, index) => (
                <motion.div
                    key={index}
                    className="content_container"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className="container_left">
                        <p className="heading">{content.title}</p>
                        <p className="desc">{content.description}</p>
                    </div>
                    <div className="container_right">
                        <img
                            src={content.image}
                            alt={`watch-poster-${index}`}
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default ImageRollSection;
