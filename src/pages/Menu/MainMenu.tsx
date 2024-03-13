import React, { useContext, useEffect, useMemo, useState } from "react";
import { data } from "./Foods";
import { SearchValueContext } from "../context/SearchValue";
type Food = {
  id: number;
  foodName: string;
  price: number;
  img: string;
  categoryName: string;
};
export const MainMenu = () => {
  const { searchValue, setSearchValue } = useContext(SearchValueContext);
  const [mainData, setMainData] = useState<Food[]>([]);
  const [domData, setDomData] = useState<Food[]>([]);

  useEffect(() => {
    setMainData(data);
    setDomData(data);
  }, []);
  const filteringBySearchValue = useMemo(async () => {
    setDomData(
      mainData.filter((el) => {
        return el.foodName.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  }, [searchValue]);
  return (
    <div className="flex flex-wrap gap-8 w-11/ min-h-screen justify-center items-center my-8">
      {domData?.map((el) => {
        return (
          <button
            // onClick={() => {
            //   // setFoodInfo(el);
            //   setIsFoodDetailVisible(true);
            // }}
            className="w-1/5 flex flex-col justify-center gap-2 text-black">
            <img
              className="w-[282px] h-[186px] rounded-lg shadow-2xl"
              src={`${el.img}`}
            />
            <p className="text-xl font-semibold">{el.foodName}</p>
            <p className="text-xl font-semibold text-green-500">
              {el.price.toLocaleString()}₮
            </p>
          </button>
        );
      })}
    </div>
  );
};
