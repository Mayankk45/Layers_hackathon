import { useEffect, useState, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isHidden, setIsHidden] = useState(false);
    const lastScroll = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScroll.current) {
                setIsHidden(true); // hide navbar
            } else {
                setIsHidden(false); // show navbar
            }

            lastScroll.current = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isHidden ? "hide" : ""}`}>
            <div className="left">
                <p>LAYERS</p>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/products">Products</Link>
                <Link to="/services">Services</Link>
            </div>
            <div className="center"></div>
            <div className="right">
                <FaUserCircle />
            </div>
        </nav>
    );
};

export default Navbar;
