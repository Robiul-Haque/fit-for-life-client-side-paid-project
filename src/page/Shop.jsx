import React, { useState } from "react";
import { MdOutlineGridView } from "react-icons/md";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import badam from "../assets/Badam.jpg";
import acher_combo from "../assets/achar-combo.webp";
import ReactSlider from "react-slider";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Shop = () => {
  const MIN = 150;
  const MAX = 8400;
  const [values, setValues] = useState([MIN, MAX]);

  return (
    <section className="flex justify-center gap-x-16 md:w-3/4 mx-auto mt-12 mb-28 md:px-20">
      <div className="w-1/3">
        <h2 className="text-2xl font-semibold text-[#333333]">FILTER BY PRICE</h2>
        <ReactSlider
          onChange={setValues}
          value={values}
          min={MIN}
          max={MAX}
          className="w-72 h-0.5 bg-[#13761d] cursor-pointer relative my-8"
        />
        <div className="flex justify-between gap-3 items-center">
          <div>
            <span className="text-[#555555]">Price</span> :
            <span className="text-[#333333] text-md font-semibold ml-2">
              {values[0]}
              <span className="text-[#333333] font-extrabold">৳</span>
              <MdOutlineHorizontalRule className="inline mx-2" />
              {values[1]}
              <span className="text-[#333333] font-extrabold">৳</span>
            </span>
          </div>
          <button className="bg-[#efefef] px-4 py-2 rounded font-semibold">
            FILTER
          </button>
        </div>
        <hr className="my-6" />
        <div>
          <h2 className="text-2xl font-semibold">PRODUCT CATEGORIES</h2>
          <ul>
            <li>
              <NavLink to={"#"}>Accessories</NavLink>
            </li>
            <li>
              <NavLink to={"#"}>Bars & Wafers</NavLink>
            </li>
            <li>
              <NavLink to={"#"}>Herbs</NavLink>
            </li>
            <li>
              <NavLink to={"#"}>Pickle-আঁচার</NavLink>
              
            </li>
            <li>
              <NavLink to={"#"}>seeds</NavLink>
            </li>
            <li>
              <NavLink to={"#"}>Spice</NavLink>
            </li>
            <li>
              <NavLink to={"#"}>আঁখের গুঁড়</NavLink>
            </li>
            <li>
              <NavLink to={"#"}>কুমড়া বড়ি</NavLink>
            </li>
            <li>
              <NavLink to={"#"}>খনিজ লবন</NavLink>
            </li>
            <li>
              <NavLink to={"#"}>খেজুর</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-2/3">
        <div className="flex justify-between text-[#555555]">
          <p className="cursor-pointer">
            Home / <span className="text-[#333333] font-bold">Shop</span>
          </p>
          <p className="cursor-pointer">
            <span className="text-[#333333] font-bold">Show: 9</span> / 12 / 18
            / 24
          </p>
          <div className="flex gap-x-3 items-center cursor-pointer">
            <i className="text-3xl text-[#333333]">
              <MdOutlineGridView />
            </i>
            <i className="text-2xl text-[#555555] hover:text-[#333333]">
              <TfiLayoutGrid3 />
            </i>
            <i className="text-2xl text-[#555555] hover:text-[#333333]">
              <TfiLayoutGrid4 />
            </i>
          </div>
          <select
            name="sorting"
            className="border-b-2 focus:border-b-green-700 focus:outline-none cursor-pointer font-semibold text-[#333333]"
          >
            <option value="defult sorting">Defult sorting</option>
            <option value="Sort by popularity">Sort by popularity</option>
            <option value="Sort by average rating">
              Sort by average rating
            </option>
            <option value="Sort by latest">Sort by latest</option>
            <option value="Sort by price: low to high">
              Sort by price: low to high
            </option>
            <option value="Sort by price: high to low">
              Sort by price: high to low
            </option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-12 mt-8">
          <div className="md:w-96 w-40 border rounded relative overflow-hidden">
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
          <div className="md:w-96 w-40 border rounded relative overflow-hidden">
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
            {/* </div> */}
          </div>
          <div className="md:w-96 w-40 border rounded relative overflow-hidden">
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
          <div className="md:w-96 w-40 border rounded relative overflow-hidden">
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
          <div className="md:w-96 w-40 border rounded relative overflow-hidden">
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
          <div className="md:w-96 w-40 border rounded relative overflow-hidden">
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
        </div>
      </div>
    </section>
  );
};

export default Shop;
