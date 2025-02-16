import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import BasketGeneral from "./components/basket/BasketGeneral.jsx";
import BasketEmpty from "./components/basket/BasketEmpty.jsx";
import FullPizza from "./components/fullPizza.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Basket",
    element: <BasketGeneral />,
  },
  {
    path: "/BasketEmpty",
    element: <BasketEmpty />,
  },
  {
    path: "/FullPizza/:id",
    element: <FullPizza />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
