import React, { useState }  from 'react';
import Osc1 from "./components/Osc1";
import './App.scss';

let actx = new AudioContext();
let out = actx.destination;


let osc1 = actx.createOscillator();
let gain1 = actx.createGain();

osc1.connect(gain1);
gain1.connect(out);

function App() {
const [frequency, setFrequency] = useState(osc1.frequency.value);
const [detuneValue, changeDetune] = useState(osc1.detune.value);
const changeOsc1Freq = (e) => {
    let { value } = e.target;
    setFrequency(value);
    osc1.frequency.value = value;
};

const changeOsc1Detune = (e) => {
  let {value} = e.target;
   changeDetune(value);
   osc1.detune.value = value;
   console.log(value);
}

  return (
    <div className="App">
      <div className="background"></div>
      <div className="text-box">
        <h1>Sliders</h1>
      </div>
      <div className="Buttons">
        <button onClick={()=> osc1.start()}>Start</button>
        <button onClick={()=> osc1.stop()}>Stop</button>
      </div>
      <Osc1 changeFreq={changeOsc1Freq} freq={frequency}
            changeDetuneValue={changeOsc1Detune} detune={detuneValue}/>
    </div>
  );
}

export default App;
