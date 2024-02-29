import React from "react";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { StarSVG } from "./SVGs/StarSVG";

export default function Radius() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <div>
          <img
            src="./map.png"
            alt=""
            className="pt-[60px] pl-[120px] rounded-xl pr-[120px] pb-10 h-[616px]"
          />
        </div>
        <div className="flex pl-[120px] font-[22px]">
          <StarSVG />
          <p className="font-bold">Хүргэлтийн бүс дэх хаягууд</p>
        </div>
        <div className="pl-[120px] flex gap-[24px] pb-[45px] pt-[40px]">
          <div className="w-[588px] h-[388px] border  rounded-xl shadow-2xl">
            <div className="w-[540px] h-[56px] ml-[24px] pt-4 border-b border-[#18BA51]">
              <p className="font-bold text-[20px] ">А бүс</p>
            </div>
            <div className="ml-[24px] flex  gap-4 pt-4">
              <div className="flex flex-col gap-4 pt-4 w-1/2">
                <p className="font-light text-4">Нархан хотхон</p>
                <p className="font-light text-4">26-р байр</p>
                <p className="font-light text-4">26-р байр</p>
                <p className="font-light text-4">26-р байр</p>
                <p className="font-light text-4">Хоймор хотхон </p>
                <p className="font-light text-4">26-р байр</p>
                <p className="font-light text-4">26-р байр</p>
              </div>
              <div className="flex flex-col gap-4 pt-4">
                <p className="font-light text-4">Нархан хотхон</p>
                <p className="font-light text-4">26-р байр</p>
                <p className="font-light text-4">26-р байр</p>
                <p className="font-light text-4">26-р байр</p>
                <p className="font-light text-4">Хоймор хотхон </p>
                <p className="font-light text-4">26-р байр</p>
                <p className="font-light text-4">26-р байр</p>
              </div>
            </div>
          </div>
          <div className="w-[588px] h-[388px] border  rounded-xl shadow-2xl ">
            <div className="w-[540px] h-[56px] ml-[24px] pt-4 border-b border-[#18BA51]">
              <p className="font-bold text-[20px] ">Б бүс</p>
            </div>
            <div className="ml-[24px] flex  gap-4 pt-4">
              <div className="flex flex-col gap-4 pt-4 w-1/2">
                <p className="font-light text-4">Нархан хотхон</p>
                <p className="font-light text-4">26-р байр</p>
                <p className="font-light text-4">26-р байр</p>
                <p className="font-light text-4">26-р байр</p>
                <p className="font-light text-4">Хоймор хотхон </p>
                <p className="font-light text-4">26-р байр</p>
                <p className="font-light text-4">26-р байр</p>
              </div>
              <div className="flex flex-col gap-4 pt-4">
                <p className="font-light text-4">Нархан хотхон</p>
                <p className="font-light text-4">26-р байр</p>
                <p className="font-light text-4">26-р байр</p>
                <p className="font-light text-4">26-р байр</p>
                <p className="font-light text-4">Хоймор хотхон </p>
                <p className="font-light text-4">26-р байр</p>
                <p className="font-light text-4">26-р байр</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
