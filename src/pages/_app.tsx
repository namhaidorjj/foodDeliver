import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SearchValue } from "./context/SearchValue";
import { BasketBarVisiblity } from "./context/BasketContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SearchValue>
      <BasketBarVisiblity>
        <Component {...pageProps} />
      </BasketBarVisiblity>
    </SearchValue>
  );
}
