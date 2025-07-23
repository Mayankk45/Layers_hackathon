import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./components/Contactus";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";

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
