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
  const [toogleMenuTab, setToogleMenuTab] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const openToggleMenuIcon = () => {
    setToogleMenuIcon(false);
  };

  const closeToggleMenuIcon = () => {
    setToogleMenuIcon(true);
  };

  return (
    <>
      <header className="border-b fixed top-0 w-screen bg-white z-40">
        <div className="md:flex justify-evenly xl:gap-x-96 py-2.5 font-semibold hidden bg-[#13761d] text-white">
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
        <nav className="xl:flex justify-evenly items-center my-1 mx-32 md:mx-0 hidden sm:hidden md:hidden">
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
            <div className="md:hidden lg:hidden xl:block 2xl:block relative">
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
        {/* Tab menu */}
        <nav className="sm:flex justify-evenly items-center xl:hidden hidden py-2.5 mx-32 md:mx-0">
          <i onClick={() => setToogleMenuTab(true)}>
            <IoMenu className="font-bold text-4xl" />
          </i>
          <img src={siteLogo} alt="Site logo" className="w-40 h-14" />
          <i className="font-semibold text-3xl relative">
            <GrCart />
            <small className="rounded-full w-6 h-6 bg-[#13761d] p-0.5 text-xs text-center text-white absolute -top-3 -right-3">
              0
            </small>
          </i>
        </nav>
        {toogleMenuTab && (
          <div className="hidden sm:block xl:hidden fixed top-0 left-0 w-2/4 h-full bg-white z-40">
            <div className="flex justify-between items-center p-4 bg-slate-100">
              <h1 className="font-semibold text-3xl">MENU</h1>
              <i onClick={() => setToogleMenuTab(false)}>
                <IoClose className="font-bold text-3xl" />
              </i>
            </div>
            <div className="flex justify-center gap-x-5 my-6 mx-4">
              <input
                type="search"
                name="search"
                placeholder="Search for Product"
                required
                className="w-80 h-14 p-1.5 rounded border border-[#13761d] focus:outline-none"
              />
              <button className="bg-[#13761d] p-4 rounded">
                <IoSearch className="text-white text-xl" />
              </button>
            </div>
            <ul>
              <li className="font-semibold text-xl p-4 border">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="font-semibold text-xl p-4 border">
                <NavLink to={"/shop"}>Shop</NavLink>
              </li>
              <li className="font-semibold text-xl p-4 border">
                <NavLink to={"/about-us"}>About us</NavLink>
              </li>
              <li className="font-semibold text-xl p-4 border">
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>
              <li className="font-semibold text-xl p-4 border">
                <NavLink to={"/contact-us"}>Contact us</NavLink>
              </li>
              <li className="font-semibold text-xl p-4 border">
                <NavLink className="font-semibold">Login / Register</NavLink>
              </li>
            </ul>
          </div>
        )}
        {/* Mobile menu */}
        <nav className="flex justify-between items-center mx-4 my-2 sm:hidden md:hidden">
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
        <div className="sm:hidden fixed top-16 left-[50%] transform -translate-x-1/2 z-40 w-3/4">
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
