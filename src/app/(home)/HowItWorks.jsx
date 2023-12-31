import { Roboto_Condensed } from "next/font/google";
import { BsSearch } from "react-icons/bs";
import { BsFillBuildingFill } from "react-icons/bs";
import { FaHandHoldingDollar } from "react-icons/fa6";

const roboto_condensed = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});

const HowItWorks = () => {
  return (
    <>
      <div className="container mx-auto xl:py-32">
        {/* Works Title  */}
        <h1
          className={`text-center text-6xl font-bold text-black ${roboto_condensed.variable}`}
        >
          How it works?
        </h1>

        <div className="relative">
          {/*All Card */}
          <div className="grid grid-cols-1 gap-5  lg:gap-0 md:grid-cols-3 lg:grid-cols-3 pt-16 ">
            {/* card 1 */}
            <div className="text-center">
              <BsSearch className="mx-auto bg-[#9672FF] text-white rounded-3xl w-28 h-24 p-9 shadow-[4px_88px_148px_0px_#9672FF]"></BsSearch>
              <h1
                className={`${roboto_condensed.variable} font-semibold text-black text-xl pt-6 pb-4`}
              >
                Research Suburbs
              </h1>
              <p className="font-roboto text-sm text-black ">
                Wonder twenty hunted and put <br />
                income set desire expect. Am <br />
                cottage calling.
              </p>
            </div>

            {/* card 2 */}
            <div className="text-center">
              <FaHandHoldingDollar className="mx-auto bg-[#4DDFFD] text-white rounded-3xl w-28 h-24 p-9 shadow-[4px_88px_148px_0px_#4DDFFD]"></FaHandHoldingDollar>
              <h1
                className={`${roboto_condensed.variable} font-semibold text-black text-xl pt-6 pb-4`}
              >
                Instant Valuation
              </h1>
              <p className="font-roboto text-sm text-black ">
                Conveying or northward offending <br />
                admitting perfectly my. Colonel <br />
                gravit and moonlight.
              </p>
            </div>

            {/* card 3 */}
            <div className="text-center">
              <BsFillBuildingFill className="mx-auto bg-[#F2B8EC] text-white rounded-3xl w-28 h-24 p-9 shadow-[4px_88px_148px_0px_#F2B8EC]"></BsFillBuildingFill>
              <h1
                className={`${roboto_condensed.variable} font-semibold text-black text-xl pt-6 pb-4`}
              >
                Track Property
              </h1>
              <p className="font-roboto text-sm text-black ">
                Moderate children at of outweigh it. <br />
                Unsatiable it considered invitation <br />
                he travelling insensible.
              </p>
            </div>
          </div>
          {/* Dashed one  */}
          <div className="absolute  xl:top-[6.25rem] xl:left-[20rem] 2xl:top-[6.25rem]  2xl:left-96 hidden xl:flex  items-center">
            <div className="w-5 h-5 bg-[#9672FF] rounded-full"></div>
            <div className="border-2 border-[#9672FF] border-dashed inline w-48 h-1"></div>
            <div className="w-5 h-5 bg-[#4DDFFD] rounded-full"></div>
          </div>

          {/* Dashed Tow  */}
          <div className="absolute top-[6.25rem] left-[59%] hidden xl:flex  items-center  ">
            <div className="w-5 h-5 bg-[#4DDFFD] rounded-full"></div>
            <div className="border-2 border-[#4DDFFD] border-dashed inline w-48 h-1"></div>
            <div className="w-5 h-5 bg-[#F2B8EC] rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
