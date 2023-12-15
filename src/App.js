//import React, { useState } from 'react';
import React,{useState} from 'react';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import './App.css';
import TextRepeaterButton from './components/TextRepeaterButton';



function App() {
  const[light,setLight] = useState("off");
  const dark = (light === 'off') ? 'dark' : '';
  const switchLight = () => setLight((light === "on") ? "off" : "on");
  return (
    <div className={`App ${dark}`} >
      
      <h1>fancy-Button</h1>
      <section>
      <AngryButton/>
      <CounterButton/>
      <LightSwitchButton light={light} switchLight={switchLight}/>
      <TextRepeaterButton/>
</section>
    </div>
  );
 
}


export default App;
