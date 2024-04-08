import React, { useState } from "react";
import siteLogo from "../assets/fitforlifelogo-1.png";
import { FaLocationArrow } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import blackseed from "../assets/blackseed-oil-2.webp";
import honey from "../assets/honey.webp";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import heart from "../assets/heart.png";
import { GrCart } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";

const Footer = () => {
  const [resentPost, setResentPost] = useState(false);
  const [usefullLinks, setUsefullLinks] = useState(false);
  const [categories, setCategories] = useState(false);

  const resentPostOpen = () => {
    setResentPost(true);
  };
  const resentPostClose = () => {
    setResentPost(false);
  };

  const usefulLinksOpen = () => {
    setUsefullLinks(true);
  };
  const usefulLinksClose = () => {
    setUsefullLinks(false);
  };

  const categoriesOpen = () => {
    setCategories(true);
  };
  const categoriesClose = () => {
    setCategories(false);
  };

  return (
    <footer className="bg-[#373839]">
      <div className="lg:px-60 md:px-40 pt-10 px-6">
        <div className="flex justify-center sm:gap-x-20 sm:gap-y-1 md:gap-y-10 items-start xl:flex-row flex-col">
          <div>
            <img src={siteLogo} alt="Site Logo" className="h-20 mb-5" />
            <div className="flex items-center gap-x-2 text-[#c5c5c5]">
              <FaLocationArrow />
              <p>80 Eskandar Ali Road , Narayanpur, Pabna Sadar, Pabna</p>
            </div>
            <div className="flex items-center gap-x-2 text-[#c5c5c5] my-2">
              <FaWhatsappSquare className="text-green-600 rounded-md" />
              <a
                href="https://wa.me/+8801717426742"
                target="_blank"
                rel="noopener noreferrer"
              >
                01717426742
              </a>
            </div>
            <div className="flex items-center gap-x-2 text-[#c5c5c5]">
              <FaWhatsappSquare className="text-green-600 rounded-md" />
              <a
                href="https://wa.me/+8801717426742"
                target="_blank"
                rel="noopener noreferrer"
              >
                01620858385
              </a>
            </div>
            <div className="flex items-center gap-x-2 text-[#c5c5c5] my-2">
              <IoMailOutline />
              <p onClick={() => window.open("mailto:info@fitforlifebd.com")}>
                info@fitforlifebd.com
              </p>
            </div>
            <div className="flex gap-x-3 mt-6 mb-6 md:mb-0">
              <i className="text-lg text-white hover:text-[#c5c5c5] transition-all cursor-pointer">
                <FaFacebookF />
              </i>
              <i className="text-lg text-white hover:text-[#c5c5c5] transition-all cursor-pointer">
                <FaInstagram />
              </i>
              <i className="text-lg text-white hover:text-[#c5c5c5] transition-all cursor-pointer">
                <FaYoutube />
              </i>
              <i className="text-lg text-white hover:text-[#c5c5c5] transition-all cursor-pointer">
                <FaThreads />
              </i>
              <i className="text-lg text-white hover:text-[#c5c5c5] transition-all cursor-pointer">
                <FaWhatsapp />
              </i>
              <i className="text-lg text-white hover:text-[#c5c5c5] transition-all cursor-pointer">
                <FaTiktok />
              </i>
              <i className="text-lg text-white hover:text-[#c5c5c5] transition-all cursor-pointer">
                <FaTelegram />
              </i>
            </div>
          </div>
          {/* Desktop Footer Menu */}
          <div className="xl:block hidden">
            <h1 className="text-2xl font-bold text-white mb-6">RECENT POSTS</h1>
            <div className="flex gap-4">
              <img src={blackseed} alt="Blackseed" className="w-20 h-20" />
              <div className="text-white">
                <h2 className="font-semibold text-white cursor-pointer hover:text-[#dadada] hover:transition-all">
                  কালোজিরার ৩৭ স্বাস্থ্য উপকারিতা
                </h2>
                <p className="text-[#c5c5c5]">July 17, 2023 No Comments</p>
              </div>
            </div>
            <div className="my-6 border-t-[1px] text-[#c5c5c5]" />
            <div className="flex gap-4">
              <img src={honey} alt="Honey" className="w-20 h-20" />
              <div>
                <h2 className="font-semibold text-white cursor-pointer hover:text-[#dadada] hover:transition-all">
                  মধু খাঁটি কি না কি ভাবে বুঝব ? সবার জানা উচিৎ
                </h2>
                <p className="text-[#c5c5c5]">October 11, 2022 3 Comments</p>
              </div>
            </div>
          </div>
          <div className="xl:block hidden">
            <h1 className="text-2xl font-bold text-white mb-6">USEFUL LINKS</h1>
            <ul>
              <li className="text-[#c5c5c5] font-semibold hover:text-white">
                <NavLink to={"/about-us"}>About us</NavLink>
              </li>
              <li className="text-[#c5c5c5] font-semibold hover:text-white my-2">
                <NavLink to={"/Contact-us"}>Contact us</NavLink>
              </li>
              <li className="text-[#c5c5c5] font-semibold hover:text-white">
                <NavLink to={"/"}>Returns and Refunds Policy</NavLink>
              </li>
              <li className="text-[#c5c5c5] font-semibold my-2">
                <NavLink to={"/"}>Terms and Conditions</NavLink>
              </li>
              <li className="text-[#c5c5c5] font-semibold hover:text-white">
                <NavLink to={"/"}>FAQ</NavLink>
              </li>
            </ul>
          </div>
          <div className="xl:block hidden">
            <h1 className="text-2xl font-bold text-white mb-6">CATEGORIES</h1>
            <ul>
              <li className="text-[#c5c5c5] font-semibold hover:text-white">
                <NavLink to={"/about-us"}>নারকেল তেল</NavLink>
              </li>
              <li className="text-[#c5c5c5] font-semibold hover:text-white my-2">
                <NavLink to={"/Contact-us"}>মধু</NavLink>
              </li>
              <li className="text-[#c5c5c5] font-semibold hover:text-white">
                <NavLink to={"/"}>Spice</NavLink>
              </li>
              <li className="text-[#c5c5c5] font-semibold my-2">
                <NavLink to={"/"}>Herbs</NavLink>
              </li>
              <li className="text-[#c5c5c5] font-semibold hover:text-white">
                <NavLink to={"/"}>আঁখের গুঁড়</NavLink>
              </li>
              <li className="text-[#c5c5c5] font-semibold hover:text-white">
                <NavLink to={"/"}>seeds</NavLink>
              </li>
              <li className="text-[#c5c5c5] font-semibold hover:text-white">
                <NavLink to={"/"}>Bars & Wafers</NavLink>
              </li>
            </ul>
          </div>
          {/* Mobile Footer Menu */}
          <div className="xl:hidden block w-full mb-4 md:mb-0">
            {!resentPost ? (
              <div
                onClick={resentPostOpen}
                className="flex justify-between items-center"
              >
                <h1 className="text-xl font-bold text-white">RECENT POSTS</h1>
                <i className="text-[#dadada] mr-1">
                  <FaAngleDown />
                </i>
              </div>
            ) : (
              <div
                onClick={resentPostClose}
                className="flex justify-between items-center"
              >
                <h1 className="text-xl font-bold text-white">RECENT POSTS</h1>
                <i className="bg-[#dadada] text-[#373839] rounded-full p-1">
                  <FaAngleUp />
                </i>
              </div>
            )}
            {resentPost && (
              <>
                <div className="flex gap-4 border-b-[1px] border-[#555657] pb-4 mb-4 mt-6">
                  <img
                    src={blackseed}
                    alt="Blackseed"
                    className="w-1/3 h-1/3"
                  />
                  <div>
                    <h2 className="font-semibold text-white cursor-pointer hover:text-[#dadada] hover:transition-all mb-2">
                      কালোজিরার ৩৭ স্বাস্থ্য উপকারিতা
                    </h2>
                    <p className="text-[#c5c5c5]">July 17, 2023 No Comments</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <img src={honey} alt="Honey" className="w-1/3 h-1/3" />
                  <div>
                    <h2 className="font-semibold text-white cursor-pointer hover:text-[#dadada] hover:transition-all mb-2">
                      মধু খাঁটি কি না কি ভাবে বুঝব ? সবার জানা উচিৎ
                    </h2>
                    <p className="text-[#c5c5c5]">
                      October 11, 2022 3 Comments
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="xl:hidden block w-full my-4 md:my-0">
            {!usefullLinks ? (
              <div
                onClick={usefulLinksOpen}
                className="flex justify-between items-center"
              >
                <h1 className="text-xl font-bold text-white">USEFUL LINKS</h1>
                <i className="text-[#dadada] mr-1">
                  <FaAngleDown />
                </i>
              </div>
            ) : (
              <div
                onClick={usefulLinksClose}
                className="flex justify-between items-center"
              >
                <h1 className="text-xl font-bold text-white">USEFUL LINKS</h1>
                <i className="bg-[#dadada] text-[#373839] rounded-full p-1">
                  <FaAngleUp />
                </i>
              </div>
            )}
            {usefullLinks && (
              <>
                <ul>
                  <li className="text-[#c5c5c5] mt-6">
                    <NavLink to={"/about-us"}>About us</NavLink>
                  </li>
                  <li className="text-[#c5c5c5] my-2">
                    <NavLink to={"/contact-us"}>Contact us</NavLink>
                  </li>
                  <li className="text-[#c5c5c5]">
                    <NavLink to={"/"}>Returns and Refunds Policy</NavLink>
                  </li>
                  <li className="text-[#c5c5c5] my-2">
                    <NavLink to={"/"}>Terms and Conditions</NavLink>
                  </li>
                  <li className="text-[#c5c5c5]">
                    <NavLink to={"/"}>FAQ</NavLink>
                  </li>
                </ul>
              </>
            )}
          </div>
          <div className="xl:hidden block w-full my-4 md:my-0">
            {!categories ? (
              <div
                onClick={categoriesOpen}
                className="flex justify-between items-center"
              >
                <h1 className="text-xl font-bold text-white">CATEGORIES</h1>
                <i className="text-[#dadada] mr-1">
                  <FaAngleDown />
                </i>
              </div>
            ) : (
              <div
                onClick={categoriesClose}
                className="flex justify-between items-center"
              >
                <h1 className="text-xl font-bold text-white">CATEGORIES</h1>
                <i className="bg-[#dadada] text-[#373839] rounded-full p-1">
                  <FaAngleUp />
                </i>
              </div>
            )}
            {categories && (
              <>
                <ul>
                  <li className="text-[#c5c5c5] mt-6">
                    <NavLink to={"/"}>নারকেল তেল</NavLink>
                  </li>
                  <li className="text-[#c5c5c5] my-2">
                    <NavLink to={"/"}>মধু</NavLink>
                  </li>
                  <li className="text-[#c5c5c5]">
                    <NavLink to={"/"}>Spice</NavLink>
                  </li>
                  <li className="text-[#c5c5c5]  my-2">
                    <NavLink to={"/"}>Herbs</NavLink>
                  </li>
                  <li className="text-[#c5c5c5]">
                    <NavLink to={"/"}>আঁখের গুঁড়</NavLink>
                  </li>
                  <li className="text-[#c5c5c5]  my-2">
                    <NavLink to={"/"}>seeds</NavLink>
                  </li>
                  <li className="text-[#c5c5c5]">
                    <NavLink to={"/"}>Bars & Wafers</NavLink>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
      <p className="text-[#c5c5c5] py-6 border-t-[1px] border-[#555657] lg:px-60 md:px-40 mt-10 px-6 md:text-start text-center md:mb-0 mb-14">
        Fit for Life © All Rights Reserved | Made with
        <span className="text-[#ff0000] text-xl">♥</span> Codeyeo
      </p>
      <div className="md:hidden flex justify-around bg-white py-2 fixed bottom-0 left-0 w-full">
        <div className="flex flex-col items-center">
          <NavLink to={"/shop"}>
            <i className="text-2xl font-extrabold text-[#373839]">
              <AiOutlineShop />
            </i>
          </NavLink>
          <p className="text-[#373839] text-sm font-semibold">Shop</p>
        </div>
        <div className="flex flex-col items-center relative">
          <i className="text-xl">
            <img src={heart} alt="Heart" className="w-6" />
          </i>
          <small className="rounded-full w-4 h-4 bg-[#13761d] text-xs text-center text-white absolute top-0 right-0">
            0
          </small>
          <p className="text-[#373839] text-sm font-semibold">Wishlist</p>
        </div>
        <div className="flex flex-col items-center relative">
          <i className="text-2xl font-extrabold text-[#373839]">
            <GrCart />
          </i>
          <small className="rounded-full w-4 h-4 bg-[#13761d] text-xs text-center text-white absolute top-0 -right-3">
            0
          </small>
          <p className="text-[#373839] text-sm font-semibold">Cart</p>
        </div>
        <div className="flex flex-col items-center">
          <i className="text-2xl font-extrabold text-[#373839]">
            <AiOutlineUser />
          </i>
          <p className="text-[#373839] text-sm font-semibold">My account</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
