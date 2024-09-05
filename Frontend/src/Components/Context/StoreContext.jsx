import { createContext, useState } from "react";
 import { food_list } from "../../assets/frontend_assets/assets";
import { menu_list } from "../../assets/frontend_assets/assets";


export const storeContext=createContext(null)

const storeContextProvider=(props)=>{

    const [cartItems,setItems]=useState({})
    
    const addToCart=(itemId)=>{
        if(!cartItems[itemId]){
            setItems(prev=>({...prev,[itemId]:1}))
        }
        else{
            setItems(prev=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart=(itemId)=>{
        setItems(prev=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartItem=()=>{
        let totalItem=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=food_list.find((product)=>product._id === item)
                totalItem+= itemInfo.price * cartItems[item]
            }
        }
        return totalItem
    }
    
    //{console.log(removeFromCart)}
    
    const contextValue={
        food_list,
        menu_list,
        cartItems,
        setItems,
        removeFromCart,
        addToCart,
        getTotalCartItem,
    }
    return(
        <storeContext.Provider value={contextValue}>
            {props.children}
        </storeContext.Provider>
    )
}

export default storeContextProvider