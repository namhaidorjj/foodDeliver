import React from "react";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { BreakfastMenu } from "./login/BreakfastMenu";
import { SoupMenu } from "./Menu/SoupMenu";
import { DesertMenu } from "./Menu/DesertMenu";
import { MainCourse } from "./Menu/MainCourse";

export default function Menu() {
  return (
    <div className="">
      <Header />
      <div className="flex pl-[120px] pr-[120px] justify-between pb-[32px] pt-[32px]">
        <BreakfastMenu />
        <SoupMenu />
        <MainCourse />
        <DesertMenu />
      </div>
      <Footer />
    </div>
  );
}
