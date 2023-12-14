import React from 'react';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwithchButton from './components/LightSwitchButton';
import './App.css';
import TextRepeaterButton from './components/TextRepeaterButton';


function App() {
  return (
    <div className={`App`}>
      <h1>fancy-Button</h1>
      <section>
      <AngryButton/>
      <CounterButton/>
      <LightSwithchButton/>
      <TextRepeaterButton/>
</section>
    </div>
  );
}

export default App;
