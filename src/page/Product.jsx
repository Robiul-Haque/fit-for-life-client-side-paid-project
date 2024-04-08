import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { FiPlus } from "react-icons/fi";
import { IoRemoveOutline } from "react-icons/io5";
import { IoIosGitCompare } from "react-icons/io";
import love from "../assets/love.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import delivery_1 from "../assets/Delivery-1.jpg";
import delivery_2 from "../assets/Delivery-2.jpg";
import { Link, useLoaderData } from "react-router-dom";
import { FeaturesProducts } from "../component/FeaturesProducts";

const Product = () => {
  const {
    productName,
    productCategory,
    productCurrentPrice,
    productPreviousPrice,
    productDiscount,
    productAvailable,
    productTages,
    weight,
    singleProductImages,
  } = useLoaderData();
  const [cartCount, setCartCount] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [imgIndex, setImgIndex] = useState([]);

  const handleAddToCart = (name, currentPrice, discount, available) => {
    const getProduct = JSON.parse(localStorage.getItem("fit-for-life") || "[]");
    const setProduct = {
      name,
      currentPrice,
      discount,
      available,
      cartCount,
    };
    getProduct.push(setProduct);
    localStorage.setItem("fit-for-life", JSON.stringify(getProduct));
    console.log(getProduct);
  };

  const handleToggleDescriptionTab = () => {
    setIsOpen(true);
  };

  const handleToggleShipingTab = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:w-[94%] xl:w-2/3 mx-auto xl:mt-28 mb-20">
      <div className="flex justify-between items-center md:flex-row flex-col mt-14">
        <p className="cursor-pointer my-6">
          {productName}
          <span className="text-[#333333] font-bold">{productCategory}</span>
        </p>
        <Link to={"/shop"}>
          <span className="font-semibold">Back</span>
        </Link>
      </div>
      <div className="flex justify-star md:gap-x-5 xl:gap-x-10 items-start md:flex-row flex-col">
        <div className="md:w-[500px] md:h-[500px] md:m-0 m-6">
          {imgIndex == 0 ? (
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: singleProductImages[0],
                },
                largeImage: {
                  src: singleProductImages[0],
                  width: 1200,
                  height: 800,
                },
                enlargedImagePosition: "hover",
                lensStyle: {
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
                isHintEnabled: true,
              }}
            />
          ) : imgIndex == 1 ? (
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: singleProductImages[1],
                },
                largeImage: {
                  src: singleProductImages[1],
                  width: 1200,
                  height: 800,
                },
                enlargedImagePosition: "hover",
                lensStyle: {
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
                isHintEnabled: true,
              }}
            />
          ) : imgIndex == 2 ? (
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: singleProductImages[2],
                },
                largeImage: {
                  src: singleProductImages[2],
                  width: 1200,
                  height: 800,
                },
                enlargedImagePosition: "hover",
                lensStyle: {
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
                isHintEnabled: true,
              }}
            />
          ) : (
            ""
          )}
        </div>
        <div className="md:ml-0 ml-5">
          <h2 className="font-bold text-xl">{productName}</h2>
          <h1 className="font-extrabold text-xl text-[#13761d] my-5">
            {productCurrentPrice}
          </h1>
          <p className="font-semibold">
            ☎️Hotline: <span className="text-[#13761d]">09639-426742</span>
          </p>
          <p className="font-semibold my-5">ওজন / Weight: {weight}</p>
          <p className="text-[#13761d] font-extrabold text-md">
            <del className="text-[#bbbbbb] mr-3">
              {productPreviousPrice !== "no" && productPreviousPrice}
            </del>
            {productCurrentPrice}
          </p>
          <div className="flex xl:gap-x-12 gap-y-6 xl:items-center items-start xl:flex-row flex-col my-5">
            <div className="flex justify-start items-cente">
              <span
                onClick={() => setCartCount(cartCount - 1)}
                className="border text-center pe-2 pb-2 ps-2 pt-3 h-11 w-9 cursor-pointer hover:bg-[#13761d] hover:text-white duration-300 rounded"
              >
                <IoRemoveOutline />
              </span>
              <span className="border text-center p-2 font-bold h-11 w-11 rounded">
                {cartCount}
              </span>
              <span
                onClick={() => setCartCount(cartCount + 1)}
                className="border text-center pe-2 pb-2 ps-2 pt-3 h-11 w-9 cursor-pointer hover:bg-[#13761d] hover:text-white duration-300 rounded"
              >
                <FiPlus />
              </span>
            </div>
            <div>
              <button
                onClick={() =>
                  handleAddToCart(
                    productName,
                    productCurrentPrice,
                    productDiscount,
                    productAvailable
                  )
                }
                className="bg-[#13761d] hover:bg-[#245e26] duration-300 text-white font-semibold py-3 px-4 rounded me-6 md:max-lg:mb-5"
              >
                ADD TO CART
              </button>
              <button className="border border-[#13761d] text-[#13761d] hover:bg-[#13761d] hover:text-white duration-300 font-semibold py-3 px-4 rounded">
                BUY NOW
              </button>
            </div>
          </div>
          <div className="flex gap-x-8 items-center my-6">
            <p className="flex gap-x-1.5 items-center font-semibold cursor-pointer hover:text-[#5e6e76] duration-300">
              <span className="text-2xl">
                <IoIosGitCompare />
              </span>
              Compare
            </p>
            <p className="flex gap-x-1.5 items-center font-semibold cursor-pointer hover:text-[#5e6e76] duration-300">
              <img src={love} alt="wishlist icon" className="" />
              Add to wishlist
            </p>
          </div>
          <hr />
          <div>
            <p className="mt-5 mb-1.5">
              <span className="font-bold">SKU:</span> N/A
            </p>
            <p>
              <span className="font-bold">Category:</span> {productCategory}
            </p>
            <p className="my-1.5">
              <span className="font-bold">Tags:</span>{" "}
              {productTages?.map((tag) => " " + tag + ",")}
            </p>
            <p className="flex gap-x-3 items-center">
              <span className="font-bold">Share:</span>
              <a href="https://www.facebook.com/" title="Facebook">
                <FaFacebookF className="hover:text-[#13761d] duration-300 cursor-pointer" />
              </a>
              <a href="https://twitter.com/" title="Twitter">
                <FaXTwitter className="hover:text-[#13761d] duration-300 cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/" title="Linkedin">
                <FaLinkedinIn className="hover:text-[#13761d] duration-300 cursor-pointer" />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex gap-4 mt-4 hidden">
        {singleProductImages.map((img, index) => {
          return (
            <img
              key={index}
              src={img}
              alt={productName}
              className="w-28 rounded-sm cursor-pointer"
              onClick={() => setImgIndex(index)}
            />
          );
        })}
      </div>
      <div className="flex justify-center md:gap-x-16 gap-x-4 items-center mt-20 mb-12">
        <p
          onClick={handleToggleDescriptionTab}
          className={`${
            isOpen
              ? "font-semibold cursor-pointer text-[#13761d] p-2 border-b-2 border-b-[#13761d]"
              : "font-semibold cursor-pointer hover:text-[#13761d] duration-300 p-2"
          }`}
        >
          DESCRIPTION
        </p>
        <p
          onClick={handleToggleShipingTab}
          className={`${
            isOpen
              ? "font-semibold cursor-pointer hover:text-[#13761d] duration-300 p-2"
              : "font-semibold cursor-pointer text-[#13761d] p-2 border-b-2 border-b-[#13761d]"
          }`}
        >
          SHIPPING & DELIVERY
        </p>
      </div>
      {isOpen ? (
        <div className="md:ms-0 mx-6">
          <p>
            ডায়াবেটিস নিয়ন্ত্রণে রাখে রক্তে শর্করা এবং কোলেস্টেরলের মাত্রা
            স্বাভাবিক রাখতে বাদাম গুরুত্বপূর্ণ ভূমিকা পালন করে থাকে।
          </p>
          <ul className="list-decimal leading-loose my-6">
            <li>
              পদ্মা ও যমুনা নদীর চরে চাষ করা অর্গানিক ( রাসায়নিক সার ও কীটনাশক )
              মুক্ত চিনা বাদাম সংগ্রহ করে manually হাতে বেছে বাছাই করা বড় দানা ।
            </li>
            <li>১ কেজি ও ৫০০গ্রাম প্যাক</li>
            <li>১০০% ঘিয়ে ভাজা</li>
            <li>১০০% অর্গানিক</li>
          </ul>
          <p className="leading-loose">
            সববয়সের মানুষের জন্য চিনা বাদাম স্বাস্থ্যসম্মত খাবার। শখ করে কখনো
            কখনো হয়তো খাওয়া হয় তবে এর উপকারিতা সম্পর্কে জানলে প্রতিদিনের
            খাদ্যতালিকায় এই বাদাম রাখতে চাইবেন। গবেষকরা দেখেছেন, যাঁরা নিয়মিত
            কাঁচা বাদাম খেয়ে থাকেন, তাঁদের শরীরে নানা রকম পুষ্টিকর উপাদান প্রবেশ
            করে। তার প্রভাবে বৃদ্ধি পায় রোগ প্রতিরোধ ক্ষমতা। কাঁচা বাদামের
            পুষ্টিগুণ হাড়ের জোর বাড়ায়। পাশাপাশি, মস্তিষ্কের ক্ষমতা বাড়ায়,
            ক্যানসারের আশঙ্কাও দূরে রাখে। ভাজা বাদামে থাকে ভাল কোলেস্টেরল। সঙ্গে
            থাকে প্রোটিন এবং ফাইবার। তাই ভাজা বাদাম খেলে বদহজমের সমস্যা দূর হয়।
            রক্তের শর্করার মাত্রা এবং রক্তচাপ নিয়ন্ত্রণে থাকে। ভাজা বাদাম খেলে
            দাঁতের ক্ষয়ও কমে কারন বাদামে রয়েছে প্রচুর ক্যালসিয়াম ।
          </p>
          <p className="my-6">
            ☎️ বিস্তারিত জানতে আমাদের পেজে মেসেজ করুনঃ m.me/fitforlifebd
          </p>
          <p>Whatsapp 💬 +8801717426742 +8801620858385</p>
        </div>
      ) : (
        <div className="md:mx-0 mx-6">
          <div className="flex gap-12 md:flex-row flex-col">
            <img
              src={delivery_1}
              alt="delivery_1"
              className="rounded shadow-2xl"
            />
            <img
              src={delivery_2}
              alt="delivery_2"
              className="rounded shadow-2xl"
            />
            <ul className="list-disc leading-loose">
              <li>Cash on Delivery ( All Bangladesh ) 2-4 Days</li>
              <li>Hotline: +8801620858385 , +8801717426742</li>
              <li>Home Delivery : steadfast</li>
              <li>
                কুরিয়ার সার্ভিস ঃ জননী কুরিয়ার , সওদাগর কুরিয়ার , করতোয়া কুরিয়ার
                , Rainbow কুরিয়ার , AJR
              </li>
            </ul>
          </div>
        </div>
      )}
      <hr className="my-8" />
      <div className="mx-5 md:mx-0">
        <h1 className="text-xl font-semibold">Feature Product</h1>
        <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center items-stretch gap-x-3 gap-y-6 sm:gap-y-6 md:gap-y-10 xl:gap-y-16 my-8">
          <FeaturesProducts />
          <FeaturesProducts />
          <FeaturesProducts />
          <FeaturesProducts />
        </section>
      </div>
    </div>
  );
};

export default Product;
