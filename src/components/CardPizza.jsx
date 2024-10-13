import { useSelector, useDispatch } from "react-redux";

import { useState } from "react";

import { Link } from "react-router-dom";

import { addItems } from "../redux/slices/cardSlice";

export default function Card({ id, imageUrl, title, types, sizes, price }) {
  const [activeType, setActiveType] = useState(0);
  const weight = ["тонкое", "традиционное"];
  const weight2 = ["тонкое"];

  const dispatch = useDispatch();

  const count = useSelector(
    (state) => state.card.items.find((obj) => obj.id === id)?.count || 0
  ); //поиск count и изменение числа добавленных товаров в button

  const onClickAdd = () => {
    const item = {
      id,
      title,
      imageUrl,
      sizes,
      weight2,
      price,
    };
    dispatch(addItems(item)); // получение данных из карточки(item), и через функцию additems срабатывает добавление
    // в корзину в Redux
  };

  return (
    <>
      <section className="w-full sm:w-[280px] h-auto mx-auto my-4">
        <nav className="flex flex-col items-center justify-center">
          <img src={imageUrl} alt="pizzaTest" className="w-full h-auto " />
          <span className="font-extrabold text-[16px] sm:text-[20px] text-center">
            {title}
          </span>
        </nav>
        <nav className="bg-gray-200 rounded-[10px] mt-2">
          <div>
            <ul className="flex flex-col sm:flex-row items-center justify-between text-center px-1 py-2 space-x-2">
              {weight.map((w) => (
                <li
                  key={w}
                  className="py-1 hover:bg-white rounded-md transition text-[14px] font-bold tracking-[1.5%] leading-[17.05px] flex-1 mx-1"
                >
                  <Link>{w}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-1">
            <ul className="flex flex-col sm:flex-row items-center justify-around text-center px-1 py-2 space-x-2">
              {sizes.map((size) => (
                <li
                  key={size}
                  className="py-1 hover:bg-white rounded-md transition text-[14px] font-bold tracking-[1.5%] leading-[17.05px] flex-1 mx-1"
                >
                  <Link>{size} см.</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <nav className="flex items-center justify-between mt-3">
          <div>
            <span className="text-[16px] sm:text-[18px] font-extrabold leading-[26.8px] tracking-[1.5%]">
              от {price} ₽
            </span>
          </div>
          <div>
            <button
              onClick={onClickAdd}
              className="border-2 border-orange-600 px-3 sm:px-5 py-1 rounded-[30px] flex items-center justify-between"
            >
              <a href="#">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="#EB5A1E"
                  />
                </svg>
              </a>
              <span className="mx-2">Добавить</span>
              <span className="bg-orange-600 rounded-[50px] py-1 px-3 text-white font-bold">
                {count}
              </span>
            </button>
          </div>
        </nav>
      </section>
    </>
  );
}
