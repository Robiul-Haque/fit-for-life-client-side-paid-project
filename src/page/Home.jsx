import React, { useEffect, useState } from "react";
import acharImg from "../assets/rosun-achar-2-removebg-preview.webp";
import HomePageProducts from "../component/HomePageProducts";
import YoutubeVideo from "../component/YoutubeVideo";
import HomePageBlog from "../component/HomePageBlog";

const Home = () => {
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

  return (
    <div className="md:pt-[105px] pt-[56px]">
      <section className="bg-[url('./assets/blur-bg.jpg')] bg-cover bg-top sm:max-lg:h-[820px] h-full w-full pb-20">
        <div className="md:flex justify-evenly md:items-center sm:max-lg:flex-col pt-10">
          <div>
            <h1
              className="text-[#333333] md:text-5xl md:font-extrabold md:leading-normal leading-normal md:w-[420px] md:ml-0 text-4xl ml-4 font-bold"
              data-aos="fade-right"
            >
              Garlic Pickle দেশি রসুনের আঁচার
            </h1>
            <p
              className="text-[#333333] md:font-semibold md:text-lg my-6 sm:w-[560px] md:ml-0 leading-relaxed font-normal ml-4"
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
          <div className="md:ml-[-200px]">
            <img
              src={acharImg}
              alt="Rosun achar img"
              className="sm:max-lg:w-4/6 w-full mx-auto"
            />
          </div>
          {/* data-aos="zoom-in" */}
        </div>
      </section>
      <section className="lg:w-[95%] xl:w-[81%] mx-auto my-28 md:px-5">
        <h2 className="text-2xl font-semibold text-[#333333] md:mx-1 mx-3">
          ALL PRODUCTS
        </h2>
        <div className="mt-2 mb-9 bg-slate-200 md:mx-1 mx-3">
          <p className="w-44 border border-[#13761d]"></p>
        </div>
        {/* all products */}
        {loading ? (
          <div className="text-center my-20">
            <span class="loader"></span>
          </div>
        ) : (
          <HomePageProducts products={products} />
        )}
        {/* Blog */}
        <h2 className="text-2xl font-semibold text-[#333333] md:mx-1 mx-3">
          Blog
        </h2>
        <div className="mt-2 mb-9 bg-slate-200 md:mx-1 mx-3">
          <p className="w-14 border border-[#13761d]"></p>
        </div>
        <div className="flex xl:justify-evenly items-center xl:flex-row flex-col gap-8">
          <HomePageBlog/>
          <HomePageBlog/>
          <HomePageBlog/>
        </div>
        {/* Youtbe video */}
        <div className="flex justify-center items-center md:gap-14 gap-6 md:flex-wrap md:flex-row flex-col my-20 md:mx-18">
          <YoutubeVideo
            url={"https://www.youtube.com/embed/ee2iS-oL7Mc"}
            title={"মহা ঔষধ নারকেল তেল কেন প্রতিদিন খাওয়া উচিত"}
          />
          <YoutubeVideo
            url={"https://www.youtube.com/embed/lcRIrue4EZM"}
            title={"ঘানি ভাঙ্গা দেশি সরিষার তেল - Health Benefit"}
          />
          <YoutubeVideo
            url={"https://www.youtube.com/embed/vilpevi2HCU"}
            title={
              "Talbina - তালবিনা কিভাবে কাজ করে এটা আমাদের প্রধান শারীরিক সমস্যা কিভাবে দূর করে ।"
            }
          />
          <YoutubeVideo
            url={"https://www.youtube.com/embed/jWTHhXp7X0U"}
            title={"শরীরের ঘারতি পূরণে সীড মিক্স শরবত দারুন কাজ করে"}
          />
          <YoutubeVideo
            url={"https://www.youtube.com/embed/_9-_0ld_u4I"}
            title={"আপনার immunity Boost করার সচেয়ে সেরা খাবার"}
          />
          <YoutubeVideo
            url={"https://www.youtube.com/embed/_b-_izQ-nWg"}
            title={"ঘিয়ে ভাজা দেশি চিনা বাদাম"}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
