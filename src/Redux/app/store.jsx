import { configureStore } from '@reduxjs/toolkit'
import  AllCountrySlice  from "./features/counrty/countrySlice";



export const store = configureStore({

    reducer:{
        country : AllCountrySlice
    }
})