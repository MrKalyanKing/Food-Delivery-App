import { createContext } from "react";
 import { food_list } from "../../assets/frontend_assets/assets";
import { menu_list } from "../../assets/frontend_assets/assets";


export const storeContext=createContext(null)

const storeContextProvider=(props)=>{


    const contextValue={
        food_list,
        menu_list,
    }
    return(
        <storeContext.Provider value={contextValue}>
            {props.children}
        </storeContext.Provider>
    )
}

export default storeContextProvider