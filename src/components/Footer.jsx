import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <motion.div
                className="footer__top"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="footer__brand">
                    <h1>LAYERS</h1>
                    <p>Design in London. Made for India.</p>
                </div>

                <div className="footer__links">
                    <div className="footer__column">
                        <h3>Explore</h3>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/collections">Collections</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="#">Support</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <h3>Resources</h3>
                        <ul>
                            <li>
                                <Link to="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#">Terms of Use</Link>
                            </li>
                            <li>
                                <Link to="#">Careers</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="footer__bottom"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <p>&copy; 2025 LAYERS. All rights reserved.</p>
                <div className="footer__socials">
                    <Link to="https://www.instagram.com/layers.shop">
                        <FaInstagram />
                    </Link>
                    <Link to="https://www.youtube.com/channel/UC8bOE6o65A5LOikGLhuraYw">
                        <FaYoutube />
                    </Link>
                    <Link to="https://in.linkedin.com/company/layers-shop">
                        <FaLinkedin />
                    </Link>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
