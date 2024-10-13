import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import Search from "./Search";
import BasketEmpty from "./basket/BasketEmpty";

export default function Header() {
  const { items, totalPrice } = useSelector((state) => state.card);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <>
      <header className="flex flex-col md:flex-row items-center justify-between mx-4 md:mx-12 pt-4 md:pt-6">
        <section className="flex items-center mb-4">
          <Link to="/">
            <img
              src="/public/assets/HeaderLogo.png"
              alt="HeaderLogo"
              className="h-10"
            />
          </Link>
          <nav className="ml-3">
            <h1 className="tracking-[1%] text-2xl font-extrabold leading-7">
              REACT PIZZA
            </h1>
            <p className="text-gray-600 leading-5">
              самая вкусная пицца во вселенной
            </p>
          </nav>
        </section>
        <section className="w-full md:w-auto mb-4 md:mb-0">
          <Search />
        </section>
        <section>
          {totalCount ? (
            <Link to="/Basket">
              <button className="w-full h-[50px] rounded-[30px] bg-orange-600 flex items-center justify-between px-6 md:w-auto">
                <span className="text-white font-bold">{totalPrice} ₽</span>
                <div className="border-l mx-4 border-gray-400 h-[25px]"></div>
                <a href="#" className="flex items-center">
                  <img src="/public/assets/shop.svg" alt="shop" />
                  <span className="ml-1 text-white font-bold">
                    {totalCount}
                  </span>
                </a>
              </button>
            </Link>
          ) : (
            <Link to="/BasketEmpty">
              <button className="w-full h-[50px] rounded-[30px] bg-orange-600 flex items-center justify-between px-6 md:w-auto">
                <span className="text-white font-bold">{totalPrice} ₽</span>
                <div className="border-l mx-4 border-gray-400 h-[25px]"></div>
                <a href="#" className="flex items-center">
                  <img src="/public/assets/shop.svg" alt="shop" />
                  <span className="ml-1 text-white font-bold">
                    {totalCount}
                  </span>
                </a>
              </button>
            </Link>
          )}
        </section>
      </header>
    </>
  );
}
