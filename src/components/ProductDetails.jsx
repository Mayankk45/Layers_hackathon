import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "./Navbar";

const ProductDetails = () => {
    const { idx } = useParams();
    const navigate = useNavigate();

    const products = [
        {
            id: "lanarc001",
            title: "Layers Anarc Fit Pro Smartwatch",
            image: "/productsAsset/img1.jpg",
            price: 7999,
            description:
                "1.75″ AMOLED display • Heart-rate, SPO₂, sleep & stress tracking • up to 10 days battery • Bluetooth call support",
            brand: "Layers Anarc",
            model: "Fit Pro",
            color: "Black",
            category: "smartwatch",
        },
        {
            id: "lanarc002",
            title: "Layers Anarc Ultra Active Smartwatch",
            image: "/productsAsset/img2.jpg",
            price: 10999,
            description:
                "AMOLED edge‑to‑edge screen • GPS tracking • 20 sports modes • Always‑on display",
            brand: "Layers Anarc",
            model: "Ultra Active",
            color: "Cream",
            category: "smartwatch",
        },
        {
            id: "lanarc003",
            title: "Layers Anarc Luxe Classic Smartwatch",
            image: "/productsAsset/img3.jpg",
            price: 12999,
            description:
                "Stainless steel case • Leather strap • ECG & blood pressure monitoring • Fitness coach",
            brand: "Layers Anarc",
            model: "Luxe Classic",
            color: "Black",
            category: "smartwatch",
        },
        {
            id: "lanarc004",
            title: "Layers Anarc Mini Sport Smartwatch",
            image: "/productsAsset/img4.jpg",
            price: 5999,
            description:
                "1.3″ TFT display • Light‑weight, sporty build • Spo₂ & heart‑rate monitoring • Caller ID",
            brand: "Layers Anarc",
            model: "Mini Sport",
            color: "Pink",
            category: "smartwatch",
        },
        {
            id: "lanarc005",
            title: "Layers Anarc Runner Pro Smartwatch",
            image: "/productsAsset/img5.jpg",
            price: 8999,
            description:
                "Built‑in GPS • VO₂ max estimation • 30+ workout modes • Waterproof 5 ATM",
            brand: "Layers Anarc",
            model: "Runner Pro",
            color: "Orange",
            category: "smartwatch",
        },
        {
            id: "lanarc006",
            title: "Layers Anarc Zen Smartwatch",
            image: "/productsAsset/img6.jpg",
            price: 7499,
            description:
                "Circular display • Guided breathing • Stress score • Sleep analytics • 7 days battery",
            brand: "Layers Anarc",
            model: "Zen",
            color: "Multiple",
            category: "smartwatch",
        },
        {
            id: "lanarc007",
            title: "Layers Anarc Pro Max Smartwatch",
            image: "/productsAsset/img7.jpg",
            price: 16999,
            description:
                "1.78″ AMOLED • LTE e‑SIM support • Music streaming • Full health suite",
            brand: "Layers Anarc",
            model: "Pro Max",
            color: "space gray",
            category: "smartwatch",
        },
        {
            id: "lanarc008",
            title: "Layers Anarc Style Smartwatch",
            image: "/productsAsset/img8.jpg",
            price: 8499,
            description:
                "Fashion‑oriented • Customizable watchfaces • Notifications & call alerts • Light activity tracking",
            brand: "Layers Anarc",
            model: "Style",
            color: "Silver",
            category: "smartwatch",
        },
        {
            id: "lanarc009",
            title: "Layers Anarc Outdoor Smartwatch",
            image: "/productsAsset/img9.jpg",
            price: 9999,
            description:
                "Rugged build • Barometer, altimeter, compass • Solar‑assist battery • Water & dust resistant IP68",
            brand: "Layers Anarc",
            model: "Outdoor",
            color: "Gold,Black",
            category: "smartwatch",
        },
        {
            id: "lanarc010",
            title: "Layers Anarc Youth Smartwatch",
            image: "/productsAsset/img10.jpg",
            price: 4999,
            description:
                "Parental control • Geo‑fencing • SOS button • Light‑weight design",
            brand: "Layers Anarc",
            model: "Youth",
            color: "Orange",
            category: "smartwatch",
        },
        {
            id: "lanarc011",
            title: "Layers Anarc Sleep Tracker Smartwatch",
            image: "/productsAsset/img11.jpg",
            price: 6999,
            description:
                "Advanced sleep staging • Snore detection • Heart‑rate variability analytics",
            brand: "Layers Anarc",
            model: "Sleep Tracker",
            color: "Black",
            category: "smartwatch",
        },
        {
            id: "lanarc012",
            title: "Layers Anarc ECG Sense Smartwatch",
            image: "/productsAsset/img12.jpg",
            price: 11999,
            description:
                "Medical‑grade ECG certification • Blood pressure • Irregular‑heartbeat alerts",
            brand: "Layers Anarc",
            model: "ECG Sense",
            color: "Blue",
            category: "smartwatch",
        },
        {
            id: "lanarc013",
            title: "Layers Anarc Music Smartwatch",
            image: "/productsAsset/img13.jpg",
            price: 9999,
            description:
                "On‑device music storage • Offline playback via Bluetooth speaker or earphones • 4 GB storage",
            brand: "Layers Anarc",
            model: "Music",
            color: "Green",
            category: "smartwatch",
        },
        {
            id: "lanarc014",
            title: "Layers Anarc Dual Screen Smartwatch",
            image: "/productsAsset/img14.jpg",
            price: 13999,
            description:
                "Slim OLED cover + AMOLED main screen • Notifications, fitness, voice control",
            brand: "Layers Anarc",
            model: "Dual Screen",
            color: "Black",
            category: "smartwatch",
        },
        {
            id: "lanarc015",
            title: "Layers Anarc Kids Smart Fitness Watch",
            image: "/productsAsset/img15.jpg",
            price: 5499,
            description:
                "Kid‑safe design • Fitness tracker • water resistant • fun watch faces",
            brand: "Layers Anarc",
            model: "Kids Fitness",
            color: "Brown",
            category: "smartwatch",
        },
    ];

    const product = products[idx];

    const handleAddCart = (id) => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser == null) {
            toast.warning("Login to access the resource");
            return;
        }
        navigate(`/cart/${id}`);
    };

    return (
        <>
            <Navbar />
            <div className="product-detail">
                <div className="container">
                    <div className="product-wrapper">
                        <div className="product-img">
                            <img src={product.image} alt={product.title} />
                        </div>

                        <div className="product-info">
                            <h2>{product.title}</h2>
                            <p>
                                <strong>Brand:</strong> {product.brand}
                            </p>
                            <p>
                                <strong>Model:</strong> {product.model}
                            </p>
                            <p>
                                <strong>Color:</strong> {product.color}
                            </p>
                            <p className="description">{product.description}</p>
                            <p className="price">₹{product.price}</p>

                            <div className="productdetails_buttons">
                                <button
                                    onClick={() => handleAddCart(product.id)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
