import { createContext, useState } from "react";
import runChat from "../Componets/sidebar/main/Main";

export const Context = createContext();

const ContextProvider = (props) =>{
    const [prevPrompts,setPrevPrompts] =useState([]);

     const askQuestion=async()=>{  
     setPrevPrompts(prev=>[...prev, input]) }
  

   
const contextValue = {
  prevPrompts,
  setPrevPrompts,
  // add other shared functions or state here
};
   
    return(
        <Context.Provider value={ contextValue}>
            {props.children}
            
        </Context.Provider>
    )
     }

export default ContextProvider 