import Image from "next/image";
import bg from "../../assest/image/whoWeAreBg.jpg";
import about1 from "../../assest/image/about-1.jpg"
import about2 from "../../assest/image/about-2.jpg"

const WhoWeAre = () => {
  return (
    <>
      <div className="relative">
        {/* Imaga and svg start  */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,256L1440,0L1440,0L0,0Z"
          ></path>
        </svg>
        <Image src={bg} className="absolute top-0 z-[-10]"></Image>
        {/* Imaga and svg End  */}

        {/* Content Start  */}
        <div className= "flex gap-52 text-white container mx-auto">
          {/* left side  */}
          <div>
                <div className="relative">
                    <Image src={about1} className="rounded-2xl"></Image>
                    <Image src={about2} className="absolute top-[-110px] left-96 rounded-2xl"></Image>
                    <div className="absolute top-36 left-[600px] w-3 h-64 bg-[#9672FF]"></div>
                </div>
          </div>

          {/* right side  */}
          <div>
           <h1 className="text-lg font-semibold">WHO WE ARE</h1>
           <p className="text-6xl font-black py-3"> Unveiling the Essence of <br />
            WHO WE ARE in Real Estate</p>
           <p>
           Delve into the core of our real estate enterprise, revealing our ethos, <br />
            culture, and commitment to excellence in every transaction.
           </p>
          </div>
        </div>
        {/* Content End  */}
      </div>
    </>
  );
};

export default WhoWeAre;
