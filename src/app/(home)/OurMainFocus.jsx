import { Roboto_Condensed } from "next/font/google";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import icon1 from "../../assest/icons/ourMainFoucs1.png";
import icon2 from "../../assest/icons/ourMainFoucs2.png";
import icon3 from "../../assest/icons/ourMainFoucs3.png";
import Image from "next/image";

const roboto_condensed = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});
const OurMainFocus = () => {
  return (
    <div className=" py-16">
      <div className="container mx-auto ">
        {/* Top Content start */}
        <div className="text-center pb-20">
          <h1
            className={`text-center text-6xl font-bold text-black ${roboto_condensed.variable}`}
          >
            Our Main Focus,Innovation Excellence
          </h1>
          <p className="font-roboto text-lg pt-5 font-normal text-gray-500">
            Innovation Excellence drives our real estate endeavors.We harness
            cutting-edge <br />
            technology and creative solutions to deliver exceptional results{" "}
            <br />
            and elevate your property investments.
          </p>
        </div>
        {/* Top Content end */}

        {/* Card Section start  */}
        <div className="py-6 flex flex-col xl:flex-row justify-center items-center gap-0 xl:gap-8">
          {/* Card 1 Start  */}
          <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20   hover:bg-[#9672FF] hover:text-white cursor-pointer hover:scale-110 transition-all delay-75 ">
            <div className="flex justify-center md:justify-end -mt-16">
              <Image
                className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                src={icon1}
              ></Image>
            </div>
            <div className="">
              <h2 className=" text-3xl font-semibold ">Buy a home</h2>
              <p className="mt-2 ">
                Unlock Your Dream: Buy a Home. Discover your perfect property
                with our expert guidance and turn your homeownership aspirations
                into reality.
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <BsFillArrowDownCircleFill className="mt-4  w-8 h-8 animate-bounce cursor-pointer"></BsFillArrowDownCircleFill>
            </div>
          </div>
          {/* Card 1 End  */}

          {/* Card 2 Start  */}
          <div className="card w-96 bg-base-100 shadow-xl  hover:bg-[#4DDFFD] hover:text-white cursor-pointer hover:scale-110 transition-all delay-75 ">
            <figure>
              <Image src={icon2}></Image>
            </figure>
            <div className="card-body text-center">
              <h2 className="text-3xl font-black ">Rent a home</h2>
              <p className="text-sm ">
                Explore Comfort: Rent a Home. Find your ideal rental property
                with ease, offering comfort and convenience to suit your
                lifestyle.
              </p>

              <BsFillArrowDownCircleFill className="mt-4 mx-auto w-8 h-8 animate-bounce cursor-pointer"></BsFillArrowDownCircleFill>
              <div></div>
            </div>
          </div>

          {/* Card 2 End  */}

          {/* Card 3 Start  */}
          <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20  hover:bg-[#F2B8EC] hover:text-white cursor-pointer hover:scale-110 transition-all delay-75 ">
            <div className="flex justify-center md:justify-end -mt-16">
              <Image
                className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                src={icon3}
              ></Image>
            </div>
            <div>
              <h2 className=" text-3xl font-semibold">Sell a home</h2>
              <p className="mt-2 ">
                Seamless Transactions: Sell a Home. Trust our expertise to
                navigate the selling process, ensuring a smooth and profitable
                transition .
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <BsFillArrowDownCircleFill className="mt-4  w-8 h-8 animate-bounce cursor-pointer"></BsFillArrowDownCircleFill>
            </div>
          </div>
          {/* Card 3 End  */}
        </div>
        {/* Card Section End  */}
      </div>
    </div>
  );
};

export default OurMainFocus;
