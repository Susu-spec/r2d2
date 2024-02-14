import React from 'react';
import Osc1 from "./components/Osc1";
import Filter from "./components/Filter";
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <div className="text-box">
        <h1>R2-D2</h1>
      </div>
      <Osc1 /> 
      <Filter />
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