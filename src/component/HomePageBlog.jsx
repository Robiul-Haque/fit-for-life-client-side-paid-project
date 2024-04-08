import React from "react";
import blackseed_oil_2 from "../assets/blackseed-oil-2.webp";
import user from "../assets/user.png";
import { LiaCommentAlt } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";

const HomePageBlog = () => {
  return (
    <div className="md:w-96 w-80 rounded border hover:shadow-lg duration-300">
      <div className="relative">
        <img
          src={blackseed_oil_2}
          alt="blackseed-oil"
          className="rounded w-96 hover:opacity-75 duration-300 cursor-pointer"
        />
        <p className="bg-white text-[#333333] px-4 py-1 font-semibold text-center rounded absolute top-2 left-2">
          17 <br /> JUL
        </p>
        <p className="bg-[#13761d] rounded text-center mx-auto w-32 font-semibold text-white md:text-sm text-xs py-1 absolute -bottom-3 md:left-[125px] left-[95px]">
          UNCATEGORIZED
        </p>
      </div>
      <div className="mx-3">
        <h1 className="text-[#333333] text-center text-lg font-bold mt-8">
          কালোজিরার ৩৭ স্বাস্থ্য উপকারিতা
        </h1>
        <div className="flex justify-center items-center gap-x-3 text-[#b6b6b6] my-5">
          <small className="font-semibold">By</small>
          <img src={user} alt="User image" className="rounded-full w-6" />
          <small className="font-semibold">Admin</small>
          <div className="relative cursor-pointer">
            <i className="text-2xl">
              <LiaCommentAlt />
            </i>
            <p className="bg-[#b6b6b6] text-white w-5 h-5 p-.5 rounded-full flex justify-center items-center text-xs absolute -top-2 -right-2">
              10
            </p>
          </div>
          <div className="flex justify-center items-center gap-x-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="cursor-pointer hover:text-[#555555] duration-300"
                title="Facebook"
              >
                <FaFacebookF />
              </i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="cursor-pointer hover:text-[#555555] duration-300"
                title="Twitter"
              >
                <FaSquareXTwitter />
              </i>
            </a>
            <a href="https://www.linkedin.com/">
              <i
                className="cursor-pointer hover:text-[#555555] duration-300 text-lg"
                title="Linkedin"
              >
                <IoLogoLinkedin />
              </i>
            </a>
          </div>
        </div>
        <p className="text-[#333333] px-4 text-center">
          সাধারণত কালোজিরা নামে পরিচিত হলেও কালোজিরার আরো কিছু নাম আছে, যেমন-
          কালো কেওড়া, রোমান করিয়েন্ডার বা রোমান ধনে, ...
        </p>
        <p className="flex justify-center gap-x-2 items-center text-[#13761d] font-bold text-center mt-4 mb-6 cursor-pointer text-sm">
          CONTINUE READING
          <i>
            <FaArrowRightLong />
          </i>
        </p>
      </div>
    </div>
  );
};

export default HomePageBlog;
