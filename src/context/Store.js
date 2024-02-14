import React from "react";

let actx = new AudioContext();
let out = actx.destination;
let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
let filter = actx.createBiquadFilter();

osc1.connect(gain1);
gain1.connect(filter);
filter.connect(out);

const CTX = React.createContext();
export { CTX };


export function reducer(state, action ) {
    let {id, value} = action.payload || {};
    switch(action.type){
        case 'START_OSC': //hmm?
            osc1.start();
            return { ...state }; //for who?
        case 'STOP_OSC':
            osc1.stop();
            return { ...state };
        case 'CHANGE_OSC1':
            osc1[id].value = value;
            return {...state, osc1Settings: {...state.osc1Settings, [id]: value}};
        case 'CHANGE_OSC1_TYPE':
            osc1.type = id;
            return {...state, osc1Settings: {...state.osc1Settings, type: id}};
        case 'CHANGE_FILTER':
            osc1[id].value = value;
            return {...state, osc1Settings: {...state.filterSettings, [id]: value}};
        case 'CHANGE_FILTER_TYPE':
            osc1.type = id;
            return {...state, osc1Settings: {...state.filterSettings, type: id}};
        default: 
            console.log('reduce error, action: ', action);
            return { ...state };
    }
}

export default function Store(props) {
    const stateHook = React.useReducer(reducer, {
        osc1Settings: {
            frequency: osc1.frequency.value,
            detune: osc1.detune.value,
            type: osc1.type
        },
        filterSettings: {
            frequency: filter.frequency.value,
            detune: filter.detune.value,
            type: filter.type,
            Q: filter.Q.value,
            gain: filter.gain.value
        },
    });
    return <CTX.Provider value={stateHook}>{props.children}</CTX.Provider>
}