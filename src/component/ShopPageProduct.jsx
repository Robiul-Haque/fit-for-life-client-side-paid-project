import React from "react";
import { Link } from "react-router-dom";

const ShopPageProduct = ({ handleCloseSideMenu, cardView, products }) => {
  return (
    <div
      onClick={handleCloseSideMenu}
      className={`grid xl:grid-cols-${cardView} md:grid-cols-${cardView} sm:grid-cols-2 grid-cols-2 place-items-center items-stretch md:gap-16 gap-3 mt-8`}
    >
      {products.map((product) => {
        return (
          <div
            key={product?.id}
            className={cardView === 4 ? "xl:w-56 w-full border rounded relative overflow-hidden" : "border rounded relative overflow-hidden"}
          >
            <img
              src={product?.productImage}
              alt={product?.productName}
              className="rounded-t hover:scale-105 duration-1000"
            />
            <p className="flex justify-center items-center bg-[#e02626] text-white font-semibold md:w-12 md:h-12 w-10 h-10 md:text-md text-sm rounded-full absolute top-1 left-1">
              -{product?.productDiscount}%
            </p>
            <div className="md:m-5 mx-1 my-5 text-center">
              <h1 className="text-lg font-bold text-[#333333] hover:text-[#7c7c7c] duration-300 cursor-pointer">
                <Link to={`/product/${product?.id}`}>
                  {product?.productName}
                </Link>
              </h1>
              <p className="text-[#b6b6b6] my-2 hover:text-[#6e6e6e] cursor-pointer duration-300">
                {product?.productCategory}
              </p>
              {product?.productPreviousPrice === "no" ? (
                <h2 className="text-[#13761d] font-extrabold">
                  {product?.productCurrentPrice}
                </h2>
              ) : (
                <h2 className="flex justify-center gap-x-3 flex-wrap">
                  <del className="text-[#6e6e6e] font-extrabold">
                    {product?.productPreviousPrice}
                  </del>
                  <span className="text-[#13761d] font-extrabold">
                    {product?.productCurrentPrice}
                  </span>
                </h2>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShopPageProduct;
