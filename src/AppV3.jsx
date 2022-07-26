import React, { createContext, useState } from 'react'
import { ContextExample1 } from './ComponentV2/DynamicContext/ContextExample1';
import { ContextExample2 } from './ComponentV2/DynamicContext/ContextExample2';

export const Player = createContext();
export const AppV3 = () => {
   const [playerValue, setPlayerValue] = useState({name: 'Dhoni', game: 'Cricket'})
  return (
    <>
    <h1>AppV3</h1>
    <Player.Provider value={{playerValue, setPlayerValue}}>
        <ContextExample1/>
        <ContextExample2/>
    </Player.Provider>
    <br/><br/>
    <button onClick={() => setPlayerValue({name: 'Kohli', game: 'cricket'})}>update player</button>
    </>
  )
}

// const player = {
//     playerValue: {
//         name: 'Dhoni',
//         game: 'criucket'
//     },
//     setPlayerValue: setPlayerValue
// }