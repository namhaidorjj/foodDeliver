import React from "react";
import { AnchorSVG } from "../SVGs/AnchorSVG";

export const HomeController = () => {
  return (
    <div className="flex gap-[47px] justify-between p-[120px]">
      <div className="border w-[265px] h-[155px] rounded-xl shadow-2xl pl-[30px] pt-[30px] gap-[30px]">
        <div className="w-[30px] h-[30px] ">
          <AnchorSVG />
        </div>
        <div>
          <p>Хүргэлтийн төлөв хянах</p>
          <p>One-Pieace Food delivery</p>
        </div>
      </div>
    </div>
  );
};
