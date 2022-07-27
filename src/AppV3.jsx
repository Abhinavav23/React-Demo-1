import React, { createContext, useState } from 'react'
import { ContextExample1 } from './ComponentV2/DynamicContext/ContextExample1';
import { ContextExample2 } from './ComponentV2/DynamicContext/ContextExample2';
import {PlayerProvider} from './ComponentV2/ContextProviderHOC/PlayerProvider';
import { Consumer } from './ComponentV2/ContextProviderHOC/Consumer';
import { Consumer2 } from './ComponentV2/ContextProviderHOC/Consumer2';
export const Player = createContext();
export const AppV3 = () => {
   const [playerValue, setPlayerValue] = useState({name: 'Dhoni', game: 'Cricket'})
  return (
    <>
    <h1>AppV3</h1>
    {/* <Player.Provider value={{playerValue, setPlayerValue}}>
        <ContextExample1/>
        <ContextExample2/>
    </Player.Provider>
    <br/><br/>
    <ContextExample1/>
    <button onClick={() => setPlayerValue({name: 'Kohli', game: 'cricket'})}>update player</button> */}

    <PlayerProvider myvalue={{name: 'Bumrah'}} defaultValue={{name: 'KL Rahul'}}>
      <Consumer/>
    </PlayerProvider>

    {/* <Player.Provider value={{name: 'Bumrah'}}>
      <Consumer/>
    </Player.Provider> */}

    <br/>

    <PlayerProvider myvalue={{name: 'kohli', game: 'Cricket'}}>
      <Consumer2/>
    </PlayerProvider>


    {/* <Player.Provider value={{name: 'kohli', game: 'Cricket'}}>
    <Consumer2/>
    </Player.Provider> */}
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