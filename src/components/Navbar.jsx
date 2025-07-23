import { useEffect, useState, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
    const navigate = useNavigate();

    const [isHidden, setIsHidden] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showLogout, setShowLogout] = useState(false);
    const lastScroll = useRef(0);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setIsHidden(currentScroll > lastScroll.current);
            lastScroll.current = currentScroll;
        };

        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setDropdownOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleUserClick = () => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setShowLogout(true);
        }
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setShowLogout(false);
        toast.success("Logout Successfully");
    };

    return (
        <nav className={`navbar ${isHidden ? "hide" : ""}`}>
            <div className="left">
                <p>LAYERS</p>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/products">Products</Link>
                <Link to="/services">Services</Link>
            </div>
            <div className="center"></div>
            <div className="right" ref={dropdownRef}>
                <FaUserCircle className="user-icon" onClick={handleUserClick} />
                {dropdownOpen && (
                    <div className="dropdown">
                        {showLogout ? (
                            <Link onClick={handleLogout}>Logout</Link>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    onClick={() => navigate("/login")}
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    onClick={() => navigate("/signup")}
                                >
                                    Signup
                                </Link>
                            </>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
