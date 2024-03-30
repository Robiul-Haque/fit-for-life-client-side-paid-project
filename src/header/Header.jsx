import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import siteLogo from "../assets/fitforlifelogo-1.png";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import heart from "../assets/heart.png";
import { GrCart } from "react-icons/gr";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [toogleMenuIcon, setToogleMenuIcon] = useState(true);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const openToggleMenuIcon = () => {
    setToogleMenuIcon(false);
  };

  const closeToggleMenuIcon = () => {
    setToogleMenuIcon(true);
  };

  return (
    <>
      <header className="border-b fixed top-0 w-full bg-white z-40">
        <div className="md:flex justify-center md:gap-x-[820px] py-2 font-semibold hidden bg-[#13761d] text-white">
          <small>
            Office Time : 08:00 AM - 12:00 AM | Hotline : +8809639426742
          </small>
          <div className="flex gap-x-3">
            <i className="text-lg hover:text-[#87ff8f] transition-all cursor-pointer">
              <FaFacebookF />
            </i>
            <i className="text-lg hover:text-[#87ff8f] transition-all cursor-pointer">
              <FaInstagram />
            </i>
            <i className="text-lg hover:text-[#87ff8f] transition-all cursor-pointer">
              <FaYoutube />
            </i>
            <i className="text-lg hover:text-[#87ff8f] transition-all cursor-pointer">
              <FaThreads />
            </i>
            <i className="text-lg hover:text-[#87ff8f] transition-all cursor-pointer">
              <FaWhatsapp />
            </i>
            <i className="text-lg hover:text-[#87ff8f] transition-all cursor-pointer">
              <FaTiktok />
            </i>
            <i className="text-lg hover:text-[#87ff8f] transition-all cursor-pointer">
              <FaTelegram />
            </i>
          </div>
        </div>
        {/* Desktop menu */}
        <nav className="md:flex justify-evenly items-center my-1 mx-32 hidden">
          <img src={siteLogo} alt="Site logo" className="w-56 h-16" />
          <ul className="flex gap-x-6">
            <li className="font-semibold hover:text-[#13761d] transition-all">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="font-semibold hover:text-[#13761d] transition-all">
              <NavLink to={"/shop"}>Shop</NavLink>
            </li>
            <li className="font-semibold hover:text-[#13761d] transition-all">
              <NavLink to={"/about-us"}>About us</NavLink>
            </li>
            <li className="font-semibold hover:text-[#13761d] transition-all">
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
            <li className="font-semibold hover:text-[#13761d] transition-all">
              <NavLink to={"/contact-us"}>Contact us</NavLink>
            </li>
          </ul>
          <div className="flex gap-x-6 items-center">
            <div className="relative">
              <input
                type="search"
                name="search"
                placeholder="Search for Product"
                className="w-64 h-10 p-1.5 rounded border border-[#13761d] focus:outline-none"
              />
              <button className="bg-[#13761d] p-3 rounded absolute top-0 right-0">
                <IoSearch className="text-white" />
              </button>
            </div>
            <NavLink className="font-semibold">Login / Register</NavLink>
            <i className="font-semibold text-xl cursor-pointer relative">
              <img src={heart} alt="Heart" className="w-6" />
              <small className="rounded-full w-5 h-5 bg-[#13761d] text-xs text-center text-white absolute -top-3 -right-4">
                0
              </small>
            </i>
            <div className="flex gap-x-5 items-center cursor-pointer">
              <i className="font-semibold text-xl relative">
                <GrCart />
                <small className="rounded-full w-5 h-5 bg-[#13761d] text-xs text-center text-white absolute -top-3 -right-4">
                  0
                </small>
              </i>
              <p className="font-semibold">
                0.00<small className="font-extrabold text-md">৳</small>
              </p>
            </div>
          </div>
        </nav>
        {/* Mobile menu */}
        <nav className="flex justify-between items-center mx-4 my-2 md:hidden">
          {toogleMenuIcon && (
            <span
              onClick={openToggleMenuIcon}
              className="flex justify-center items-center gap-x-2 text-2xl"
            >
              <IoMenu />
              <h2 className="text-sm font-bold">Menu</h2>
            </span>
          )}
          <img src={siteLogo} alt="Site logo" className="h-10" />
          {isOpenSearch ? (
            <>
              <i onClick={() => setIsOpenSearch(false)} className="text-xl">
                <IoClose />
              </i>
            </>
          ) : (
            <>
              <i onClick={() => setIsOpenSearch(true)} className="text-xl">
                <IoSearch />
              </i>
            </>
          )}
          <i className="font-semibold text-xl relative">
            <GrCart />
            <small className="rounded-full w-4 h-4 bg-[#13761d] text-xs text-center text-white absolute -top-2 -right-2">
              0
            </small>
          </i>
        </nav>
        {!toogleMenuIcon && (
          <div
            className={
              "block absolute top-0 left-0 z-50 w-4/5 h-screen bg-slate-100 md:hidden"
            }
          >
            <div className="flex justify-between items-center bg-[#f0f0f0] p-4">
              <h1 className="text-xl font-semibold">MENU</h1>
              <i onClick={closeToggleMenuIcon} className="text-2xl">
                <IoClose />
              </i>
            </div>
            <ul>
              <li className="font-semibold p-4 border">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="font-semibold p-4 border">
                <NavLink to={"/shop"}>Shop</NavLink>
              </li>
              <li className="font-semibold p-4 border">
                <NavLink to={"/about-us"}>About us</NavLink>
              </li>
              <li className="font-semibold p-4 border">
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>
              <li className="font-semibold p-4 border">
                <NavLink to={"/contact-us"}>Contact us</NavLink>
              </li>
            </ul>
          </div>
        )}
      </header>
      {isOpenSearch && (
        <div className="absolute top-16 w-full">
          <input
            type="search"
            name="mobile-search"
            placeholder="Search For Product"
            className="border border-[#13761d] rounded focus:outline-none p-1.5 w-full"
          />
          <button className="bg-[#13761d] p-[11px] rounded absolute right-0">
            <IoSearch className="text-white" />
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
