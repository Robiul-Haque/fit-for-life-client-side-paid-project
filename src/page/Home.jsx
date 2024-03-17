import React from "react";
import badam from "../assets/Badam.jpg";
import acher_combo from "../assets/achar-combo.webp";
import akherGur from "../assets/Gur.webp";
import alu_bukhara from "../assets/Alu-bukhara.webp";
import amsotto from "../assets/Amsotto.webp";
import black_seed_honey from "../assets/black-seed-honey.webp";
import black_seed_oil from "../assets/Black Seed Oil.webp";
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

const Home = () => {
  return (
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
              350.00<span className="text-md font-extrabold">৳</span> – 1,750.00
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
            src={black_seed_oil}
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
              500.00<span className="text-md font-extrabold">৳</span> – 2,000.00
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
              750.00<span className="text-md font-extrabold">৳</span> – 1,500.00
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
              300.00<span className="text-md font-extrabold">৳</span> – 1,000.00
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
              600.00<span className="text-md font-extrabold">৳</span> – 1,500.00
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
              600.00<span className="text-md font-extrabold">৳</span> – 1,800.00
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
              500.00<span className="text-md font-extrabold">৳</span> – 1,900.00
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
              830.00<span className="text-md font-extrabold">৳</span> – 1,750.00
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
    </section>
  );
};

export default Home;
