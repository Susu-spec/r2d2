import React from "react";
import Osc from './Osc';
// import ADSR from './ADSR';

let actx = new AudioContext();
let out = actx.destination;
// let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
let filter = actx.createBiquadFilter();

// osc1.connect(gain1);
gain1.connect(filter);
filter.connect(out);

const CTX = React.createContext();
export { CTX };

let nodes = [];

// refactor useState hooks
export function reducer(state, action ) {
    // if no payload
    let {id, value, freq} = action.payload || {};
    switch(action.type){
        case 'MAKE_OSC':
            const newOsc = new Osc(actx, state.osc1Settings.type, freq, state.osc1Settings.detune, state.envelope, gain1);
            newOsc.start();
            nodes.push(newOsc);
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
            return{ ...state };
        case 'CHANGE_ADSR':
            return {
                    ...state, 
                    envelope: {
                        ...state.envelope, 
                        [id]: Number(value)
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
                }
        default:
            console.log('reduce error, action: ', action);
            return { ...state };
    }
   
}

export default function Store(props) {
    const stateHook = React.useReducer(reducer, {
        osc1Settings: {
            detune: 0,
            type: "sine"
        },

        filterSettings: {
            frequency: filter.frequency.value,
            detune: filter.detune.value,
            type: filter.type,
            Q: filter.Q.value,
            gain: filter.gain.value
        },
        
        envelope: {
            attack: 0.005,
            decay: 0.1,
            sustain: 0.6,
            release: 0.1
        }
    });
    return <CTX.Provider value={stateHook}>{props.children}</CTX.Provider>
}
