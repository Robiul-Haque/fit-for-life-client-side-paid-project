import React from "react";
import badam from "../assets/Badam.jpg";
import acher_combo from "../assets/achar-combo.webp";
import akherGur from "../assets/Gur.webp";
import alu_bukhara from "../assets/Alu-bukhara.webp";
import amsotto from "../assets/Amsotto.webp";
import black_seed_honey from "../assets/black-seed-honey.webp";
import black_seed_oil from "../assets/Black Seed Oil.webp";
import castor_oil from "../assets/Castor oil.webp";

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
            <h2>
              <del className="text-[#7c7c7c] mr-2">
                800.00<span className="text-md font-extrabold">৳</span>
              </del>
              <span className="text-[#13761d] font-bold">
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
            <h2>
              <del className="text-[#7c7c7c] mr-2">
                400.00<span className="text-md font-extrabold">৳</span>
              </del>
              <span className="text-[#13761d] font-bold">
                800.00<span className="text-md font-extrabold">৳</span>
              </span>
            </h2>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
