import React from "react";
import { Header } from "../component/Header";
import { Footer } from "../component/Footer";

export const SigninMain = () => {
  return (
    <div>
      <Header />
      <div className="w-full h-full pt-[10px] flex justify-center">
        <div className="w-[448px] h-[744px] p-[32px] flex flex-col gap-[48px]">
          <div className="w-[348px] flex justify-center">
            <p className="text-[#0D1118] font-bold text-[28px]">Бүртгүүлэх</p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <label className="font-normal text-sm">Нэрээ</label>
              <input
                className="w-[348px] h-[48px] pl-4 rounded-sm bg-[#F7F7F8]"
                type="text"
                placeholder="Нэрээ оруулна уу"
              />
            </div>
            <div>
              <label className="font-normal text-sm">И-мэйл</label>
              <input
                className="w-[348px] h-[48px] pl-4 rounded-sm bg-[#F7F7F8]"
                type="text"
                placeholder="И-мэйл хаягаа оруулна уу"
              />
            </div>
            <div>
              <label className="font-normal text-sm">Хаягаа</label>
              <input
                className="w-[348px] h-[48px] pl-4 rounded-sm bg-[#F7F7F8]"
                type="text"
                placeholder="Та хаягаа оруулна уу"
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
            <div>
              <label className="font-normal text-sm">Нууц үг давтах</label>
              <input
                className="w-[348px] h-[48px] pl-4 rounded-sm bg-[#F7F7F8]"
                type="password"
                placeholder="Нууц үгээ оруулна уу"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex">
              <input type="checkbox" name="horns" />
              <label className="text-[#161616] text-[14px] pl-[11px]">
                Үйлчилгээний нөхцөо зөвшөөрөх
              </label>
            </div>
            <div>
              <button className="w-[348px] h-[48px] rounded-sm bg-[#EEEFF2]  border">
                <p className="text-sm text-[#8B8E95]"> Бүртгүүлэх</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
