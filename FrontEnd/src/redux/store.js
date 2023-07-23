
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import cartReducer, { getTotals } from "../features/cartSlice"
import productsReducer, { productsFetch } from '../features/productSlice'
import { productsApi } from '../features/productsApi' 

export const store = configureStore({
  reducer: {
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware),
  
})

store.dispatch(productsFetch())
store.dispatch(getTotals());