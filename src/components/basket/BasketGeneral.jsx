import Header from "../Header";
import BasketCard from "./BasketCard";

import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../../redux/slices/cardSlice";

import { useState } from "react";

import { Link } from "react-router-dom";
import BasketEmpty from "./BasketEmpty";

export default function BasketGeneral() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.card.items);

  const [empty, setEmpty] = useState(true);

  const totalPrice = useSelector((state) => state.card.totalPrice);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClickClear = () => {
    if (confirm("Вы действительно хотите очистить корзину?")) {
      dispatch(clearItems());
      setEmpty(false);
    }
  };

  return (
    <>
      {empty || totalCount ? (
        <>
          <main className="bg-white w-[95%] mx-auto h-full mt-9 mb-9 shadow-xl rounded-xl pb-24">
            <Header totalPrice={totalPrice} />
            <section className="flex flex-col md:flex-row items-center justify-between mx-4 md:mx-[250px] mt-[40px] md:mt-[100px]">
              <nav className="flex items-center">
                <Link>
                  <img src="/public/assets/shopBasket.svg" alt="shopBasket" />
                </Link>
                <p className="font-bold text-[28px] md:text-[32px] leading-[38.98px] tracking-[1%] ml-2">
                  Корзина
                </p>
              </nav>
              <nav className="flex items-center">
                <Link>
                  <img src="/public/assets/clear.svg" alt="clear" />
                </Link>
                <p
                  onClick={onClickClear}
                  className="leading-[19.49px] text-gray-400 ml-1 cursor-pointer"
                >
                  Очистить корзину
                </p>
              </nav>
            </section>
            <section className="gap-3 mt-4">
              {items.map((obj) => (
                <BasketCard key={obj.id} {...obj} />
              ))}
            </section>
            <section className="flex flex-col md:flex-row items-center justify-between mx-4 md:mx-[250px] mt-[30px]">
              <nav>
                <p className="text-[20px] md:text-[22px] leading-[26.8px] tracking-[1%]">
                  Всего пицц:{" "}
                  <span className="font-bold">{totalCount} шт.</span>
                </p>
              </nav>
              <nav>
                <p className="text-[20px] md:text-[22px] leading-[26.8px] tracking-[1%]">
                  Сумма заказа:{" "}
                  <span className="font-bold text-orange-600">
                    {totalPrice} ₽
                  </span>
                </p>
              </nav>
            </section>
            <section className="flex flex-col md:flex-row items-center justify-between mx-4 md:mx-[250px] mt-[30px]">
              <nav>
                <Link to="/">
                  <button className="flex items-center py-3 px-4 border-2 border-gray-300 rounded-full text-gray-300">
                    <img
                      src="/public/assets/exit.svg"
                      alt="exit"
                      className="mr-1"
                    />
                    Вернуться назад
                  </button>
                </Link>
              </nav>
              <nav className="my-5">
                <button className="py-4 px-7 text-white font-bold leading-[19.49px] bg-orange-600 rounded-full">
                  Оплатить сейчас
                </button>
              </nav>
            </section>
          </main>
        </>
      ) : (
        <BasketEmpty />
      )}
    </>
  );
}
