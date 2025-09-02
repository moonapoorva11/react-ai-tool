import { createContext, useState } from "react";
export const Context = createContext();

const ContextProvider = (props) =>{
    const [prevPrompts,setPrevPrompts] =useState([]);
    const [recentPrompt,setRecentPrompt] =useState("");



const contextValue ={
    prevPrompts,
    setPrevPrompts,
    recentPrompt,
    setRecentPrompt,
};

/*const askQuestion=async()=>{  
     setPrevPrompts(prev=>[...prev, input]) }*/
  

   
return(
        <Context.Provider value={ contextValue}>
            {props.children}
            
        </Context.Provider>
    )
     }

export default ContextProvider 