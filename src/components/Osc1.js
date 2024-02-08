import React from 'react'

function Osc1({changeFreq, freq}) {
  return (
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
  )
}

export default Osc1