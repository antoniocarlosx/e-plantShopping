import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const productToAdd = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === productToAdd.id,
      );

      if (!existingItem) {
        state.items.push({ ...productToAdd, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const productToRemove = action.payload;

      if (!productToRemove || !productToRemove.id) return;

      state.items = state.items.filter(
        (item) => item.id !== productToRemove.id,
      );
    },
    incrementQuantity: (state, action) => {
      const productToIncrease = action.payload;
      const stateItem = state.items.find(
        (item) => item.id === productToIncrease.id,
      );

      if (!productToIncrease) return;
      if (!stateItem) return;

      stateItem.quantity++;
    },
    decrementQuantity: (state, action) => {
      const productToDecrease = action.payload;
      if (!productToDecrease) return;

      const stateItem = state.items.find(
        (item) => item.id === productToDecrease.id,
      );

      
      if (!stateItem || stateItem.quantity <= 1) return;

      stateItem.quantity--;
      
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  CartSlice.actions;

export default CartSlice.reducer;
