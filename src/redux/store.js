import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import sort from "./slices/sortSlice";
import card from "./slices/cardSlice";
import pizzas from "./slices/pizzaSlice";

export const store = configureStore({
  reducer: {
    filter,
    sort,
    card,
    pizzas,
  },
});
