
import './Main.css';
import { assets } from '../../assets/assets';
import React, { useState, useEffect } from 'react';
import { URL } from '../../context/constants';

const Main = () => {
const [input,setInput] =useState('');
const [recentPrompt,setRecentPrompt] =useState("");
const [prevPrompts,setPrevPrompts] =useState([]);
const [showResult,setShowResult] =useState(false);
const [loading,setLoading] =useState(false);
const [resultData,setResultData] =useState(undefined);

const [isDarkMode, setIsDarkMode] = useState(false);
const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  // Apply/remove class on body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);




const delayPara = (index, nextWord) => {
  setTimeout(() => {
    setResultData(prev => prev + nextWord);
  }, 75 * index);
};

const payload={
    "contents": [
      {
        "parts": [
          {
            "text": input
          }
        ]
      }
    ]
}
const askQuestion=async()=>{
  setLoading(true)
  setShowResult(true)
  setRecentPrompt(input)
  setPrevPrompts(prev=>[...prev, input])
  
  let response = await fetch (URL,{
    method:"post",
    body:JSON.stringify(payload)
  })
  response= await response.json();
  
  const rawText = response.candidates[0].content.parts[0].text;
  let responseArray = rawText.split("**");
  let newResponse = "";
  for(let i =0 ; i < responseArray.length; i++)
  {
    if(i === 0 || i%2 !== 1 ){
      newResponse +=responseArray[i];
    }
    else{
      newResponse += "<b>"+responseArray[i]+"</b>";
    }
  }

  let newResponse2 = newResponse.split("*").join("<br/>")
  let newResponseArray =newResponse2.split(" ");
  for(let i=0; i<newResponseArray.length;i++)
  {
    const nextWord = newResponseArray[i];
    delayPara(i,nextWord+" ")
  }

  setLoading(false)
  setInput("")
  
}
 
return (

      <div className='main'>
        <div className="nav">
            <p>AmSmart</p>
         <img src={assets.woman} alt="" />
        </div>

        

        <div className="main-cantainer">
          {!showResult
          ?<>
          <div className="greed">
                <p>
                    <span>Hello, Apoorva</span>
                </p>
                <p>How can I help you today?</p>
            </div>
            
            <div className="cards">
                <div className="card">
                    <p>Suggest beutiful places to see on an upcoming road trip</p>
                    <img src={assets.compass} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarize this consept:urban planning</p>
                    <img src={assets.bulb} alt="" />
                </div>
                <div className="card">
                    <p>Brainasatrom team boading activity for our work retreat</p>
                    <img src={assets.chatMessage} alt="" />
                </div>
                <div className="card">
                    <p>Improve the readability of the folling code</p>
                    <img src={assets.code} alt="" />
                </div>
           </div>
            </>
           :<div className='result'>
                  <div className="result-title">
                    <img src={assets.woman} alt="" />
                    <p> {recentPrompt} </p>
                  </div>
                  
                  <div className="result-data">
                     <img src={assets.smart1} alt="" />
                     {loading
                     ?<div className='loader'>
                      <hr />
                      <hr />
                      <hr />
                     </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                    
                  </div>
             </div>
          
          }
            
  <div className="main-bottom">
            <div className="search-box">
                <input type="text" value={input} placeholder='Enter a prompt here'onChange={(event)=>setInput(event.target.value)} />
                <div>
                    <img src={assets.gallery} alt="" />
                    <img src={assets.mic} alt="" />
                    <img src={assets.sent} alt="" onClick={askQuestion}  /> 
                </div>
            </div>
            

            <p className="bottom-info">AmSmart may display inaccurate info, including about people, so double- check its

            </p>
          
           </div>
           </div>
       
        <button className="theme-toggle-floating" onClick={toggleTheme}>
         {isDarkMode ? '🌙' : '☀️'}
        </button>
    </div>
  )
}

export default Main









