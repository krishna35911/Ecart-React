import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice(
    {
        name:'cart',
        initialState:[], //hold more than one item
        reducers:{
            //function to add items into cart
            addToCart:(state,action)=>
            {
                state.push(action.payload)
            },

            //function to remove items from cart
            removefromcart:(state,action)=>
            {
                return state.filter(item=>item.id!=action.payload)
            },

            //function to remove all items from cart
            emptycart:(state)=>{
               return state=[]
            }

        }
    }
)

export const {addToCart,removefromcart,emptycart}=cartSlice.actions
  
export default cartSlice.reducer;