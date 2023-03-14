import {createSlice} from '@reduxjs/toolkit';

export const cartSlice =createSlice({
    name:'carts',
    initialState:{
        count:0,
        cartItems:[]
    },
    reducers:{
        addCart:(state,action)=>{
            console.log(action);
            state.count=state.count+1;
            console.log(state.count);
            state.cartItems.push(action.payload);
        },
        removeCart:(state,action)=>{
            console.log(action);
            state.count=state.count-1;
            state.cartItems.splice(action.payload,1);
        }
    }
})

export const {addCart,removeCart}=cartSlice.actions;
export default cartSlice.reducer;