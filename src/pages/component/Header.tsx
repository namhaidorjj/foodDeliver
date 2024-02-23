import React from "react";
import { SearchSVG } from "../SVGs/SearchSVG";
import { LoginSVG } from "../SVGs/LoginSVG";
import { SagsSVG } from "../SVGs/SagsSVG";

export const Header = () => {
  return (
    <div className="flex items-center justify-between pl-[115px] pr-[115px]">
      <div className="flex items-center">
        <img
          src="./favicon.png"
          alt=""
          className="w-[57px] h-[57px] rounded-2xl"
        />
        <div className="flex h-[41px] items-center w-[388px] justify-between pl-[24px]">
          <button className="hover:text-[#18BA51] ">НҮҮР</button>
          <button className="hover:text-[#18BA51] ">ХООЛНЫ ЦЭС</button>
          <button className="hover:text-[#18BA51] ">ХҮРГЭЛТИЙН БҮС</button>
        </div>
      </div>
      <div className="flex items-center gap-[24px]">
        <div className="flex w-[260px] h-[40px] items-center gap-2 border-black border rounded-lg pl-4">
          <SearchSVG />
          <input type="text" placeholder="Хайх" />
        </div>
        <button className="flex gap-2">
          <SagsSVG />
          <p className="hover:text-[#18BA51] ">Сагс</p>
        </button>
        <button className="flex gap-2">
          <LoginSVG />
          <p className="hover:text-[#18BA51] ">Нэвтрэх</p>
        </button>
      </div>
    </div>
  );
};
