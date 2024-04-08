import React from "react";
import acher_combo from "../assets/achar-combo.webp";
import { Link } from "react-router-dom";

export const FeaturesProducts = () => {
  return (
    <div key={"1"} className="w-[98%] border rounded relative overflow-hidden">
      <img
        src={acher_combo}
        alt={acher_combo}
        className="rounded-t cursor-pointer hover:scale-105 duration-1000"
      />
      <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
        -{10}%
      </p>
      {/* {product?.productAvailable !== "yes" && (
            <p className="flex justify-center items-center bg-white text-[#333333] font-semibold md:w-12 md:h-12 p-3 w-10 h-10 text-xs rounded-full absolute top-14 left-1">
              SOLD OUT
            </p>
          )} */}
      <div className="md:m-5 mx-1 my-5 text-center">
        <h1 className="text-lg font-semibold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
          <Link to={`/home`}>{"Aachar Combo- আচার কম্বো"}</Link>
        </h1>
        <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
          Pickle-আঁচার, মুখরোচক খাবার
        </p>
        <h2 className="text-[#13761d] font-extrabold">300.00৳ – 600.00৳</h2>
      </div>
    </div>
  );
};
