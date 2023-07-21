import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    inputText: "",
    allProducts: [],
    filteredProducts: [],
  },
  reducers: {
    initializeProducts: (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },
    onInputChange: (state, action) => {
      state.inputText = action.payload;
    },
    onFilter: (state, action) => {
      state.filteredProducts = action.payload;
    },

  },
});

export const {
  initializeProducts,
  onInputChange,
  onFilter
} = productSlice.actions;
export default productSlice.reducer;
