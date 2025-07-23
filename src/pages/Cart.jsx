import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
    const navigate = useNavigate();
    const { idx } = useParams();
    const [cartItems, setCartItems] = useState([]);

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

    useEffect(() => {
        if (!idx) return;

        const product = products.find((p) => p.id === idx);
        if (!product) {
            toast.error("Product not found");
            return;
        }

        setCartItems((prev) => {
            const exists = prev.find((item) => item.id === idx);
            if (exists) {
                toast.info("Quantity updated");
                return prev.map((item) =>
                    item.id === idx
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                toast.success("Item added to cart");
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    }, [idx]);

    const handleRemove = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
        toast.info("Item removed");
    };

    const handleQuantity = (id, type) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity:
                              type === "inc"
                                  ? item.quantity + 1
                                  : Math.max(1, item.quantity - 1),
                      }
                    : item
            )
        );
    };

    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const handleCheckout = () => {
        toast.info("Under Maintenance");
    };

    return (
        <div className="cart_container">
            <button className="go_home" onClick={() => navigate("/")}>
                Go to Home
            </button>
            <h1>🛒 Your Cart</h1>

            {cartItems.length === 0 ? (
                <div className="cart_empty">No items in the Cart</div>
            ) : (
                <div className="cart_wrapper">
                    <div className="cart_list">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart_item">
                                <img src={item.image} alt={item.title} />
                                <div className="cart_info">
                                    <div className="item_detail">
                                        <h2>{item.title}</h2>
                                        <p>{item.model}</p>
                                        <p>{item.color}</p>
                                        <p>₹{item.price.toLocaleString()}</p>
                                    </div>
                                    <div className="quantity_control">
                                        <div className="qty_buttons">
                                            <button
                                                onClick={() =>
                                                    handleQuantity(
                                                        item.id,
                                                        "dec"
                                                    )
                                                }
                                            >
                                                −
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() =>
                                                    handleQuantity(
                                                        item.id,
                                                        "inc"
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            className="btn_remove"
                                            onClick={() =>
                                                handleRemove(item.id)
                                            }
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart_total">
                        <h3>Total: ₹{total.toLocaleString()}</h3>
                        <button
                            className="btn_checkout"
                            onClick={handleCheckout}
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
