import { createSlice } from "@reduxjs/toolkit";
const ProdactsSlice = createSlice({
    initialState: [],
    name: 'ProdactsSlice',
    reducers: {
        addProduct: (store, action) => {
            store.push(action.payload)
        },
        removeProduct: (store, action) => {
            return store = store.filter(deProduct => {
                return deProduct.id !== action.payload
            })
        },
        clearProduct: (store, action) => {
            return store = []
        }
    }
});
export default ProdactsSlice.reducer
export const { addProduct, removeProduct, clearProduct } = ProdactsSlice.actions