import React from "react";
import badam from "../assets/Badam.jpg";
import acher_combo from "../assets/achar-combo.webp";
import akherGur from "../assets/Gur.webp";
import alu_bukhara from "../assets/Alu-bukhara.webp";
import amsotto from "../assets/Amsotto.webp";
import kalojira_oil from "../assets/Kalojira.webp";
import black_seed_honey from "../assets/black-seed-honey.webp";
import blackseed_oil_2 from "../assets/blackseed-oil-2.webp";
import castor_oil from "../assets/Castor oil.webp";
import Chiaseed_photo from "../assets/Chiaseed-photo.webp";
import seed_shorbot from "../assets/seed-shorbot.webp";
import Cumin_powder from "../assets/Cumin-powder.webp";
import Farmented_Garlic_Honey from "../assets/Farmented-Garlic-Honey.webp";
import rosun_achar from "../assets/rosun-achar-2.webp";
import Hurbs from "../assets/Hurbs.webp";
import Pink_Solt from "../assets/Pink-Solt.jpg";
import Khejurer_gur from "../assets/Khejurer-gur.webp";
import patali_gur from "../assets/patali-gur.webp";
import Moringa_paw from "../assets/Moringa-paw.webp";
import mosla_combo from "../assets/mosla-combo.webp";
import chili from "../assets/chili.webp";
import holudur_gura from "../assets/holudur-gura.webp";
import seedmix_combo from "../assets/seedmix-combo.webp";
import Oil_combo from "../assets/Oil-combo.webp";
import Ajwa_Dates from "../assets/Ajwa Dates.webp";
import Masturd_oil_1 from "../assets/Masturd-oil-1.webp";
import mastard_oil from "../assets/mastard-oil.webp";
import Kumra_Bori from "../assets/Kumra-Bori.webp";
import lacca_semai from "../assets/lacca-semai.webp";
import satu from "../assets/satu.webp";
import Picsart from "../assets/Picsart.webp";
import talbina from "../assets/talbina.webp";
import Ghee from "../assets/Ghee.webp";
import user from "../assets/user.png";
import { LiaCommentAlt } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import acharImg from "../assets/rosun-achar-2-removebg-preview.webp";

const Home = () => {
  return (
    <>
      <section className="bg-[url('./assets/blur-bg.jpg')] bg-cover bg-top md:h-[632px] h-full w-full pb-20">
        <div className="md:flex justify-evenly md:items-center pt-10">
          <div>
            <h1
              className="text-[#333333] md:text-5xl md:font-extrabold md:leading-normal leading-normal md:w-[420px] md:ml-0 text-4xl ml-4 font-bold"
              data-aos="fade-right"
            >
              Garlic Pickle দেশি রসুনের আঁচার
            </h1>
            <p
              className="text-[#333333] md:font-semibold md:text-lg my-6 md:w-[560px] md:ml-0 leading-relaxed font-normal ml-4"
              data-aos="fade-right"
            >
              বিভিন্ন রকমের আচারের মধ্যে রসুনের আচার অন্যতম। রসুন আমাদের শরীরে
              প্রাকৃতিক এন্টিবায়োটিক হিসেবে কাজ করে। রসুনের আচার শুধু স্বাদের
              জন্য নয়, স্বাস্থের জন্যেও বেশ উপকারি। খিচুড়ি কিংবা নিয়মিত খাবারের
              সঙ্গে আচার দারুন টেস্ট কম্বিনেশন , এটা স্বাদ দ্বিগুণ করে ।
            </p>
            <button
              className="bg-[#13761d] text-slate-200 font-semibold text-lg px-8 py-4 rounded-sm border-2 border-green-700 hover:bg-transparent hover:text-[#333333] duration-500 md:ml-0 ml-4"
              data-aos="fade-up"
            >
              Read More
            </button>
          </div>
          <div className="md:ml-[-250px]">
            <img
              src={acharImg}
              alt="Rosun achar img"
              data-aos="zoom-in"
              className="md:w-full md:mt-0 w-80 mx-auto mt-6"
            />
          </div>
        </div>
      </section>
      <section className="md:w-3/4 mx-auto my-28 md:px-20">
        <h2 className="text-2xl font-semibold text-[#333333] md:mx-1 mx-3">
          ALL PRODUCTS
        </h2>
        <div className="mt-2 mb-9 bg-slate-200 md:mx-1 mx-3">
          <p className="w-44 border border-[#13761d]"></p>
        </div>
        <section className="flex md:justify-between md:flex-row md:gap-x-0 justify-center flex-wrap gap-4">
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={badam}
              alt="100% ঘিয়ে ভাজা চিনা বাদাম"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -14%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-semibold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                100% ঘিয়ে ভাজা চিনা বাদাম
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                বাদাম / Nut
              </p>
              <h2 className="text-[#13761d] font-bold">
                300.00<span className="text-md font-extrabold">৳</span> – 600.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={acher_combo}
              alt="Aachar Combo- আচার কম্বো"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -5%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                Aachar Combo- আচার কম্বো
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                Pickle-আঁচার, মুখরোচক খাবার
              </p>
              <h2>
                <del className="text-[#7c7c7c] mr-2">
                  950.00<span className="text-md font-extrabold">৳</span>
                </del>
                <span className="text-[#13761d] font-bold">
                  900.00<span className="text-md font-extrabold">৳</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={akherGur}
              alt="Akher Jhola Gur – আখের গুড়"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -13%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                Akher Jhola Gur – আখের গুড়
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                Herbs, আঁখের গুঁড়, শরবত প্যাকেজ
              </p>
              <h2 className="text-[#13761d] font-bold">
                350.00<span className="text-md font-extrabold">৳</span> –
                1,750.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={alu_bukhara}
              alt="Alu Bukhara Pickle-আলু বোখারার আচার"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -8%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                Alu Bukhara Pickle-আলু <br /> বোখারার আচার
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                Pickle-আঁচার, মুখরোচক খাবার
              </p>
              <h2>
                <del className="text-[#7c7c7c] mr-2">
                  600.00<span className="text-md font-extrabold">৳</span>
                </del>
                <span className="text-[#13761d] font-bold">
                  550.00<span className="text-md font-extrabold">৳</span>
                </span>
              </h2>
            </div>
          </div>
        </section>
        <section className="flex md:justify-between md:flex-row md:gap-x-0 justify-center flex-wrap gap-4 my-9">
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={amsotto}
              alt="Amsotto আমসত্ত্ব – মিষ্টি – ঝাল টক মিষ্টি"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -10%
            </p>
            <p className="flex justify-center items-center bg-white text-[#333333] font-semibold md:w-12 md:h-12 p-3 w-10 h-10 text-xs rounded-full absolute top-14 left-1">
              SOLD OUT
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-semibold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                Amsotto আমসত্ত্ব – মিষ্টি – ঝাল টক মিষ্টি
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                Bars & Wafers
              </p>
              <h2 className="text-[#13761d] font-bold">
                450.00<span className="text-md font-extrabold">৳</span> – 900.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={black_seed_honey}
              alt="Black Seed Honey"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -6%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                Black Seed Honey
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                মধু, কালোজিরা ফুলের মধু
              </p>
              <h2 className="text-[#13761d] font-bold">
                800.00<span className="text-md font-extrabold">৳</span>
                <span className="font-bold">
                  1,500.00<span className="text-md font-extrabold">৳</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={kalojira_oil}
              alt="Black Seed Oil"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -17%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                Black Seed Oil
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                Herbs
              </p>
              <h2 className="text-[#13761d] font-bold">
                500.00<span className="text-md font-extrabold">৳</span> –
                2,000.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={castor_oil}
              alt="Castor oil- ক্যাস্টর অয়েল"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -20%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                Castor oil- ক্যাস্টর অয়েল
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                নারকেল তেল
              </p>
              <h2 className="text-[#13761d] font-bold">
                400.00<span className="text-md font-extrabold">৳</span> – 800.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
        </section>
        <section className="flex md:justify-between md:flex-row md:gap-x-0 justify-center flex-wrap gap-4 my-9">
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={Chiaseed_photo}
              alt="Chia Seeds-চিয়া সিড"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -20%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                seeds
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                নারকেল তেল
              </p>
              <h2>
                <del className="text-[#7c7c7c] mr-2">
                  400.00<span className="text-md font-extrabold">৳</span>
                </del>
                <span className="text-[#13761d] font-bold">
                  1,200.00<span className="text-md font-extrabold">৳</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={seed_shorbot}
              alt="Complete Sorbot Combo Package- পরিপূর্ণ শরবত প্যাকেজ"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -7%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                Complete Sorbot Combo Package- পরিপূর্ণ শরবত প্যাকেজ
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                আঁখের গুঁড়, শরবত প্যাকেজ
              </p>
              <h2 className="text-[#13761d] font-bold">
                1,300.00<span className="text-md font-extrabold">৳</span> –
                1,500.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={Cumin_powder}
              alt="Cumin Powder-জিরা গুঁড়া"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -8%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                Cumin Powder-জিরা গুঁড়া
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                Spice
              </p>
              <h2 className="text-[#13761d] font-bold">
                360.00<span className="text-md font-extrabold">৳</span> – 850.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={Farmented_Garlic_Honey}
              alt="Fermented Garlic Honey – গাঁজানো রসুন-মধু"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -12%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                Fermented Garlic Honey – গাঁজানো রসুন-মধু
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                মধু, Fermented Garlic Honey, Bars & Wafers
              </p>
              <h2 className="text-[#13761d] font-bold">
                750.00<span className="text-md font-extrabold">৳</span> –
                1,500.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
        </section>
        <section className="flex md:justify-between md:flex-row md:gap-x-0 justify-center flex-wrap gap-4 my-9">
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={rosun_achar}
              alt="Chia Seeds-চিয়া সিড"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -20%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                Garlic Pickle- দেশি রসুনের আঁচার
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                Pickle-আঁচার, দেশি রসুনের আঁচার
              </p>
              <h2>
                <del className="text-[#7c7c7c] mr-2">
                  500.00<span className="text-md font-extrabold">৳</span>
                </del>
                <span className="text-[#13761d] font-bold">
                  400.00<span className="text-md font-extrabold">৳</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={Hurbs}
              alt="Herbs For Cold – সিজনাল ঠাণ্ডা-কাশির – জ্বরের প্রাকৃতিক সমাধান"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -20%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                Herbs For Cold – সিজনাল ঠাণ্ডা-কাশির – জ্বরের প্রাকৃতিক সমাধান
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                Herbs
              </p>
              <h2 className="text-[#13761d] font-bold">
                500.00<span className="text-md font-extrabold">৳</span> – 400.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={Pink_Solt}
              alt="Himalayan Pink Salt- হিমালয়ান পিংক সল্ট গুড়া"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -25%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                Himalayan Pink Salt- হিমালয়ান পিংক সল্ট গুড়া
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                খনিজ লবন
              </p>
              <h2 className="text-[#13761d] font-bold">
                300.00<span className="text-md font-extrabold">৳</span> –
                1,000.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={Khejurer_gur}
              alt="Khejurer Gur–খেজুরের (দানাদার বা ঝোলা) গুড়"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -8%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                Khejurer Gur–খেজুরের (দানাদার বা ঝোলা) গুড়
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                খেজুরের গুড়
              </p>
              <h2 className="text-[#13761d] font-bold">
                600.00<span className="text-md font-extrabold">৳</span> –
                1,500.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
        </section>
        <section className="flex md:justify-between md:flex-row md:gap-x-0 justify-center flex-wrap gap-4 my-9">
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={patali_gur}
              alt="Khejurer Gur–খেজুরের (পাটালি) গুড়"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -8%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                Khejurer Gur–খেজুরের (পাটালি) গুড়
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                খেজুরের গুড়
              </p>
              <h2 className="text-[#13761d] font-bold">
                600.00<span className="text-md font-extrabold">৳</span> –
                1,800.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={Moringa_paw}
              alt="Moringa Powder- সজনে পাতা গুড়া"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -17%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                Moringa Powder- সজনে পাতা গুড়া
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                Herbs
              </p>
              <h2 className="text-[#13761d] font-bold">
                500.00<span className="text-md font-extrabold">৳</span> –
                1,900.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={mosla_combo}
              alt="Mosla Combo Pack- মসলা কম্বো প্যাক"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -13%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                Mosla Combo Pack- মসলা কম্বো প্যাক
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                Spice
              </p>
              <h2 className="text-[#13761d] font-bold">
                830.00<span className="text-md font-extrabold">৳</span> –
                1,750.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={chili}
              alt="Spice, Red Chili Powder - মরিচ গুঁড়া"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -9%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                Organic Red Chili Powder – মরিচ গুঁড়া
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                Spice, Red Chili Powder - মরিচ গুঁড়া
              </p>
              <h2 className="text-[#13761d] font-bold">
                200.00<span className="text-md font-extrabold">৳</span> – 500.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
        </section>
        <section className="flex md:justify-between md:flex-row md:gap-x-0 justify-center flex-wrap gap-4 my-9">
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={holudur_gura}
              alt="Spice, Turmeric Powder- হলুদ গুঁড়া"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -25%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                Spice, Turmeric Powder- হলুদ গুঁড়া
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                খেজুরের গুড়
              </p>
              <h2 className="text-[#13761d] font-bold">
                150.00<span className="text-md font-extrabold">৳</span> – 250.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={seedmix_combo}
              alt="SeedMix + Honey Combo Package"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -7%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                SeedMix + Honey Combo Package
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                SeedMix + Honey Combo Package
              </p>
              <h2>
                <del className="text-[#7c7c7c] mr-2">
                  4,500.00<span className="text-md font-extrabold">৳</span>
                </del>
                <span className="text-[#13761d] font-bold">
                  1,400.00<span className="text-md font-extrabold">৳</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={Oil_combo}
              alt="অয়েল কম্বো প্যাক-Oil Combo Pack"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -9%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                অয়েল কম্বো প্যাক-Oil Combo Pack
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                Spice
              </p>
              <h2 className="text-[#13761d] font-bold">
                1000.00<span className="text-md font-extrabold">৳</span> –
                1,900.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={Ajwa_Dates}
              alt="আজওয়া খেজুর-Ajwa Dates"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -16%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                আজওয়া খেজুর-Ajwa Dates
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                খেজুর
              </p>
              <h2 className="text-[#13761d] font-bold">
                1,700.00<span className="text-md font-extrabold">৳</span> –
                7,400.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
        </section>
        <section className="flex md:justify-between md:flex-row md:gap-x-0 justify-center flex-wrap gap-4 my-9">
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={Masturd_oil_1}
              alt="কাঠের ঘানি ভাঙ্গা সরিষার তেল"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -7%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                সরিয়ার তেল, মেশিনের ঘানি
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                খেজুরের গুড়
              </p>
              <h2 className="text-[#13761d] font-bold">
                280.00<span className="text-md font-extrabold">৳</span> – 560.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={mastard_oil}
              alt="কাঠের ঘানি ভাঙ্গা সরিষার তেল (৫ লিটার)"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -9%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                কাঠের ঘানি ভাঙ্গা সরিষার তেল (৫ লিটার)
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                তেল, নারকেল তেল
              </p>
              <h2>
                <del className="text-[#7c7c7c] mr-2">
                  1,000.00<span className="text-md font-extrabold">৳</span>
                </del>
                <span className="text-[#13761d] font-bold">
                  1,900.00<span className="text-md font-extrabold">৳</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={Kumra_Bori}
              alt="গ্রামের কুমড়া বড়ি"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -17%
            </p>
            <p className="flex justify-center items-center bg-white text-[#333333] font-semibold md:w-12 md:h-12 p-3 w-10 h-10 text-xs rounded-full absolute top-14 left-1">
              SOLD OUT
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                গ্রামের কুমড়া বড়ি
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                Spice
              </p>
              <h2 className="text-[#13761d] font-bold">
                250.00<span className="text-md font-extrabold">৳</span> – 500.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={lacca_semai}
              alt="ঘিয়ে ভাজা প্রিমিয়াম লাচ্চা সেমাই"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -13%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                ঘিয়ে ভাজা প্রিমিয়াম লাচ্চা সেমাই
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                মুখরোচক খাবার
              </p>
              <h2 className="text-[#13761d] font-bold">
                1,700.00<span className="text-md font-extrabold">৳</span> –
                1,400.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
        </section>
        <section className="flex md:justify-between md:flex-row md:gap-x-0 justify-center flex-wrap gap-4 my-9">
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={satu}
              alt="ঢেঁকি ছাঁটা যবের ছাতু"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -13%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                তালবিনা যবের ছাতু, যবের ছাতু
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                তালবিনা যবের ছাতু, যবের ছাতু
              </p>
              <h2 className="text-[#13761d] font-bold">
                350.00<span className="text-md font-extrabold">৳</span> – 700.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={Picsart}
              alt="তালবিনা – (Half Combo ) 500G and 500G"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -12%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                তালবিনা – (Half Combo ) 500G and 500G
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                তালবিনা যবের ছাতু, যবের ছাতু
              </p>
              <h2>
                <del className="text-[#7c7c7c] mr-2">
                  850.00<span className="text-md font-extrabold">৳</span>
                </del>
                <span className="text-[#13761d] font-bold">
                  750.00<span className="text-md font-extrabold">৳</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={talbina}
              alt="তালবিনা – রাসুল (সঃ) এর দেয়া প্রেসক্রিপশন : অস্থির হৃদয় প্রশান্তকারী ( Combo )"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -13%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                তালবিনা – রাসুল (সঃ) এর দেয়া প্রেসক্রিপশন : অস্থির হৃদয়
                প্রশান্তকারী ( Combo )
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                তালবিনা যবের ছাতু, যবের ছাতু
              </p>
              <h2>
                <del className="text-[#7c7c7c] mr-2">
                  1,600.00<span className="text-md font-extrabold">৳</span>
                </del>
                <span className="text-[#13761d] font-bold">
                  1,400.00<span className="text-md font-extrabold">৳</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="md:w-72 w-40 border rounded relative overflow-hidden">
            <img
              src={Ghee}
              alt="দেশি গরুর দুধের প্রিমিয়াম ঘি- Ghee"
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -11%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                দেশি গরুর দুধের প্রিমিয়াম ঘি- Ghee
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                দেশি গরুর দুধের প্রিমিয়াম ঘি, মুখরোচক খাবার
              </p>
              <h2 className="text-[#13761d] font-bold">
                800.00<span className="text-md font-extrabold">৳</span> –
                1,600.00
                <span className="text-md font-extrabold">৳</span>
              </h2>
            </div>
          </div>
        </section>
        {/* Blog */}
        <h2 className="text-2xl font-semibold text-[#333333] md:mx-1 mx-3">
          Blog
        </h2>
        <div className="mt-2 mb-9 bg-slate-200 md:mx-1 mx-3">
          <p className="w-14 border border-[#13761d]"></p>
        </div>
        <div className="flex md:justify-between items-center md:flex-row flex-col gap-8">
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
                সাধারণত কালোজিরা নামে পরিচিত হলেও কালোজিরার আরো কিছু নাম আছে,
                যেমন- কালো কেওড়া, রোমান করিয়েন্ডার বা রোমান ধনে, ...
              </p>
              <p className="flex justify-center gap-x-2 items-center text-[#13761d] font-bold text-center mt-4 mb-6 cursor-pointer text-sm">
                CONTINUE READING
                <i>
                  <FaArrowRightLong />
                </i>
              </p>
            </div>
          </div>
          <div className="md:w-96 w-80 rounded border hover:shadow-lg duration-300">
            <div className="relative">
              <img
                src={blackseed_oil_2}
                alt="blackseed-oil"
                className="rounded w-96 hover:opacity-75 duration-300 cursor-pointer"
              />
              <p className="bg-white text-[#333333] px-4 py-1 font-semibold text-center rounded absolute top-2 left-2">
                11 <br /> AUG
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
                সাধারণত কালোজিরা নামে পরিচিত হলেও কালোজিরার আরো কিছু নাম আছে,
                যেমন- কালো কেওড়া, রোমান করিয়েন্ডার বা রোমান ধনে, ...
              </p>
              <p className="flex justify-center gap-x-2 items-center text-[#13761d] font-bold text-center mt-4 mb-6 cursor-pointer text-sm">
                CONTINUE READING
                <i>
                  <FaArrowRightLong />
                </i>
              </p>
            </div>
          </div>
          <div className="md:w-96 w-80 rounded border hover:shadow-lg duration-300">
            <div className="relative">
              <img
                src={blackseed_oil_2}
                alt="blackseed-oil"
                className="rounded w-96 hover:opacity-75 duration-300 cursor-pointer"
              />
              <p className="bg-white text-[#333333] px-4 py-1 font-semibold text-center rounded absolute top-2 left-2">
                11 <br /> AUG
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
                সাধারণত কালোজিরা নামে পরিচিত হলেও কালোজিরার আরো কিছু নাম আছে,
                যেমন- কালো কেওড়া, রোমান করিয়েন্ডার বা রোমান ধনে, ...
              </p>
              <p className="flex justify-center gap-x-2 items-center text-[#13761d] font-bold text-center mt-4 mb-6 cursor-pointer text-sm">
                CONTINUE READING
                <i>
                  <FaArrowRightLong />
                </i>
              </p>
            </div>
          </div>
        </div>
        {/* Youtbe video */}
        <div className="flex justify-center items-center md:gap-14 gap-6 md:flex-wrap md:flex-row flex-col my-20 md:mx-18">
          <iframe
            // width="384"
            // height="216"
            src="https://www.youtube.com/embed/ee2iS-oL7Mc"
            title="মহা ঔষধ নারকেল তেল কেন প্রতিদিন খাওয়া উচিত"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="rounded md:w-96 w-80 h-56"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/lcRIrue4EZM"
            title="ঘানি ভাঙ্গা দেশি সরিষার তেল - Health Benefit"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="rounded md:w-96 w-80 h-56"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/vilpevi2HCU"
            title="Talbina - তালবিনা কিভাবে কাজ করে এটা আমাদের প্রধান শারীরিক সমস্যা কিভাবে দূর করে ।"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="rounded md:w-96 w-80 h-56"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/jWTHhXp7X0U"
            title="শরীরের ঘারতি পূরণে সীড মিক্স শরবত দারুন কাজ করে"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="rounded md:w-96 w-80 h-56"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/_9-_0ld_u4I"
            title="আপনার immunity Boost করার সচেয়ে সেরা খাবার"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="rounded md:w-96 w-80 h-56"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/_b-_izQ-nWg"
            title="ঘিয়ে ভাজা দেশি চিনা বাদাম"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="rounded md:w-96 w-80 h-56"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Home;
