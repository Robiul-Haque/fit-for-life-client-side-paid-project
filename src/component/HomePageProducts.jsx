import React from "react";
import { Link } from "react-router-dom";

const HomePageProducts = ({ products }) => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center items-stretch gap-x-3 gap-y-6 sm:gap-y-6 md:gap-y-10 xl:gap-y-16 my-16 mx-3 max-sm:mx-3">
      {products.map((product) => {
        return (
          <div
            key={product?.id}
            className="w-[98%] border rounded relative overflow-hidden"
          >
            <img
              src={product?.productImage}
              alt={product?.productName}
              className="rounded-t cursor-pointer hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -{product?.productDiscount}%
            </p>
            {product?.productAvailable !== "yes" && (
              <p className="flex justify-center items-center bg-white text-[#333333] font-semibold md:w-12 md:h-12 p-3 w-10 h-10 text-xs rounded-full absolute top-14 left-1">
                SOLD OUT
              </p>
            )}
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-semibold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                <Link to={`/product/${product?.id}`}>
                  {product?.productName}
                </Link>
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                {product?.productCategory}
              </p>
              <h2 className="text-[#13761d] font-extrabold">
                {product?.productCurrentPrice}
              </h2>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default HomePageProducts;
