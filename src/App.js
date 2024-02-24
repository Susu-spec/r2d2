import React from 'react';
import Filter from "./components/Filter";
import ADSR from "./components/ADSR";
import Keyboard from "./components/Keyboard";
import AnimatedText from './components/AnimatedText';

import './App.scss'; 

function App() {
  const longText = "Hello, this is R2-D2. A Keyboard interface that allows you alter sound features for each key on the keyboard.";
  return (
    <div className="App">
      <div className="background"></div>
      <div className="text-box">
        <h1>R2-D2</h1>
        <AnimatedText text={longText} className="animated-text"></AnimatedText>
      </div>
      <ADSR />
      <Filter />
      <Keyboard />
      
    </div>
  );
}

export default App;

// const [filterSettings, setFilterSettings] = useState({
  
// });

// const changeOsc1 = (e) => {
//   let {value, id} = e.target;
//   setOsc1settings({...osc1settings, [id]: value});
//   osc1[id].value = value;
// }

// const changeOsc1Type = (e) => {
//   let { id } = e.target;
//   osc1.type = id;
//   setOsc1settings({...osc1settings, type: id});
// }


// const changeFilter = (e) => {
//   let {value, id} = e.target;
//   setFilterSettings({...filterSettings, [id]: value});
//   filter[id].value = value;
// }

// const changeFilterType = (e) => {
//   let { id } = e.target;
//   filter.type = id;
//   setFilterSettings({...filterSettings, type: id});
// }