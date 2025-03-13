
import { createSlice } from "@reduxjs/toolkit"; // ✅ Correct


const initialState = {
    products:[],
}

const CartSlice = createSlice ({
    name:'cart',
    initialState,
    reducers: {
        
    }
})


export default CartSlice .reducer