import { configureStore } from "@reduxjs/toolkit";
import factorSlice from "./factor-slice";


export const store = configureStore({
    reducer: factorSlice
})
