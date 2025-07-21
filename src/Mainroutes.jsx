import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./components/Contactus";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";

const Mainroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
        </Routes>
    );
};

export default Mainroutes;
