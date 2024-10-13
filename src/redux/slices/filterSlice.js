import { createSlice } from "@reduxjs/toolkit";

// 1. Начальное состояние
const initialState = {
  filterIndex: 0, // Изначальный фильтр - 0 (по умолчанию)
  sortType: {
    name: "популярности", // значения по умолчанию
    sortProperty: "rating",
  },
};

// 2. Создание слайса
const filterSlice = createSlice({
  name: "filters", // Название слайса (идентификатор)
  initialState, // Используем initialState, которое мы определили выше
  reducers: {
    // 3. Редьюсеры (функции, изменяющие состояние)
    setFilterIndex(state, action) {
      // Изменение filterIndex
      state.filterIndex = action.payload; // Обновляем filterIndex на новое значение из экшена
    },
    setFilters(state, action) {
      state.sort = action.payload.sort;
      state.filterIndex = Number(action.payload.filterIndex);
    },
  },
});

// 4. Экспорт экшенов (actions)
export const { setFilterIndex, setFilters } = filterSlice.actions;
// Создаем доступные экшены setFilterIndex.
// В setFilterIndex.actions лежат функции, которые создают экшены.

// 5. Экспорт редьюсера
export default filterSlice.reducer;
