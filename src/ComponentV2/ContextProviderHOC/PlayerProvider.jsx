import React, { createContext } from 'react'

let Player;
 const PlayerProvider = ({children, myvalue, defaultValue}) => {
  Player = createContext(defaultValue);
  return (
    <Player.Provider value={myvalue}>
      {children}
    </Player.Provider>
  )
}

export {PlayerProvider, Player}


// function PlayerProvider(children, myvalue){
// // gbdfbdfb
// }

// PlayerProvider()