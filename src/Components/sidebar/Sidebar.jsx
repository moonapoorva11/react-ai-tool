import React, { useContext, useState } from 'react'
 import './sidebar.css';
 import {assets} from '../../assets/assets.js'
import { Context } from '../../context/Context.jsx';
import Main from './main/Main.jsx';

 

const sidebar = () => {
    const [extended,setExtended] = useState(false)
    const {prevPrompts, setPrevPrompts, recentPrompt, } = useContext(Context);
   // const {prevPrompts,recentPrompt,} = useContext(Context);


 const oldPromt=async()=>{  
    setPrevPrompts(prev => [...prev, recentPrompt]);
    }
  return (
    <div className='sidebar'>
       
        <div className='top'>
            <img onClick={()=>setExtended(prev=>!prev)} className ='menu' src={assets.menu} alt='' />
            <div className="newchat">
                <img src= {assets.plus} alt=''/>
                 {extended?<p>New Chat</p>:null}
            </div>
            {extended
            ? <div className="recent">
                <p className= "recent-title" >Recent</p>
              {Array.isArray(prevPrompts) && prevPrompts.map((item, index) => (
                   <div className="recent-entry" key={index}>
                   <img src={assets.chatMessage} alt=""    />
                   <p>{item}...</p>
                 </div>
              ))}
                
           </div>
           :null
}

           
        </div>
        
        <div className='bottom'>
            
            <div className="bottom-item recent-entry">
                <img src={assets.question} alt="" />
               {extended?<p>Help</p>:null} 
            </div>
             
            <div className="bottom-item recent-entry">
                <img src={assets.history} alt="" />
                {extended?<p>Activity</p>:null} 
                </div>
             
            <div className="bottom-item recent-entry">
                <img src={assets.settings} alt="" />
                {extended?<p>Settings</p>:null} 
            </div>
            
        </div>
    </div>
   
  )
    }

export default sidebar