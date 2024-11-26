import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    carts: [],
};

// cart and wishlist logic here

const cartSlice = createSlice({
    name: "Shopping",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // Check if the item already exists in the cart
            const index = state.carts.findIndex((item) => item.id === action.payload.id);

            if (index >= 0) {
                // Item already exists, so increase the quantity
                state.carts[index].quantity += 1;
            } else {
                // Item does not exist, add it to the cart with a quantity of 1
                const newItem = { ...action.payload, quantity: 1 };
                state.carts.push(newItem); // Add new item to the cart array
            }

            // toast.success("Product added to cart!");
        },

        // deleteitem in cart
        removeToCart: (state, action) => {
            const data = state.carts.filter((element) => element.id !== action.payload);
            state.carts = data;
        },
        // decrease quantity
        decreaseQuantity: (state, action) => {
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload);
            if (itemIndex !== -1 && state.carts[itemIndex].quantity > 1) {
                state.carts[itemIndex].quantity -= 1;
            } else {
                toast.success('Minimum one product is required');
            }
        },
        // clear allcart

        emptycartitem:(state,action)=>{
            state.carts = []
        }
    }
});

export const { addToCart, removeToCart,decreaseQuantity,emptycartitem } = cartSlice.actions;
export default cartSlice.reducer;