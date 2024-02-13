import React, { useState }  from 'react';
import Osc1 from "./components/Osc1";
import Filter from "./components/Filter";
import './App.scss';

let actx = new AudioContext();
let out = actx.destination;
let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
let filter = actx.createBiquadFilter();

osc1.connect(gain1);
gain1.connect(filter);
filter.connect(out);

function App() {
const [osc1settings, setOsc1settings] = useState({
  frequency: osc1.frequency.value,
  detune: osc1.detune.value,
  type: osc1.type
});

const [filterSettings, setFilterSettings] = useState({
  frequency: filter.frequency.value,
  detune: filter.detune.value,
  type: filter.type,
  Q: filter.Q.value,
  gain: filter.gain.value
});

const changeOsc1 = e => {
  let {value, id} = e.target;
  setOsc1settings({...osc1settings, [id]: value});
  osc1[id].value = value;
}

const changeOsc1Type = (e) => {
  let { id } = e.target;
  osc1.type = id;
  setOsc1settings({...osc1settings, type: id});
}


const changeFilter = (e) => {
  let {value, id} = e.target;
  setFilterSettings({...filterSettings, [id]: value});
  filter[id].value = value;
}

const changeFilterType = (e) => {
  let { id } = e.target;
  filter.type = id;
  setFilterSettings({...filterSettings, type: id});
}

  return (
    <div className="App">
      <div className="background"></div>
      <div className="text-box">
        <h1>R2-D2</h1>
      </div>
      <div className="Buttons">
        <button onClick={()=> osc1.start()}>Start</button>
        <button onClick={()=> osc1.stop()}>Stop</button>
      </div>
      <Osc1
          change={changeOsc1}
          settings={osc1settings}
          changeType={changeOsc1Type}
      /> 
      <Filter
        change={changeFilter}
        settings={filterSettings}
        changeType={changeFilterType}
      />
    </div>
  );
}

export default App;