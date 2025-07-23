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
    return (
        <>
            <Navbar />
            <ModelSection />
            <MarqueeSection />
            <ImagesFloatSection />
            <RotateHandSection />
            <HeadingSection />
            <ImageRollSection />
            <Footer />
        </>
    );
};

export default Home;
