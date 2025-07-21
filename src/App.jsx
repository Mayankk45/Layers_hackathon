import { useState } from "react";
import Intro from "./pages/Intro";
import Mainroutes from "./Mainroutes";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
    const locomotiveScroll = new LocomotiveScroll();

    const [showIntro, setShowIntro] = useState(true);

    return (
        <>
            {/* {showIntro ? (
                <Intro onFinish={() => setShowIntro(false)} />
            ) : (
            )} */}
            <Mainroutes />
        </>
    );
};

export default App;
