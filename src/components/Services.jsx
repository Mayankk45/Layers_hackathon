import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();
    return (
        <section className="services">
            <motion.div
                className="services__container"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="services__header">
                    <h2>Our Services</h2>
                    <p>
                        We offer more than just watches. Explore a range of
                        services tailored to keep your experience smooth,
                        reliable, and enjoyable.
                    </p>
                </div>

                <div className="services__list">
                    <div className="service">
                        <h3>Smartwatch Setup</h3>
                        <p>
                            Get your device up and running with expert
                            assistance—from pairing to customizing watch faces
                            and settings.
                        </p>
                    </div>

                    <div className="service">
                        <h3>Repair & Maintenance</h3>
                        <p>
                            We provide diagnostics, software updates, and
                            component replacements to keep your smartwatch
                            performing like new.
                        </p>
                    </div>

                    <div className="service">
                        <h3>Warranty Support</h3>
                        <p>
                            All Layers products come with a limited warranty.
                            Need help? We’re here to support you throughout your
                            product’s journey.
                        </p>
                    </div>

                    <div className="service">
                        <h3>Customer Education</h3>
                        <p>
                            Learn how to get the most out of your Layers device
                            through video tutorials, guides, and personalized
                            tips.
                        </p>
                    </div>
                </div>
                <button onClick={() => navigate("/products")}>
                    Start Shopping
                </button>
            </motion.div>
        </section>
    );
};

export default Services;
