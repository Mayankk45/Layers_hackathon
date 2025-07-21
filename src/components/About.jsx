import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return (
        <section className="about">
            <motion.div
                className="about__container"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="about__intro">
                    <h2>About Layers</h2>
                    <p>
                        At Layers, we believe in redefining time. Our mission is
                        to blend technology, design, and craftsmanship to create
                        watches that are not just tools—but a statement. From
                        smart innovation to timeless aesthetics, we engineer
                        products that fit seamlessly into your lifestyle.
                    </p>
                </div>

                <div className="about__features">
                    <div className="feature">
                        <h3>Smart Inside, Bold Outside</h3>
                        <p>
                            Our watches feature cutting-edge sensors, brilliant
                            AMOLED displays, and long-lasting battery—all
                            wrapped in a striking design that stands out.
                        </p>
                    </div>

                    <div className="feature">
                        <h3>Designed with Detail</h3>
                        <p>
                            Every element—from the crown to the casing—is
                            crafted to deliver premium feel, comfort, and
                            function. Layers watches are made to be noticed.
                        </p>
                    </div>

                    <div className="feature">
                        <h3>Built for Everyday</h3>
                        <p>
                            Water-resistant, durable, and stylish—our watches
                            are made for real life. Whether you're working out
                            or going out, they keep up.
                        </p>
                    </div>
                </div>

                <div className="about__vision">
                    <h3>Our Vision</h3>
                    <p>
                        To lead a new era of wearable design where utility meets
                        elegance. We're committed to quality, innovation, and
                        creating products that matter.
                    </p>
                </div>
                <button onClick={() => navigate("/products")}>
                    Start Shopping
                </button>
            </motion.div>
        </section>
    );
};

export default About;
