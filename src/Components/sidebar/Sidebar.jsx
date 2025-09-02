import React, { useContext, useState } from 'react'
 import './Sidebar.css';
 import {assets} from '../../assets/assets.js'
import { Context } from '../../context/Context.jsx';

 const sidebar = () => {
    const [extended,setExtended] = useState(false)
    const [isOpen, setIsOpen] = useState(false); // for mobile sidebar toggle
    const {prevPrompts, setPrevPrompts, recentPrompt, } = useContext(Context);
   

 return (
<>
  {/* Hamburger menu (mobile only) */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <img src={assets.menu} alt="menu" />
      </button>
    <div className={`sidebar ${isOpen ? 'active' : ''}`}>
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
                   <img src={assets.chatMessage} alt=""  />
                   <p>{item}...</p>
                 </div>
              ))}
              {recentPrompt && (
              <div className="recent-entry highlight">
                <img src={assets.chatMessage} alt="" />
                <p><strong>Latest:</strong> {recentPrompt}</p>
              </div>
            )}
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
    </>
   
  )
    }

export default sidebar