import { useState, useContext, useRef, useCallback } from "react";
import debounce from "lodash.debounce";
import { SearchContext } from "../App";
export default function Search() {
  // Извлекаем значения поиска и функцию обновления из контекста
  const { searchValue, setSearchValue } = useContext(SearchContext);

  // Создаем локальное состояние для значения инпута
  const [value, setValue] = useState(""); // Состояние для отслеживания текущего значения инпута

  // Ссылка на элемент input для управления фокусом
  const inputRef = useRef(null);

  // Функция для очистки значения поиска и значения инпута
  const onClickClear = () => {
    setSearchValue(""); // Сбрасываем значение поиска в контексте
    setValue(""); // Сбрасываем значение в локальном состоянии
    if (inputRef.current) {
      // Проверяем, доступен ли input
      inputRef.current.focus(); // Устанавливаем фокус на input
    }
  };

  // Дебаунс для обновления значения поиска
  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str); // Обновляем значение поиска в контексте с задержкой
    }, 300), // Задержка 300 миллисекунд
    [] // Пустой массив зависимостей, функция создается только один раз
  );

  // Обработчик изменения значения в инпуте
  const onChangeInput = (event) => {
    const newValue = event.target.value; // Получаем новое значение из input
    setValue(newValue); // Обновляем локальное состояние с новым значением
    updateSearchValue(newValue); // Вызываем дебаунс для обновления значения поиска
  };

  return (
    <>
      <div className="relative">
        <svg
          width="22px"
          height="22px"
          className="opacity-50 absolute left-3 top-3"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Interface / Search_Magnifying_Glass">
            <path
              id="Vector"
              d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
        <input
          value={value}
          ref={inputRef}
          onChange={onChangeInput}
          className="input py-3 px-10 text-left border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          type="text"
          placeholder="Поиск…"
        />
        {value && (
          <svg
            className="absolute right-3 top-3 opacity-50 cursor-pointer"
            onClick={onClickClear}
            width="24px"
            height="24px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#000000"
              d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
            />
          </svg>
        )}
      </div>
    </>
  );
}
