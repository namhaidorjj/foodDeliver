import React from "react";
import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
import { HomeController } from "./HomeController";

export const HomeHeader = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="bg-[#18BA51] bg-[url('/BgPhoto.png')] w-[full] h-[788px]  flex gap-[228px] center-center">
          <div className="text-white w-1/2 flex flex-col pl-[120px] pt-[276.65px] gap-[13px] h-[224.7px]">
            <p className="text-[55px]  w-[384px] leading-[49.5px] ">
              One-Pieace Food delivery
            </p>
            <div className="border-b w-[383px]"></div>
            <p className="w-[384px] flex items-center justify-center">
              Browse the menus of East Blue’s best restaurants, foods and select
              your favourites dishes
            </p>
          </div>
          <div className="w-1/2">
            <div className="pt-[170px]">
              <img
                src="./food-1.png"
                alt=""
                className="w-[443px] h-[438px] absolute"
              />
              <div className="">
                <img
                  src="./food-2.png"
                  alt=""
                  className="w-[313px] h-[313px] relative left-60 top-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeController />
      <Footer />
    </div>
  );
};
