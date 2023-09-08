import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "@egjs/flicking/dist/flicking-inline.css";

import { Roboto_Condensed } from "next/font/google";
import React from "react";

const roboto_condensed = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});

const PropertiesByCities = () => {
  return (
    <>
      <div className="container mx-auto">
        {/* Top Content  */}
        <div className="text-center pb-20">
          <h1
            className={`text-center text-6xl font-bold text-black ${roboto_condensed.variable}`}
          >
            City Property Insights Guide
          </h1>
          <p className="font-roboto text-lg pt-5 font-normal text-gray-500">
            Explore our comprehensive guide, &apos; City Property Insights Guide,&apos; to
            uncover valuable <br />
            information about real estate properties in various cities. Discover
            key details,
            <br />
            trends, and tips to make informed decisions in your property
            ventures.
          </p>
        </div>
      </div>

      {/* City slider  */}
      <Flicking
        align="prev"
        circular={true}
        onMoveEnd={(e) => {
          console.log(e);
        }}
      >
        <div className="panel">1</div>
        <div className="panel">2</div>
        <div className="panel">3</div>
      </Flicking>
    </>
  );
};

export default PropertiesByCities;
