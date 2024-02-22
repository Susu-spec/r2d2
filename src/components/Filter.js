import React, { useContext } from 'react';
import { CTX } from "../context/Store";

const Filter = () => {
    const [appState, updateState] = useContext(CTX);

    let {type, frequency, detune, gain, Q} = appState.filterSettings;

    const change = (e) => {
        let {id, value} = e.target;
        console.log("id and value: ", id, value);
        updateState({type: "CHANGE_FILTER", payload: {id, value}});
    }

    const changeType = (e) => {
        let {id} = e.target;
        updateState({type: "CHANGE_FILTER_TYPE", payload: {id}});
    }

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
                <input value={Q} type="range" onChange={change} id="Q" max="100"/>
            </div>
            <div className='param'>
                <h3>Gain</h3>
                <input value={gain} type="range" onChange={change} id="gain" max="10"/>
            </div>
            <div className='param param-button'>
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