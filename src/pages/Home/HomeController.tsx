import React from "react";
import { BookSVG } from "../SVGs/BookSVG";

export const HomeController = () => {
  return (
    <div className="flex gap-[47px] justify-between p-[120px]">
      <div className="border w-[265px] h-[155px] rounded-xl shadow-2xl pl-[16px] pt-[30px] flex flex-col gap-[30px]">
        <div className="w-[30px] h-[30px] ">
          <BookSVG />
        </div>
        <div>
          <p className="font-bold">Хүргэлтийн төлөв хянах</p>
          <p className="font-normal text-sm">One-Piece Food delivery</p>
        </div>
      </div>
      <div className="border w-[265px] h-[155px] rounded-xl shadow-2xl pl-[16px] pt-[30px] flex flex-col gap-[30px]">
        <div className="w-[30px] h-[30px] ">
          <BookSVG />
        </div>
        <div>
          <p className="font-bold">Шуурхай хүргэлт</p>
          <p className="font-normal text-sm">One-Pieace Food delivery</p>
        </div>
      </div>
      <div className="border w-[265px] h-[155px] rounded-xl shadow-2xl pl-[16px] pt-[30px] flex flex-col gap-[30px]">
        <div className="w-[30px] h-[30px] ">
          <BookSVG />
        </div>
        <div>
          <p className="font-bold">Эрүүл, баталгаат орц</p>
          <p className="font-normal text-sm">One-Pieace Food delivery</p>
        </div>
      </div>
      <div className="border w-[265px] h-[155px] rounded-xl shadow-2xl pl-[16px] pt-[30px] flex flex-col gap-[30px]">
        <div className="w-[30px] h-[30px] ">
          <BookSVG />
        </div>
        <div>
          <p className="font-bold">Хоолны өргөн сонголт</p>
          <p className="font-normal text-sm">One-Pieace Food delivery</p>
        </div>
      </div>
    </div>
  );
};
