import {createSlice} from '@reduxjs/toolkit';

export const CartSlice =createSlice({
    name:'carts',
    initialstate:{
        count:0,
        products:[]
    },
    reducers:{
        addCart:(state,action)=>{
            console.log(action);
            
        }
    }
})

export const {addCart}=CartSlice.actions;
export default CartSlice.reducer;