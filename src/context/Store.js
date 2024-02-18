import React from "react";
import Osc from './Osc';

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

let nodes = [];

// refactor useState hooks
export function reducer(state, action ) {
    // if no payload
    let {id, value, note, freq} = action.payload || {};
    switch(action.type){
        case 'MAKE_OSC':
            const newOsc = new Osc(actx, "triangle ", freq, 0, null, gain1);
            newOsc.start();
            nodes.push(newOsc);
            console.log('make osc, note and freq: ', note, freq);
            return{ ...state };
        case 'KILL_OSC':
            let newNodes = [];
            nodes.forEach(node => {
                if(Math.round(node.osc.frequency.value) === Math.round(freq)){
                    node.stop();
                }
                else {
                    newNodes.push(node);
                }
            })
            nodes = newNodes;
            console.log('make osc, note and freq: ', note, freq);
            return{ ...state };
            
        case 'START_OSC': 
            osc1.start();
            return { ...state }; 
        case 'STOP_OSC':
            osc1.stop();
            return { ...state };
        case 'CHANGE_OSC1':
            osc1[id].value = value;
            // return new state
            return {
                    ...state, 
                    osc1Settings: {
                        ...state.osc1Settings, 
                        [id]: value
                    }
                };
        case 'CHANGE_OSC1_TYPE':
            osc1.type = id;
            return {
                    ...state, 
                    osc1Settings: {
                        ...state.osc1Settings, 
                        type: id
                    }
                };
        case 'CHANGE_FILTER':
            filter[id].value = value;
            return {
                    ...state, 
                    filterSettings: {
                        ...state.filterSettings, 
                        [id]: value
                        }
                    };
        case 'CHANGE_FILTER_TYPE':
            filter.type = id;
            return {
                    ...state, 
                    filterSettings: {
                        ...state.filterSettings, 
                        type: id
                    }
                };
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
