import { useEffect, useState, lazy, Suspense } from "react";
const Navbar = lazy(() => import("../components/Navbar"));
const ModelSection = lazy(() => import("../components/ModelSection"));
const MarqueeSection = lazy(() => import("../components/MarqueeSection"));
const ImagesFloatSection = lazy(() =>
    import("../components/ImagesFloatSection")
);
const RotateHandSection = lazy(() => import("../components/RotateHandSection"));
const HeadingSection = lazy(() => import("../components/HeadingSection"));
const ImageRollSection = lazy(() => import("../components/ImageRollSection"));
const Footer = lazy(() => import("../components/Footer"));

const Home = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(true);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth > 768);
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <>
            <Navbar />
            <ModelSection
                isLargeScreen={isLargeScreen}
                setIsLargeScreen={setIsLargeScreen}
            />
            <MarqueeSection
                isLargeScreen={isLargeScreen}
                setIsLargeScreen={setIsLargeScreen}
            />
            <ImagesFloatSection
                isLargeScreen={isLargeScreen}
                setIsLargeScreen={setIsLargeScreen}
            />
            <RotateHandSection
                isLargeScreen={isLargeScreen}
                setIsLargeScreen={setIsLargeScreen}
            />
            <HeadingSection
                isLargeScreen={isLargeScreen}
                setIsLargeScreen={setIsLargeScreen}
            />
            <ImageRollSection
                isLargeScreen={isLargeScreen}
                setIsLargeScreen={setIsLargeScreen}
            />
            <Footer
                isLargeScreen={isLargeScreen}
                setIsLargeScreen={setIsLargeScreen}
            />
        </>
    );
};

export default Home;
