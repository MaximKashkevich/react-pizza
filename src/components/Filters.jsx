import "/src/index.css";

export default function Filters({ filterIndex, filterIndexClick }) {
  const filters = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <main className="p-4">
      <div>
        <ul className="flex flex-wrap justify-center md:justify-between gap-2 md:gap-4">
          {filters.map((filter, i) => (
            <li
              key={filter}
              onClick={() => filterIndexClick(i)}
              className={`${
                filterIndex === i
                  ? "active"
                  : "px-5 py-3 bg-gray-200 text-black rounded-full cursor-pointer font-bold"
              } `}
            >
              {filter}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
