import { Roboto_Condensed } from "next/font/google";
import city1 from "../../assest/image/property-by-city/city1.jpg";
import city2 from "../../assest/image/property-by-city/city2.jpg";
import city3 from "../../assest/image/property-by-city/city3.jpg";
import city4 from "../../assest/image/property-by-city/city4.jpg";
import city5 from "../../assest/image/property-by-city/city5.jpg";
import city6 from "../../assest/image/property-by-city/city6.jpg";
import city7 from "../../assest/image/property-by-city/city7.jpg";
import city8 from "../../assest/image/property-by-city/city8.jpg";
import city9 from "../../assest/image/property-by-city/city9.jpg";
import Image from "next/image";

const roboto_condensed = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});

const PropertiesByCities = () => {
  return (
    <>
      <div className="container mx-auto py-32">
        {/* Top Content start */}
        <div className="text-center pb-20">
          <h1
            className={`text-center text-6xl font-bold text-black ${roboto_condensed.variable}`}
          >
            City Property Insights Guide
          </h1>
          <p className="font-roboto text-lg pt-5 font-normal text-gray-500">
            Explore our comprehensive guide, &apos; City Property Insights
            Guide,&apos; to uncover valuable <br />
            information about real estate properties in various cities. Discover
            key details,
            <br />
            trends, and tips to make informed decisions in your property
            ventures.
          </p>
        </div>
        {/* Top Content end */}

        {/* Image Section Start */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
          {/* left side Section start  */}
          <div>
            {/* City Image 1 Start */}
            <div className="relative hover:scale-125 transition-all delay-75 duration-100 cursor-pointer">
              <Image src={city1} className="rounded-xl "></Image>
              <div className="absolute top-4 left-3 text-white">
                <p className="text-xl font-black">15 Propertis</p>
                <h1>Hoboken, New Jersey</h1>
              </div>
              <div className="absolute w-[575px] inset-0 bg-gradient-to-t from-[#27005D] to-transparent rounded-xl"></div>
            </div>
            {/* City Image 1 End */}
            <div className="flex py-3 gap-2">
              {/* City Image 2 Start */}
              <div className="relative hover:scale-125 transition-all delay-75 duration-100 cursor-pointer">
                <Image src={city4} className="rounded-xl "></Image>
                <div className="absolute top-4 left-3 text-white">
                  <p className="text-xl font-black">5 Propertis</p>
                  <h1>Sausalito, California</h1>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#EADBC8] to-transparent rounded-xl"></div>
              </div>
              {/* City Image 2 End */}

              {/* City Image 3 Start */}
              <div className="relative hover:scale-125 transition-all delay-75 duration-100 cursor-pointer">
                <Image src={city5} className="rounded-xl "></Image>
                <div className="absolute top-4 left-3 text-white">
                  <p className="text-xl font-black">17 Propertis</p>
                  <h1>Oxford, Mississippi</h1>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#AED2FF] to-transparent rounded-xl"></div>
              </div>
              {/* City Image 3 End */}
            </div>
            {/* City Image 4 Start */}
            <div className="relative  hover:scale-125 transition-all delay-75 duration-100 cursor-pointer">
                <Image src={city7} className="rounded-xl "></Image>
                <div className="absolute top-4 left-3 text-white">
                  <p className="text-xl font-black">17 Propertis</p>
                  <h1>Rome, Georgia</h1>
                </div>
                <div className="w-[575px] absolute inset-0 bg-gradient-to-t from-[#85E6C5] to-transparent rounded-xl"></div>
              </div>
            {/* City Image 4 End */}
          </div>
          {/* left side Section end  */}

          {/* Right side Section start  */}
          <div>
            <div className="flex gap-2">
              {/* City Image 5 Start */}
              <div className="relative hover:scale-125 transition-all delay-75 duration-100 cursor-pointer">
                <Image src={city2} className="rounded-xl "></Image>
                <div className="absolute top-4 left-3 text-white">
                  <p className="text-xl font-black">5 Propertis</p>
                  <h1>Ketchikan, Alaska</h1>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#EBE76C] to-transparent rounded-xl"></div>
              </div>
              {/* City Image 5 End */}
              
              {/* City Image 6 Start */}
              <div className="relative hover:scale-125 transition-all delay-75 duration-100 cursor-pointer">
                <Image src={city3} className="rounded-xl "></Image>
                <div className="absolute top-4 left-3 text-white">
                  <p className="text-xl font-black">26 Propertis</p>
                  <h1>Prescott, Arizona</h1>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#313866] to-transparent rounded-xl"></div>
              </div>
              {/* City Image 6 End */}
                
            </div>

              {/* City Image 7 Start */}
              <div className="py-3  relative  hover:scale-125 transition-all delay-75 duration-100 cursor-pointer">
              <Image src={city6} className="rounded-xl "></Image>
              <div className="absolute top-4 left-3 text-white">
                <p className="text-xl font-black">11 Propertis</p>
                <h1>Grants Pass, Oregon</h1>
              </div>
              <div className="absolute w-[575px] inset-0 bg-gradient-to-t from-[#27005D] to-transparent rounded-xl"></div>
            </div>
            {/* City Image 7 End */}

            <div className="flex gap-2 pt-3">
              {/* City Image 8 Start */}
              <div className="relative hover:scale-125 transition-all delay-75 duration-100 cursor-pointer">
                <Image src={city8} className="rounded-xl "></Image>
                <div className="absolute top-4 left-3 text-white">
                  <p className="text-xl font-black">6 Propertis</p>
                  <h1>Ithaca, New York</h1>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#F0B86E] to-transparent rounded-xl"></div>
              </div>
              {/* City Image 8 End */}

               {/* City Image 9 Start */}
              <div className="relative hover:scale-125 transition-all delay-75 duration-100 cursor-pointer">
                <Image src={city9} className="rounded-xl "></Image>
                <div className="absolute top-4 left-3 text-white">
                  <p className="text-xl font-black">13 Propertis</p>
                  <h1>Lawrence, Kansas</h1>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#313866] to-transparent rounded-xl"></div>
              </div>
              {/* City Image 9 End */}
            </div>
          </div>

          {/* Right side Section end  */}
        </div>
        {/* Image Section End */}
      </div>
    </>
  );
};

export default PropertiesByCities;
