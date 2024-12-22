import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"




const initialState = {
    countrylist:[],
    loading:false
}

export const getAllcountry = createAsyncThunk('countrylist',
    async ()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        return response.data
    }
)

export const countrySlice = createSlice({
    name:'country',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getAllcountry.fulfilled,(state,action)=>{
            
            state.countrylist = action.payload
            console.log(state.countrylist)
        })
        
    }
    },
)

export const { } = countrySlice.actions

export default countrySlice.reducer