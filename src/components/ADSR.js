import React, { useContext } from 'react'
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { CTX } from '../context/Store';
import ClickAwayListener from '@mui/material/ClickAwayListener';


export const LightTooltip = styled(({ className, ...props }) => (
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
    const [open, setOpen] = React.useState({
        attack: false,
        decay: false,
        sustain: false,
        release: false
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
        console.log("id and value: ", id, open[id]);
    };
    
    const change = (e) => {
        let { id, value } = e.target;
        updateState({ type: "CHANGE_ADSR", payload: { id, value } });
    }


    const longText = `The ADSR component represents the amplitude profile of sound after time`;

  return (
    <div className='control-one control filter'>
        <LightTooltip title={longText} arrow>
                <h2>ADSR Envelope</h2>
        </LightTooltip>
        <div className='param param-filter'>
                <ClickAwayListener onClickAway={() => handleTooltipClose('attack')}>
                        <LightTooltip onClose={() => handleTooltipClose('attack')}
                                open={open.attack}
                                title="length of time between keyboard press and maximum gain level">
                                <h3 onClick={() => handleTooltipOpen('attack')}>Attack</h3>
                        </LightTooltip>
                </ClickAwayListener>
                <input value={attack} type="range" onChange={change} id="attack" max="2" step="0.02"/>               
        </div>
        <div className='param param-filter'>
                <ClickAwayListener onClickAway={() => handleTooltipClose('decay')}>
                        <LightTooltip onClose={() => handleTooltipClose('decay')}
                                open={open.decay}
                                title="time constant for the gain to decrease from the maximum to the gain specified by sustain">
                                <h3 onClick={() => handleTooltipOpen('decay')}>Decay</h3>
                        </LightTooltip>
                </ClickAwayListener> 
                <input value={decay} type="range" onChange={change} id="decay" max="2" step="0.02"/>
        </div>
        <div className='param param-filter'>
                <ClickAwayListener onClickAway={() => handleTooltipClose('sustain')}>
                        <LightTooltip onClose={() => handleTooltipClose('sustain')}
                                open={open.sustain}
                                title="audio signal remains at the same gain level during this time length">
                                <h3 onClick={() => handleTooltipOpen('sustain')}>Sustain</h3>
                        </LightTooltip>
                </ClickAwayListener>
                <input value={sustain} type="range" onChange={change} id="sustain" max="1" step="0.01"/>
        </div>
        <div className='param param-filter'>
                <ClickAwayListener onClickAway={() => handleTooltipClose('release')}>
                        <LightTooltip onClose={() => handleTooltipClose('release')}
                                open={open.release}
                                title="length of time between the release of the key and the disappearance of sound">
                                <h3 onClick={() => handleTooltipOpen('release')}>Release</h3>
                        </LightTooltip>
                </ClickAwayListener>
                <input value={release} type="range" onChange={change} id="release" max="1" step="0.01"/>
        </div>
    </div>
  )
}

export default ADSR;
