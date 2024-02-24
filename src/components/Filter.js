import React, { useContext } from 'react';
import { CTX } from "../context/Store";
import { LightTooltip } from './ADSR';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const Filter = () => {
    const [appState, updateState] = useContext(CTX);

    let {type, frequency, detune, gain, Q} = appState.filterSettings;

    const [open, setOpen] = React.useState({
        frequency: false,
        detune: false,
        gain: false,
        Q: false
    });
    
    const handleTooltipClose = (id) => {
        setOpen(open => ({
                ...open,
                [id]: false
        }));
    };
    
    const handleTooltipOpen = (id) => {
        setOpen(open => ({
            ...open,
            [id]: true
        }));
    };

    const change = (e) => {
        let {id, value} = e.target;
        console.log("id and value: ", id, value);
        updateState({type: "CHANGE_FILTER", payload: {id, value}});
    }

    const changeType = (e) => {
        let {id} = e.target;
        updateState({type: "CHANGE_FILTER_TYPE", payload: {id}});
    }

    const longText = "reduces or enhances aspects of the audio signal"

    return (
        <div className='control filter'>
            <LightTooltip title={longText} arrow>
                <h2>Filter</h2>
            </LightTooltip>
            <div className='param param-button'>
                <button id="lowpass" onClick={changeType} className={`${type === 'lowpass' && 'active'}`}>lowpass</button>
                <button id="highpass" onClick={changeType} className={`${type === 'highpass' && 'active'}`}>highpass</button>
                <button id="notch" onClick={changeType} className={`${type === 'notch' && 'active'}`}>notch</button>
                <button id="lowshelf" onClick={changeType} className={`${type === 'lowshelf' && 'active'}`}>lowshelf</button>
                <button id="highshelf" onClick={changeType} className={`${type === 'highshelf' && 'active'}`}>highshelf</button>
            </div>
            <div className='param param-filter'>
            <ClickAwayListener onClickAway={() => handleTooltipClose('frequency')}>
                        <LightTooltip onClose={() => handleTooltipClose('frequency')}
                        open={open.frequency}
                        title="frequency parameter handled by the types of filters above">
                            <h3 onClick={() => handleTooltipOpen('frequency')}>Frequency</h3>
                        </LightTooltip>
            </ClickAwayListener>
                <input value={frequency} type="range" onChange={change} id="frequency" max="10000"/>
            </div>
            <div className='param'>
                <ClickAwayListener onClickAway={() => handleTooltipClose('detune')}>
                            <LightTooltip onClose={() => handleTooltipClose('detune')}
                            open={open.detune}
                            title="slight adjustment of frequency relative to the base frequency">
                                <h3 onClick={() => handleTooltipOpen('detune')}>Detune</h3>
                            </LightTooltip>
                </ClickAwayListener>
                <input value={detune} type="range" onChange={change} id="detune" max="10" step="0.02"/>
            </div>
            
            <div className='param'>
                <ClickAwayListener onClickAway={() => handleTooltipClose('Q')}>
                            <LightTooltip onClose={() => handleTooltipClose('Q')}
                            open={open.Q}
                            title="reduces or increases the range of frequencies affected by the filter">
                                <h3 onClick={() => handleTooltipOpen('Q')}>Sound Quality</h3>
                            </LightTooltip>
                </ClickAwayListener>
                <input value={Q} type="range" onChange={change} id="Q" max="100"/>
            </div>
            <div className='param param-gain'>
                <ClickAwayListener onClickAway={() => handleTooltipClose('gain')}>
                            <LightTooltip onClose={() => handleTooltipClose('gain')}
                            open={open.gain}
                            title="tone adjustment before processing">
                                <h3 onClick={() => handleTooltipOpen('gain')}>Gain</h3>
                            </LightTooltip>
                </ClickAwayListener>
                <input value={gain} type="range" onChange={change} id="gain" max="10" step="0.02"/>
            </div>
            
        </div>
    );      
};

export default Filter;