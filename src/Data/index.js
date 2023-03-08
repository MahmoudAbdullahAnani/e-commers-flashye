import { configureStore } from '@reduxjs/toolkit'
import ProdactsSlice from './Slices/ProductsSlices';

export const store = configureStore({
  reducer: {
    cartProducts: ProdactsSlice
  },
})