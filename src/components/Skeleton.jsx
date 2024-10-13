import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CardSkeleton() {
  return (
    <section className="w-full sm:w-[280px] h-[450px] mx-auto my-4">
      <nav className="flex flex-col items-center justify-center">
        <Skeleton height={280} width={280} style={{ borderRadius: "50%" }} />
        <Skeleton
          count={1}
          height={24}
          width={250}
          style={{ margin: "8px 0" }}
        />
      </nav>
      <nav className="bg-gray-200 rounded-[10px] mt-2">
        <div>
          <ul className="flex flex-col sm:flex-row items-center justify-between text-center px-1 py-2">
            {Array.from({ length: 2 }).map((_, index) => (
              <li
                key={index}
                className="py-1 hover:bg-white rounded-md transition text-[14px] font-bold tracking-[1.5%] leading-[17.05px] flex-1 mx-1"
              >
                <Skeleton height={20} width={"80%"} />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-1">
          <ul className="flex flex-col sm:flex-row items-center justify-between text-center px-1 py-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <li
                key={index}
                className="py-1 hover:bg-white rounded-md transition text-[14px] font-bold tracking-[1.5%] leading-[17.05px] flex-1 mx-1"
              >
                <Skeleton height={20} width={"80%"} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <nav className="flex items-center justify-between mt-3">
        <div>
          <Skeleton height={24} width={50} />
        </div>
        <div>
          <button className="border-2 border-orange-600 px-3 sm:px-5 py-1 rounded-[30px] flex items-center justify-between">
            <Skeleton width={20} height={20} />
            <span className="mx-2">Добавить</span>
            <Skeleton width={30} height={20} />
          </button>
        </div>
      </nav>
    </section>
  );
}
