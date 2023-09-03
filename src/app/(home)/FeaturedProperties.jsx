"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// TODO: Do Fetch data from Database, Or try to fetch data better way.
import { Roboto_Condensed } from "next/font/google";
import featureData from "../../data/featuredProperty.json";

// Import React Icons
import { MdBedroomParent, MdBathroom } from "react-icons/md";
import { BsFillBuildingsFill, BsEyeFill } from "react-icons/bs";
import { TbMathOff } from "react-icons/tb";

const roboto_condensed = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});

const FeaturedProperties = () => {
  // Check feature Status is true , If true them reture a new array
  const featuredItem = featureData.filter(
    (item) => item.featuredStatus === true
  );

  return (
    <>
      <div className="container mx-auto py-5">
        {/* Top Content  */}
        <div className="text-center pb-20">
          <h1
            className={`text-center text-6xl font-bold text-black ${roboto_condensed.variable}`}
          >
            Display Latest & Featured Properties
          </h1>
          <p className="font-roboto text-lg pt-5 font-normal text-gray-500">
            Showcase the most current and standout properties in the real estate
            market <br />
            with our latest and featured property display, offering a curated{" "}
            <br />
            selection for discerning buyers and investors.
          </p>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={40}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {featuredItem.map((featuredCard) => (
          <SwiperSlide>
            <div className="rounded-2xl  bg-base-100 shadow-xl">
              <figure>
                <img
                  src={featuredCard.image}
                  className="h-full rounded-2xl relative"
                  alt="Album"
                />
                <div className="absolute top-3 left-3">
                  <div className="badge badge-primary mr-2">
                    {featuredCard.featuredStatus === true ? "Featured" : ""}
                  </div>
                  <div className="badge badge-secondary">
                    {featuredCard.propertyStatus}
                  </div>
                </div>
              </figure>
              <div className="card-body">
                <div className="relative">
                  <h2 className=" card-title w-full text-3xl font-roboto font-black">
                    {featuredCard.title}
                  </h2>
                  <BsEyeFill className="absolute  text-3xl font-roboto font-black top-2 left-[500px] cursor-pointer"></BsEyeFill>
                </div>

                <p>
                  {featuredCard.address.country}, {featuredCard.address.city},{" "}
                  {featuredCard.address.state}
                </p>

                {/* Icons and Bed room others  */}
                <div className="flex gap-10">
                  {/* left side  */}
                  <div>
                    <MdBedroomParent className="inline  w-5 h-5 text-[#9672FF]"></MdBedroomParent>{" "}
                    <span className="pl-2 text-[#9672FF] text-base">
                      Rooms {featuredCard.rooms}
                    </span>
                    <p>
                      <MdBathroom className="inline  w-5 h-5 text-[#4DDFFD]"></MdBathroom>
                      <span className=" pl-2 text-[#4DDFFD] text-base">
                        {" "}
                        Bath Rooms {featuredCard.bathrooms}
                      </span>
                    </p>
                  </div>
                  {/* right side  */}
                  <div>
                    <BsFillBuildingsFill className="inline  w-5 h-5 text-[#9672FF]"></BsFillBuildingsFill>
                    <span className="pl-2 text-[#9672FF] text-base">
                      Built Year {featuredCard.builtYear}
                    </span>
                    <p>
                      <TbMathOff className="inline  w-5 h-5 text-[#4DDFFD]"></TbMathOff>{" "}
                      <span className=" pl-2 text-[#4DDFFD] text-base">
                        {" "}
                        Square Feet {featuredCard.squareFeet}
                      </span>
                    </p>
                  </div>
                </div>
                <button className="btn btn-outline btn-secondary">
                  More Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000000"
          fill-opacity="1"
          d="M0,288L1440,64L1440,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default FeaturedProperties;
