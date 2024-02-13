import React from 'react';

const Filter = ({change, settings, changeType}) => {
    let {type, detune, frequency, gain, Q} = settings;
    return (
        <div className='control filter'>
            <h2>Filter</h2>
            <div className='param param-filter'>
                <h3>Frequency</h3>
                <input value={frequency} type="range" onChange={change} id="frequency" max="10000"/>
            </div>
            <div className='param'>
                <h3>Detune</h3>
                <input value={detune} type="range" onChange={change} id="detune"/>
            </div>
            
            <div className='param'>
                <h3>Sound Quality</h3>
                <input value={Q} type="range" onChange={change} id="Q" max="10"/>
            </div>
            <div className='param'>
                <h3>Gain</h3>
                <input value={gain} type="range" onChange={change} id="gain" max="10"/>
            </div>
            <div className='param'>
                <button id="lowpass" onClick={changeType} className={`${type === 'lowpass' && 'active'}`}>lowpass</button>
                <button id="highpass" onClick={changeType} className={`${type === 'highpass' && 'active'}`}>highpass</button>
                <button id="notch" onClick={changeType} className={`${type === 'notch' && 'active'}`}>notch</button>
                <button id="lowshelf" onClick={changeType} className={`${type === 'lowshelf' && 'active'}`}>lowshelf</button>
                <button id="highshelf" onClick={changeType} className={`${type === 'highshelf' && 'active'}`}>highshelf</button>
            </div>
        </div>
    );      
};

export default Filter;