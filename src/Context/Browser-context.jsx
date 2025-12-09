import { children, createContext,useContext, useReducer} from "react";
import { browserReducer } from "../reducer/Browser-reducer";

const initialvalue ={
    name :""
}
const BrowserContext = createContext(initialvalue);

const BrowserProvider = ({children}) =>{

    const [{name},BrowserDispatch] = useReducer(browserReducer,initialvalue);
    return ( 
       <BrowserContext.Provider value={{name,BrowserDispatch}} >
       {children}
       </BrowserContext.Provider>
    )
    
}

const useBrowser = () => useContext(BrowserContext);
export {useBrowser, BrowserProvider};