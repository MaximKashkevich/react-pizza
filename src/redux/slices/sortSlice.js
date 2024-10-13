import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortType: {
    name: "популярности", // значения по умолчанию
    sortProperty: "rating",
  },
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortType(state, action) {
      state.sortType = action.payload;
    },
  },
});

export const { setSortType } = sortSlice.actions;

export default sortSlice.reducer;
