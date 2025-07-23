import { useState } from "react";
import Intro from "./pages/Intro";
import Mainroutes from "./Mainroutes";
import LocomotiveScroll from "locomotive-scroll";
import { ToastContainer } from "react-toastify";

const App = () => {
    const locomotiveScroll = new LocomotiveScroll();

    const [showIntro, setShowIntro] = useState(true);

    return (
        <>
            {showIntro ? (
                <Intro onFinish={() => setShowIntro(false)} />
            ) : (
                <Mainroutes />
            )}
            <ToastContainer position="top-center" autoClose={2000} />
        </>
    );
};

export default App;
