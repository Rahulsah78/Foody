import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "../Redux/AllSlices/CartSlice"

// store create

export const store = configureStore({
    reducer: {
        CartSlice: CartSliceReducer // Here you used `CartSlice`
    }
});
