import React from "react";
import { Header } from "../component/Header";
import { Footer } from "../component/Footer";

export const LoginMain = () => {
  return (
    <div>
      <Header />
      <div className="w-full h-full pt-[111px] flex justify-center">
        <div className="w-[448px] h-[549px] p-[32px] flex flex-col gap-[48px]">
          <div className="w-[348px] flex justify-center">
            <p className="text-[#0D1118] font-bold">Нэвтрэх</p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <label className="font-normal text-sm">Имэйл</label>
              <input
                className="w-[348px] h-[48px] pl-4 rounded-sm bg-[#F7F7F8]"
                type="text"
                placeholder="Имэйл хаягаа оруулна уу"
              />
            </div>
            <div>
              <label className="font-normal text-sm">Нууц үг</label>
              <input
                className="w-[348px] h-[48px] pl-4 rounded-sm bg-[#F7F7F8]"
                type="password"
                placeholder="Нууц үг"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[32px]">
            <button className="w-[348px] hover:bg-[#18BA51] hover:text-black h-[48px] bg-[#EEEFF2] text-[#1C20243D] rounded-sm">
              Нэвтрэх
            </button>
            <div className="w-[348px] text-[#3F4145]  flex justify-center">
              Эсвэл
            </div>
            <button className="w-[348px] h-[48px] rounded-sm border-emerald-500 border">
              Бүртгүүлэх
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
