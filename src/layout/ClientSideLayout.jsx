import React, { useEffect } from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import { GrCart } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";

const ClientSideLayout = () => {
  useEffect(() => {
    AOS.init({ duration: "1400" });
  }, []);
  return (
    <div className="relative">
      <Header />
      <Outlet />
      <Footer />
      {/* Mobile static cart icon & price in right */}
      <div className="fixed top-96 right-2">
        <div className="md:hidden flex justify-center gap-x-2 items-center bg-[#eb6323] w-28 h-12 relative rounded-sm">
          <i className="text-[#373839] bg-white p-2 text-xl rounded-full">
            <GrCart />
          </i>
          <p className="text-white font-bold">
            0.00<span className="font-bold text-xl">৳</span>
          </p>
          <p className="bg-white w-5 h-5 rounded-full absolute -top-2 -right-2 text-center text-xs">
            0
          </p>
        </div>
      </div>
      {/* Desktop scroll to top btn */}
      <ScrollToTop
        smooth
        color="#373839"
        width="38"
        className="xl:block hidden"
      />
      {/* Mobile scroll to top btn */}
      <ScrollToTop
        smooth
        color="#373839"
        width="36"
        height="20"
        style={{ postion: "absolute", bottom: "68px", right: "14px" }}
        className="xl:hidden block"
      />
    </div>
  );
};

export default ClientSideLayout;
