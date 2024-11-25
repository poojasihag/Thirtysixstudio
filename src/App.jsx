import { useEffect } from "react";
import Canvas from "./Canvas";
import data from "./data";
import "./index.css";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);//smoth scrolling

  return (
    <>
      {" "}
      <div className="w-full min-h-screen relative">
        {data[0].map((canvasdets, index) => (
          <Canvas details={canvasdets} />
        ))}
      </div>
      <div className="w-full min-h-screen  relative">
        {data[1].map((canvasdets, index) => (
          <Canvas details={canvasdets} />
        ))}
      </div>
      <div className="w-full min-h-screen  relative">
        {data[2].map((canvasdets, index) => (
          <Canvas details={canvasdets} />
        ))}
      </div>
    </>
  );
};

export default App;
