import React, { useContext } from 'react'
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { CTX } from '../context/Store';

const LightTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className}} />
        ))(({ theme }) => ({
                [`& .${tooltipClasses.tooltip}`]: {
                        backgroundColor: theme.palette.common.white,
                        color: 'rgba(0, 0, 0, 0.87)',
                        fontSize: 11,
                        width: '10rem',
                        textAlign: 'center',
                        padding: '.7rem',
                        fontFamily: 'Roboto slab'
                },
        }));

export const ADSR = () => {
    const [appState, updateState] = useContext(CTX);
    let { attack, decay, sustain, release } = appState.envelope;

    const change = (e) => {
        let {id, value} = e.target;
        console.log("id and value: ", id, value);
        updateState({type: "CHANGE_ADSR", payload: {id, value}});
    }

    const longText = `The ADSR component represents the amplitude profile of sound after time`;

  return (
    <div className='control-one control filter'>
        <LightTooltip title={longText} arrow>
                <h2>ADSR Envelope</h2>
        </LightTooltip>
        <div className='param param-filter'>
                <LightTooltip title="Length of time between keyboard press and maximum gain level">
                        <h3>Attack</h3>
                </LightTooltip>
                <input value={attack} type="range" onChange={change} id="attack" max="2" step="0.02"/>        
        </div>
        <div className='param param-filter'>
                <LightTooltip title="Time constant for the Gain to decrease from the maximum to the gain specified by Sustain">
                        <h3>Decay</h3>
                </LightTooltip>
                <input value={decay} type="range" onChange={change} id="decay" max="2" step="0.02"/>
        </div>
        <div className='param param-filter'>
                <LightTooltip title="Gain level after Attack and Decay">
                        <h3>Sustain</h3>
                </LightTooltip>
                <input value={sustain} type="range" onChange={change} id="sustain" max="1" step="0.01"/>
        </div>
        <div className='param param-filter'>
                <LightTooltip title="The length of time between the release of the key and the disappearance of sound">
                        <h3>Release</h3>
                </LightTooltip>
                <input value={release} type="range" onChange={change} id="release" max="1" step="0.01"/>
        </div>
    </div>
  )
}

export default ADSR;
