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
import acharImg from "../assets/rosun-achar-2-removebg-preview.webp";

const Header = () => {
  const [toogleMenuIcon, setToogleMenuIcon] = useState(true);

  const openToggleMenuIcon = () => {
    setToogleMenuIcon(false);
  };

  const closeToggleMenuIcon = () => {
    setToogleMenuIcon(true);
  };

  return (
    <header>
      <div className="md:flex justify-around py-3 font-semibold hidden bg-[#13761d] text-white">
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
      <nav className="md:flex justify-evenly items-center my-2 mx-32 py-2 hidden">
        <img src={siteLogo} alt="Site logo" className="w-64 h-20" />
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
          <i className="font-bold text-xl cursor-pointer">
            <IoSearch />
          </i>
          <NavLink className="font-semibold">Login / Register</NavLink>
          <i className="font-semibold text-xl cursor-pointer relative">
            <img src={heart} alt="Heart" className="w-6" />
            <small className="rounded-full w-4 h-4 bg-[#13761d] text-xs text-center text-white absolute -top-2 -right-3">
              0
            </small>
          </i>
          <div className="flex gap-x-2 items-center cursor-pointer">
            <i className="font-semibold text-xl relative">
              <GrCart />
              <small className="rounded-full w-4 h-4 bg-[#13761d] text-xs text-center text-white absolute -top-2 -right-3">
                0
              </small>
            </i>
            <p className="font-semibold">
              0.00 <small className="font-bold text-xl">৳</small>
            </p>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      <nav className="flex justify-between items-center mx-4 my-2 md:hidden">
        {toogleMenuIcon && (
          <i onClick={openToggleMenuIcon} className="text-3xl">
            <IoMenu />
          </i>
        )}
        <img src={siteLogo} alt="Site logo" className="h-12" />
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
      {/* Header hero section */}
      <section className="bg-[url('./assets/blur-bg.jpg')] bg-cover bg-top md:h-[632px] h-full w-full pb-20">
        <div className="md:flex justify-evenly md:items-center pt-10">
          <div>
            <h1 className="text-[#333333] md:text-5xl md:font-extrabold md:leading-normal leading-normal md:w-[420px] md:ml-0 text-4xl ml-4 font-bold">
              Garlic Pickle দেশি রসুনের আঁচার
            </h1>
            <p className="text-[#333333] md:font-semibold md:text-lg my-6 md:w-[560px] md:ml-0 leading-relaxed font-normal ml-4">
              বিভিন্ন রকমের আচারের মধ্যে রসুনের আচার অন্যতম। রসুন আমাদের শরীরে
              প্রাকৃতিক এন্টিবায়োটিক হিসেবে কাজ করে। রসুনের আচার শুধু স্বাদের
              জন্য নয়, স্বাস্থের জন্যেও বেশ উপকারি। খিচুড়ি কিংবা নিয়মিত খাবারের
              সঙ্গে আচার দারুন টেস্ট কম্বিনেশন , এটা স্বাদ দ্বিগুণ করে ।
            </p>
            <button className="bg-[#13761d] text-slate-200 font-semibold text-lg px-8 py-4 rounded-sm border-2 border-green-700 hover:bg-transparent hover:text-[#333333] duration-500 md:ml-0 ml-4">Read More</button>
          </div>
          <div className="md:ml-[-250px]">
            <img src={acharImg} alt="Rosun achar img" className="md:w-full md:mt-0 w-80 mx-auto mt-6" />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
