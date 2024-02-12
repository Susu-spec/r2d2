import React from 'react'

function Osc1({changeFreq, freq, changeDetuneValue, detune}) {
  return (
    <div className="oscillator"> 
      <div className="control">
        <h2>osc 1</h2>
        <div className="param">
          <h3>frequency</h3>
          <input 
                value={(freq)}
                onChange={(changeFreq)}
                max="5000" 
                type="range" 
                id="frequency">
          </input>
        </div> 
      </div>
      <div className="control">
        <div className="param">
          <h3>Detune</h3>
          <input 
                value={(detune)}
                onChange={(changeDetuneValue)}
                type="range" 
                id="detune">
          </input>
        </div>   
      </div>
  </div>

  )
}

export default Osc1