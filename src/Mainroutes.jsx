import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./components/ContactUs.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Products from "./components/Products.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Cart from "./pages/Cart.jsx";

const Mainroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/productDetails/:idx" element={<ProductDetails />} />
            <Route path="/cart/:idx" element={<Cart />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
};

export default Mainroutes;
