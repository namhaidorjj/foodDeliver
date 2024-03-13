import Image from "next/image";
import { Inter } from "next/font/google";
import { Home } from "./Home";
import { data } from "./Menu/Foods";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  data.push({
    id: 5345345,
    foodName: "Namkhai's food",
    price: 3625,
    img: "./first.png",
    categoryName: "Temp Fencing, Decorative Fencing and Gates",
  });
  return (
    <>
      <Home />
    </>
  );
}
