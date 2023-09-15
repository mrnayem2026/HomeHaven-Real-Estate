"use client";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";

import company1 from "../../assest/image/trusted-company/company1.png";
import company2 from "../../assest/image/trusted-company/company2.png";
import company3 from "../../assest/image/trusted-company/company3.png";
import company4 from "../../assest/image/trusted-company/company4.png";
import company5 from "../../assest/image/trusted-company/company5.png";
import company6 from "../../assest/image/trusted-company/company6.png";
import company7 from "../../assest/image/trusted-company/company7.png";
import Image from "next/image";

const TrustedByCompany = () => {
  const plugins = [
    new AutoPlay({
      duration: 2000,
      direction: "NEXT",
      stopOnHover: true,
      animationDuration: 1000,
    }),
  ];
  return (
    <div className="py-20">
      <Flicking moveType="freeScroll"  circular={true}  plugins={plugins}>
        <Image src={company1}></Image>
        <Image src={company2} className="mx-36"></Image>
        <Image src={company3} className="mx-36"></Image>
        <Image src={company4} className="mx-36"></Image>
        <Image src={company5} className="mx-36"></Image>
        <Image src={company6} className="mx-36"></Image>
        <Image src={company7} className="mx-36"></Image>
      </Flicking>
    </div>
  );
};

export default TrustedByCompany;
