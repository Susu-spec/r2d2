import React , { useContext, useEffect } from 'react'
import { CTX } from "../context/Store";
import QwertyHancock from "qwerty-hancock";


const Keyboard = () => {
    const [appState, updateState] = useContext(CTX);

    useEffect(() => {
        const keyboard = new QwertyHancock({
            id: "keyboard",
            width: "373",
            height: "65",
            octaves: 2,
            startNote: 'C4',
        });
        keyboard.keyDown = (note, freq) => {
            updateState({ type: 'MAKE_OSC', payload: { note, freq } });

        }
        keyboard.keyUp = ( note, freq ) => {
            updateState({ type: 'KILL_OSC', payload: { note, freq }});
        }
    }, []);

  return (
    <div className='keyboard'>
        <div id="keyboard" ></div>
    </div>
  )
}

export default Keyboard