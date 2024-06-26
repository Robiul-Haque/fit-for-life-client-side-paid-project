import React, { useEffect, useState } from "react";
import { MdOutlineGridView } from "react-icons/md";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import ReactSlider from "react-slider";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import Castor_oil from "../assets/Castor oil.webp";
import alu_bukhara from "../assets/Alu-bukhara.webp";
import amsotto from "../assets/Amsotto.webp";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import ShopPageProduct from "../component/ShopPageProduct";

const Shop = () => {
  const MIN = 150;
  const MAX = 8400;
  const [values, setValues] = useState([MIN, MAX]);
  const [cardView, setCardView] = useState(3);
  const [toogleItem, setToogleItem] = useState(false);
  const [toogleSideMenu, setToogleSideMenu] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://fit-for-life-paid-project.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const handleOpenItem = () => {
    setToogleItem(true);
  };

  const handleCloseItem = () => {
    setToogleItem(false);
  };

  const handleOpenSideMenu = () => {
    setToogleSideMenu(true);
  };

  const handleCloseSideMenu = () => {
    setToogleSideMenu(false);
  };

  return (
    <section className="flex md:justify-center gap-x-12 xl:w-3/4 xl:mx-auto mx-1 md:mt-36 mt-16 md:mb-16 mb-14">
      <div className="xl:block xl:w-[22%] hidden">
        <h2 className="text-2xl font-semibold text-[#333333]">
          FILTER BY PRICE
        </h2>
        <ReactSlider
          onChange={setValues}
          value={values}
          min={MIN}
          max={MAX}
          className="md h-0.5 bg-[#13761d] cursor-pointer relative my-8"
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
          <h2 className="text-2xl font-semibold text-[#333333]">
            PRODUCT CATEGORIES
          </h2>
          <ul className="text-lg font-semibold text-[#333333]">
            <li className="mt-3">
              <NavLink to={"#"}>Accessories</NavLink>
            </li>
            <li className="my-3">
              <NavLink to={"#"}>Bars & Wafers</NavLink>
            </li>
            <li>
              <NavLink to={"#"}>Herbs</NavLink>
            </li>
            <li className="my-3">
              {!toogleItem ? (
                <>
                  <span
                    onClick={handleOpenItem}
                    className="flex justify-between"
                  >
                    <NavLink to={"#"} className="hover:text-[#13761d]">
                      Pickle-আঁচার
                    </NavLink>
                    <i>
                      <FaAngleDown className="cursor-pointer text-[#333333] rounded-full p-1 w-5 h-5 hover:bg-[#efefef] duration-300" />
                    </i>
                  </span>
                </>
              ) : (
                <>
                  <span
                    onClick={handleCloseItem}
                    className="flex justify-between items-center"
                  >
                    <NavLink to={"#"} className="hover:text-[#13761d]">
                      Pickle-আঁচার
                    </NavLink>
                    <FaAngleUp className="cursor-pointer text-[#333333] rounded-full p-1 w-5 h-5 hover:bg-[#efefef] duration-300" />
                  </span>
                </>
              )}
              {toogleItem ? (
                <li className="my-3 ml-4 hover:text-[#13761d]">
                  <NavLink to={"#"}>দেশি রসুনের আঁচার</NavLink>
                </li>
              ) : (
                <></>
              )}
            </li>
            <li>
              <NavLink to={"#"}>seeds</NavLink>
            </li>
            <li className="my-3">
              <NavLink to={"#"}>Spice</NavLink>
            </li>
            <li>
              <NavLink to={"#"}>আঁখের গুঁড়</NavLink>
            </li>
            <li className="my-3">
              <NavLink to={"#"}>কুমড়া বড়ি</NavLink>
            </li>
            <li>
              <NavLink to={"#"}>খনিজ লবন</NavLink>
            </li>
            <li className="mt-3">
              <NavLink to={"#"}>খেজুর</NavLink>
            </li>
          </ul>
        </div>
        <hr className="my-6" />
        <h2 className="text-2xl font-semibold text-[#333333] mb-6">
          TOP RATED PRODUCTS
        </h2>
        <div className="flex justify-start gap-x-3">
          <img
            src={Castor_oil}
            alt="Castor oil"
            className="w-20 h-20 rounded"
          />
          <div>
            <h2 className="text-lg font-bold">Castor oil- ক্যাস্টর অয়েল</h2>
            <span
              className="flex gap-x-1 items-center  my-1"
              title="Rated 5.0 out of 5"
            >
              <IoIosStar className="text-[#EABE12]" />
              <IoIosStar className="text-[#EABE12]" />
              <IoIosStar className="text-[#EABE12]" />
              <IoIosStar className="text-[#EABE12]" />
              <IoIosStar className="text-[#EABE12]" />
            </span>
            <p className="text-[#13761d] font-bold">
              280.00<span className="text-md font-extrabold">৳</span> – 560.00
              <span className="text-md font-extrabold">৳</span>
            </p>
          </div>
        </div>
        <hr className="my-5" />
        <div className="flex justify-start gap-x-3">
          <img
            src={alu_bukhara}
            alt="alu_bukhara"
            className="w-20 h-20 rounded"
          />
          <div>
            <h2 className="text-lg font-bold">Alu Bukhara Pickle</h2>
            <span
              className="flex gap-x-1 items-center my-1"
              title="Rated 5.0 out of 5"
            >
              <IoIosStar className="text-[#EABE12]" />
              <IoIosStar className="text-[#EABE12]" />
              <IoIosStar className="text-[#EABE12]" />
              <IoIosStar className="text-[#EABE12]" />
              <IoIosStar className="text-[#EABE12]" />
            </span>
            <p className="text-[#13761d] font-bold">
              280.00<span className="text-md font-extrabold">৳</span> – 560.00
              <span className="text-md font-extrabold">৳</span>
            </p>
          </div>
        </div>
        <hr className="my-5" />
        <div className="flex justify-start gap-x-3">
          <img src={amsotto} alt="amsotto" className="w-20 h-20 rounded" />
          <div>
            <h2 className="text-lg font-bold">Castor oil- ক্যাস্টর অয়েল</h2>
            <span
              className="flex gap-x-1 items-center my-1"
              title="Rated 5.0 out of 5"
            >
              <IoIosStar className="text-[#EABE12]" />
              <IoIosStar className="text-[#EABE12]" />
              <IoIosStar className="text-[#EABE12]" />
              <IoIosStar className="text-[#EABE12]" />
              <IoIosStar className="text-[#EABE12]" />
            </span>
            <p>
              <del className="text-[#7c7c7c] mr-2">
                1,000.00<span className="text-md font-extrabold">৳</span>
              </del>
              <span className="text-[#13761d] font-bold">
                1,900.00<span className="text-md font-extrabold">৳</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[98%] xl:w-[78%]">
        <div className="xl:hidden block">
          <div
            onClick={handleCloseSideMenu}
            className="flex justify-between items-center mt-4 md:text-xl"
          >
            <p className="cursor-pointer">
              Home / <span className="text-[#333333] font-bold">Shop</span>
            </p>
            <p>Showing 1–12 of 46 results</p>
          </div>
          <hr className="my-5" />
          <div className="flex justify-between items-center md:text-xl">
            <span
              onClick={handleOpenSideMenu}
              className="flex gap-x-2 items-center"
            >
              <i className="text-2xl font-bold">
                <CgMenuLeftAlt />
              </i>
              <p className="font-bold">Show sidebar</p>
            </span>
            {toogleSideMenu ? (
              <div className="block absolute -top-2 md:-top-8 left-0 z-30 w-5/6 md:w-3/5 h-[100%] bg-slate-100 xl:hidden">
                <div className="flex justify-between items-center cursor-pointer mt-4 mx-4">
                  <h2 className="font-semibold text-xl text-[#333333]">
                    SIDEBAR
                  </h2>
                  <p
                    onClick={handleCloseSideMenu}
                    className="flex gap-x-2 font-semibold"
                  >
                    <i className="font-extrabold text-2xl" title="Close">
                      <IoClose />
                    </i>
                  </p>
                </div>
                <hr className="my-4" />
                <div className="px-4">
                  <h2 className="text-xl font-semibold text-[#333333]">
                    FILTER BY PRICE
                  </h2>
                  <ReactSlider
                    onChange={setValues}
                    value={values}
                    min={MIN}
                    max={MAX}
                    className="w-5/6 h-0.5 bg-[#13761d] cursor-pointer relative my-8"
                  />
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[#555555]">Price</span> :
                      <span className="text-[#333333] text-md font-semibold ml-2">
                        {values[0]}
                        <span className="text-[#333333] font-extrabold">৳</span>
                        <MdOutlineHorizontalRule className="inline mx-1" />
                        {values[1]}
                        <span className="text-[#333333] font-extrabold">৳</span>
                      </span>
                    </div>
                    <button className="bg-[#efefef] px-4 py-2 rounded font-semibold">
                      FILTER
                    </button>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="px-4">
                  <h1 className="text-xl font-semibold text-[#333333] mb-4">
                    Product categories
                  </h1>
                  <ul className="text-lg font-semibold text-[#333333]">
                    <li className="mt-3">
                      <NavLink to={"#"}>Accessories</NavLink>
                    </li>
                    <li className="my-3">
                      <NavLink to={"#"}>Bars & Wafers</NavLink>
                    </li>
                    <li>
                      <NavLink to={"#"}>Herbs</NavLink>
                    </li>
                    <li className="my-3">
                      {!toogleItem ? (
                        <>
                          <span
                            onClick={handleOpenItem}
                            className="flex justify-between"
                          >
                            <NavLink to={"#"} className="hover:text-[#13761d]">
                              Pickle-আঁচার
                            </NavLink>
                            <i>
                              <FaAngleDown className="cursor-pointer text-[#333333] rounded-full p-1 w-5 h-5 hover:bg-[#efefef] duration-300" />
                            </i>
                          </span>
                        </>
                      ) : (
                        <>
                          <span
                            onClick={handleCloseItem}
                            className="flex justify-between items-center"
                          >
                            <NavLink to={"#"} className="hover:text-[#13761d]">
                              Pickle-আঁচার
                            </NavLink>
                            <FaAngleUp className="cursor-pointer text-[#333333] rounded-full p-1 w-5 h-5 hover:bg-[#efefef] duration-300" />
                          </span>
                        </>
                      )}
                      {toogleItem ? (
                        <li className="my-3 ml-4 hover:text-[#13761d]">
                          <NavLink to={"#"}>দেশি রসুনের আঁচার</NavLink>
                        </li>
                      ) : (
                        <></>
                      )}
                    </li>
                    <li>
                      <NavLink to={"#"}>seeds</NavLink>
                    </li>
                    <li className="my-3">
                      <NavLink to={"#"}>Spice</NavLink>
                    </li>
                    <li>
                      <NavLink to={"#"}>আঁখের গুঁড়</NavLink>
                    </li>
                    <li className="my-3">
                      <NavLink to={"#"}>কুমড়া বড়ি</NavLink>
                    </li>
                    <li>
                      <NavLink to={"#"}>খনিজ লবন</NavLink>
                    </li>
                    <li className="mt-3">
                      <NavLink to={"#"}>খেজুর</NavLink>
                    </li>
                  </ul>
                </div>
                <hr className="my-4" />
                <div className="px-4">
                  <h1 className="text-xl font-semibold text-[#333333] mb-4">
                    Product categories
                  </h1>
                  <div className="flex justify-start gap-x-3">
                    <img
                      src={Castor_oil}
                      alt="Castor oil"
                      className="w-20 h-20 rounded"
                    />
                    <div>
                      <h2 className="text-lg font-bold">
                        Castor oil- ক্যাস্টর অয়েল
                      </h2>
                      <span
                        className="flex gap-x-1 items-center  my-1"
                        title="Rated 5.0 out of 5"
                      >
                        <IoIosStar className="text-[#EABE12]" />
                        <IoIosStar className="text-[#EABE12]" />
                        <IoIosStar className="text-[#EABE12]" />
                        <IoIosStar className="text-[#EABE12]" />
                        <IoIosStar className="text-[#EABE12]" />
                      </span>
                      <p className="text-[#13761d] font-bold">
                        280.00<span className="text-md font-extrabold">৳</span>{" "}
                        – 560.00
                        <span className="text-md font-extrabold">৳</span>
                      </p>
                    </div>
                  </div>
                  <hr className="my-5" />
                  <div className="flex justify-start gap-x-3">
                    <img
                      src={alu_bukhara}
                      alt="alu_bukhara"
                      className="w-20 h-20 rounded"
                    />
                    <div>
                      <h2 className="text-lg font-bold">Alu Bukhara Pickle</h2>
                      <span
                        className="flex gap-x-1 items-center my-1"
                        title="Rated 5.0 out of 5"
                      >
                        <IoIosStar className="text-[#EABE12]" />
                        <IoIosStar className="text-[#EABE12]" />
                        <IoIosStar className="text-[#EABE12]" />
                        <IoIosStar className="text-[#EABE12]" />
                        <IoIosStar className="text-[#EABE12]" />
                      </span>
                      <p className="text-[#13761d] font-bold">
                        280.00<span className="text-md font-extrabold">৳</span>{" "}
                        – 560.00
                        <span className="text-md font-extrabold">৳</span>
                      </p>
                    </div>
                  </div>
                  <hr className="my-5" />
                  <div className="flex justify-start gap-x-3">
                    <img
                      src={amsotto}
                      alt="amsotto"
                      className="w-20 h-20 rounded"
                    />
                    <div>
                      <h2 className="text-lg font-bold">
                        Castor oil- ক্যাস্টর অয়েল
                      </h2>
                      <span
                        className="flex gap-x-1 items-center my-1"
                        title="Rated 5.0 out of 5"
                      >
                        <IoIosStar className="text-[#EABE12]" />
                        <IoIosStar className="text-[#EABE12]" />
                        <IoIosStar className="text-[#EABE12]" />
                        <IoIosStar className="text-[#EABE12]" />
                        <IoIosStar className="text-[#EABE12]" />
                      </span>
                      <p>
                        <del className="text-[#7c7c7c] mr-2">
                          1,000.00
                          <span className="text-md font-extrabold">৳</span>
                        </del>
                        <span className="text-[#13761d] font-bold">
                          1,900.00
                          <span className="text-md font-extrabold">৳</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
            <select
              onClick={handleCloseSideMenu}
              name="sorting"
              className="border-b-2 focus:border-b-green-700 focus:outline-none cursor-pointer font-semibold text-[#333333] w-32 md:w-52 position-fixed bottom-0"
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
        </div>
        <div
          onClick={handleCloseSideMenu}
          className="xl:flex justify-between text-[#555555] hidden"
        >
          <p className="cursor-pointer">
            Home / <span className="text-[#333333] font-bold">Shop</span>
          </p>
          <p className="cursor-pointer">
            <span className="text-[#333333] font-bold">Show: 9</span> / 12 / 18
            / 24
          </p>
          <div className="flex gap-x-3 items-center cursor-pointer">
            <i
              onClick={() => setCardView(2)}
              className={
                cardView === 2
                  ? "text-3xl text-black"
                  : "text-3xl text-[#555555] hover:text-black"
              }
            >
              <MdOutlineGridView />
            </i>
            <i
              onClick={() => setCardView(3)}
              className={
                cardView === 3
                  ? "text-2xl text-black"
                  : "text-2xl text-[#555555] hover:text-black"
              }
            >
              <TfiLayoutGrid3 />
            </i>
            <i
              onClick={() => setCardView(4)}
              className={
                cardView === 4
                  ? "text-[26px] text-black"
                  : "text-[26px] text-[#555555] hover:text-black"
              }
            >
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
        {/* all products */}
        {loading ? (
          <div className="text-center my-20">
            <span class="loader"></span>
          </div>
        ) : (
          <ShopPageProduct
            handleCloseSideMenu={handleCloseSideMenu}
            loading={loading}
            cardView={cardView}
            products={products}
          />
        )}
        {/* pagination */}
        <div className="flex justify-center items-center gap-x-4 mt-10">
          <span className="bg-[#13761d] text-white font-semibold w-7 h-7 text-center rounded cursor-pointer">
            1
          </span>
          <span className="text-[#333333] font-semibold w-7 h-7 text-center rounded cursor-pointer hover:bg-[#efefef] duration-300">
            2
          </span>
          <span className="text-[#333333] font-semibold w-7 h-7 text-center rounded cursor-pointer hover:bg-[#efefef] duration-300">
            3
          </span>
          <span className="text-[#333333] font-semibold w-7 h-7 text-center rounded cursor-pointer hover:bg-[#efefef] duration-300">
            4
          </span>
          <i className="text-[#333333] font-semibold text-center rounded cursor-pointer">
            <FaAngleRight />
          </i>
        </div>
      </div>
    </section>
  );
};

export default Shop;
