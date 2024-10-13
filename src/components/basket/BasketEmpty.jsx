import { Link } from "react-router-dom";

export default function BasketEmpty() {
  return (
    <>
      <main className="items-center  bg-white w-[95%] rounded-xl pb-12 my-12 m-auto h-full">
        <header className="mx-[50px] pt-[50px]">
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
        </header>
        <div className="border border-b mt-10"></div>
        <main className="flex flex-col items-center justify-center gap-10 mt-20 text-center">
          <h1 className="text-[32px] font-bold leading-[38.98px] tracking-[1%]">
            Корзина пустая 😕
          </h1>
          <p className="text-[18px] leading-[26.17px] text-gray-400">
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейдите на главную страницу.
          </p>
          <img
            className="h-auto max-w-full" // Добавлено для адаптивности
            src="/public/assets/shopping-cart-colour 1.png"
            alt="shopping"
            width={300}
            height={255}
          />
          <Link to="/">
            <button className="px-8 py-4 bg-black text-white font-bold leading-[19.49px] tracking-[1.5%] rounded-[30px]">
              Вернуться назад
            </button>
          </Link>
        </main>
      </main>
    </>
  );
}
