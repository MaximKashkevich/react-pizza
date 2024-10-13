import { useState, useRef, useEffect } from "react";

export default function Sort({ sortType, sortIndexClick, sortValues }) {
  const [open, setOpen] = useState(false);
  const sortRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (open && !event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, [open]);

  return (
    <div ref={sortRef} className="flex justify-between items-center relative">
      <section className="flex items-center">
        <a href="#" className="block">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
        </a>
        <p className="ml-[2px] font-bold">Cортировка по:</p>
      </section>
      <section className="flex items-center flex-col relative">
        <nav>
          <b
            onClick={() => setOpen(!open)}
            className="border-b border-dashed border-orange-600 text-orange-600 cursor-pointer"
          >
            {sortType.name}
          </b>
        </nav>
        <nav className="absolute top-full right-0 z-10">
          {" "}
          {/* Add absolute positioning */}
          {open && (
            <ul className="border bg-white rounded-[10px] shadow-xl p-3 mt-2">
              {sortValues.map((obj) => (
                <li
                  onClick={() => sortIndexClick(obj)}
                  className={`${
                    sortType.name === obj.name ? "selected" : ""
                  } mt-2 w-full py-2 leading-[17.05px] tracking-[1.5%] cursor-pointer`}
                  key={obj.sortProperty}
                >
                  {obj.name}
                </li>
              ))}
            </ul>
          )}
        </nav>
      </section>
    </div>
  );
}
/*
 <section className="flex items-center justify-between p-10">
      <div className="flex items-center">
        <span className="font-bold text-black mx-1">Сортировка по:</span>
        <span
          onClick={() => setOpen(!open)} // Переключаем открытость списка сортировки при клике
          className="cursor-pointer text-blue-600 hover:underline"
        >
          популярности{" "}
          {/* По умолчанию отображаем сортировку по популярности */
//     </span>
//     {/* Список сортировки, появляется при открытии */}
//     <ul
//       className={`absolute bg-white shadow-lg rounded-lg mt-2 ${
//         open ? "block" : "hidden" // Условное отображение списка
//       }`}
//     >
//       {list.map((obj) => {
//         return (
//           <li
//             onClick={() => setSortId(obj.sortProperty)} // Обновляем сортировку при выборе элемента
//             key={obj.sortProperty} // Используем свойство как ключ
//             className="flex items-center p-2 hover:bg-gray-100 w-full text-left text-gray-800"
//           >
//             {obj.name} {/* Отображаем название правила сортировки */}
//           </li>
//         );
//       })}
//     </ul>
//   </div>
// </section>
// */
