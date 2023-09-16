"use client";

import { Roboto_Condensed } from "next/font/google";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";

import heroImage5 from "../../assest/image/heroImage5.jpg";
import heroImage1 from "../../assest/image/heroImage1.png";
import heroImage2 from "../../assest/image/heroImage2.png";
import heroImage3 from "../../assest/image/heroImage3.png";
import Image from "next/image";

const roboto_condensed = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});

const imageStyle = {
  transform: "scale(1.5)",
};

const HeroSlider = () => {
  return (
    <div className="main-slider">
      <Swiper
        slidesPerView={1}
        loop
        effect="fade"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter:true
        }}
        modules={[Autoplay]}
      >
        {/* Slider 1  */}
        <SwiperSlide>
          <div className="text-white">
            <div className="relative ">
              <Image src={heroImage1} style={imageStyle}  ></Image>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent "></div>
            </div>
            <div className="absolute top-[40%] left-[40%]">
              <h1 className={`${roboto_condensed.variable} font-bold text-6xl`}>
                Smart Living Style11 <br />
                for Smart People
              </h1>
              <p className="font-roboto text-base font-normal">
                Much did had call new drew that kept. Limits expect wonder{" "}
                <br /> law she. Now has you views woman noisy match money rooms.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slider 2  */}
        <SwiperSlide>
          <div className="text-white">
            <div className="relative">
              <Image src={heroImage2} style={imageStyle}></Image>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent "></div>
            </div>
            <div className="absolute top-[40%] left-[40%]">
              <h1 className={`${roboto_condensed.variable} font-bold text-6xl`}>
                Smart Living Style <br />
                for Smart People
              </h1>
              <p className="font-roboto text-base font-normal">
                Much did had call new drew that kept. Limits expect wonder{" "}
                <br /> law she. Now has you views woman noisy match money rooms.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slider 3  */}
        <SwiperSlide>
          <div className="text-white">
            <div className="relative">
              <Image src={heroImage3} style={imageStyle}></Image>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent "></div>
            </div>
            <div className="absolute top-[40%] left-[40%]">
              <h1 className={`${roboto_condensed.variable} font-bold text-6xl`}>
                Smart Living Style <br />
                for Smart People
              </h1>
              <p className="font-roboto text-base font-normal">
                Much did had call new drew that kept. Limits expect wonder{" "}
                <br /> law she. Now has you views woman noisy match money rooms.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slider 4  */}
        <SwiperSlide>
          <div className="text-white">
            <div className="relative">
              <Image src={heroImage5} style={imageStyle}></Image>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent "></div>
            </div>
            <div className="absolute top-[40%] left-[40%]">
              <h1 className={`${roboto_condensed.variable} font-bold text-6xl`}>
                Smart Living Style <br />
                for Smart People
              </h1>
              <p className="font-roboto text-base font-normal">
                Much did had call new drew that kept. Limits expect wonder{" "}
                <br /> law she. Now has you views woman noisy match money rooms.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000000"
          fill-opacity="1"
          d="M0,320L1440,0L1440,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default HeroSlider;
