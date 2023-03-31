import {createSlice} from '@reduxjs/toolkit';
import { ToastContainer, Toast, toast ,Flip} from 'react-toastify';

export const cartSlice =createSlice({
    name:'carts',
    initialState:{
        count:0,
        cartItems:[],
        wishList:[],
        wcount:0
    },
    reducers:{
        addCart:(state,action)=>{
            console.log(action);
            state.count=state.count+1;
            console.log(state.count);
            state.cartItems.push(action.payload);
            notify("added to cart");
        },
        removeCart:(state,action)=>{
            console.log(action);
            state.count=state.count-1;
            state.cartItems.splice(action.payload,1);
            notify("Removed from cart");
            

        },
        addWishlist:(state,action)=>{
            state.wishList.push(action.payload);
            console.log(action)
            state.wcount = state.wcount + 1;
            notify("added to wishlist");
            state.wcount = 1 ;

        },
        removeWishlist:(state,action)=>{
            console.log(action);
            state.wishList.splice(action.payload,1);
            notify("removed from wishlist");
            state.wcount = 0;

        }
    }
})
const notify = (msg) =>
        toast.success(msg, {
            position: 'top-right',
    autoClose: 1000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    transition: Flip
        });

export const {addCart,removeCart,addWishlist,removeWishlist}=cartSlice.actions;
export default cartSlice.reducer;