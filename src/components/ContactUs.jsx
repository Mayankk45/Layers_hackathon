import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactUs = () => {
    return (
        <section className="contact">
            <motion.div
                className="contact__container"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="contact__left">
                    <h2>Contact Us</h2>
                    <p>
                        Have a question, suggestion, or just want to say hello?
                        Fill out the form below and we’ll get back to you soon.
                    </p>

                    <form className="contact__form">
                        <div className="form__group">
                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="form__group">
                            <input
                                type="email"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="form__group">
                            <textarea
                                placeholder="Your Message"
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit__btn">
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="contact__right">
                    <h3>Reach Us At</h3>
                    <p>
                        <strong>Email:</strong> support@layers.shop
                    </p>
                    <p>
                        <strong>Phone:</strong> +91 98211 41699
                    </p>
                    <p>
                        <strong>Address:</strong> 101 Time Street, Watch City,
                        India
                    </p>

                    <div className="contact__links">
                        <Link to="/">Go to Home</Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactUs;
