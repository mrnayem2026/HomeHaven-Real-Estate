import image1 from "../../assest/image/apartment-type/studio.png";
import image2 from "../../assest/image/apartment-type/apartment.png";
import image3 from "../../assest/image/apartment-type/singelHome.png";
import image4 from "../../assest/image/apartment-type/shop.png";
import image5 from "../../assest/image/apartment-type/office.png";
import image6 from "../../assest/image/apartment-type/villa.png";
import { GrPlay } from "react-icons/gr";
import Image from "next/image";

const ExploreApartmentTypes = () => {
  return (
    <div className="container mx-auto py-32">
        {/* grid grid-cols-1  lg:grid-cols-2  xl:grid-cols-3  */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        {/* left grid  */}
        <div>
          <div className="w-72">
          <h1 className="font-roboto text-3xl font-bold">
            Exploring a Variety  of Apartment Types 
           
          </h1>

          <p className="py-3 text-sm">
            Explore diverse apartment types and find  <br /> your ideal home
            with our comprehensive guide.
          </p>
          </div>

          <div className="relative w-[276px] ">
            <Image src={image1} className="rounded-xl  "></Image>
            <div className="absolute top-4 left-3 text-white">
                <p className="text-xl font-black">7 Propertis</p>
                <h1>Studio</h1>
            </div>
            <div className="absolute top-[512px] flex items-center gap-20 left-3 text-black z-10">
                <button className="uppercase text-lg font-black">MORE Details</button>
                <GrPlay className="cursor-pointer"></GrPlay>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-red-200 to-transparent rounded-xl"></div>
          </div>        
        </div>

        {/* center gird  */}
        <div>
            {/* Card 1 */}
          <div className="relative w-[276px] ">
            <Image src={image2} className="rounded-xl"></Image>
            <div className="absolute top-4 left-3 z-10 text-white">
                <p className="text-xl font-black">10 Propertis</p>
                <h1>Apartment</h1>
            </div>
            <div className="absolute top-56 flex items-center gap-20 left-3 text-black z-10">
                <button className="uppercase text-lg font-black">MORE Details</button>
                <GrPlay className="cursor-pointer"></GrPlay>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#9672FF] to-transparent rounded-xl"></div>
          </div>

           {/* Card 2 */}
          <div className="my-3 relative w-[276px] ">

            <Image src={image3} className="rounded-xl"></Image>
            <div className="absolute top-4 left-3 z-10 text-white">
                <p className="text-xl font-black">15 Propertis</p>
                <h1>Singel Familly Home</h1>
            </div>
            <div className="absolute top-44 flex items-center gap-20 left-3 text-black z-10">
                <button className="uppercase text-lg font-black">MORE Details</button>
                <GrPlay className="cursor-pointer"></GrPlay>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#4DDFFD] to-transparent rounded-xl"></div>
          </div>

           {/* Card 3 */}
          <div className="my-3 relative w-[276px] ">
            <Image src={image4} className="rounded-xl"></Image>
            <div className="absolute top-4 left-3 z-10 text-white">
                <p className="text-xl font-black">3 Propertis</p>
                <h1>Shop</h1>
            </div>
            <div className="absolute top-56 flex items-center gap-20 left-3 text-black z-10">
                <button className="uppercase text-lg font-black">MORE Details</button>
                <GrPlay className="cursor-pointer"></GrPlay>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#F2B8EC] to-transparent rounded-xl"></div>
          </div>
        </div>

        {/* right grid  */}
        <div>
          <div className="relative w-[276px]">
            <Image src={image5} className="rounded-xl"></Image>
            <div className="absolute top-4 left-3 text-white">
                <p className="text-xl font-black">20 Propertis</p>
                <h1>office</h1>
            </div>
            <div className="absolute top-[512px] flex items-center gap-20 left-3 text-black z-10">
                <button className="uppercase text-lg font-black">MORE Details</button>
                <GrPlay className="cursor-pointer"></GrPlay>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#B9B4C7] to-transparent rounded-xl"></div>
          </div>

          <div  className="my-3 relative w-[276px] ">
            <Image src={image6} className="rounded-xl"></Image>
            <div className="absolute top-4 left-3 z-10 text-white">
                <p className="text-xl font-black">3 Propertis</p>
                <h1>Villa</h1>
            </div>
            <div className="absolute top-40 flex items-center gap-20 left-3 text-black z-10">
                <button className="uppercase text-lg font-black">MORE Details</button>
                <GrPlay className="cursor-pointer"></GrPlay>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFBB5C] to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreApartmentTypes;
