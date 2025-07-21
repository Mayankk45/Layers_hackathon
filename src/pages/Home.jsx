import ModelSection from "../components/ModelSection";
import Navbar from "../components/Navbar";
import RotateHandSection from "../components/RotateHandSection";
import ImagesFloatSection from "./../components/ImagesFloatSection";
import MarqueeSection from "./../components/MarqueeSection";
import HeadingSection from "./../components/HeadingSection";
import ImageRollSection from "./../components/ImageRollSection";
import Footer from "../components/Footer";

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
