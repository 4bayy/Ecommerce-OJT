import {createSlice} from '@reduxjs/toolkit';

export const cartSlice =createSlice({
    name:'carts',
    initialState:{
        count:"0",
        cartItems:[]
    },
    reducers:{
        addCart:(state,action)=>{
            console.log(action);
            state.cartItems.push(action.payload);
        }
    }
})

export const {addCart}=cartSlice.actions;
export default cartSlice.reducer;