import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import MobileHeader from "../../components/MobileHeader";

const Index = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [windowSizeMobile, setWindowSizeMobile] = useState(window.innerWidth);
  const handlesetWindowSize = () => {
    setWindowSize(windowSize < 769 ? 769 : 768);
  };

  return (
    <div className="h-screen flex">
      <div className={`${windowSize < 769 ? "hidden" : "block"}`}>
        <div className="w-[16.25em] h-screen bg-[#fff] border-r-[1px] border-[#ddd]">
          <SideBar />
        </div>
      </div>
      <div className="h-screen flex-1 bg-[#f4f3ef] overflow-y-scroll">
        <div>
          {windowSizeMobile < 769 ? (
            <MobileHeader
              handlesetWindowSize={handlesetWindowSize}
              windowSize={windowSize}
            />
          ) : (
            <Header />
          )}
        </div>
        <div className="p-[1.875em]">
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
