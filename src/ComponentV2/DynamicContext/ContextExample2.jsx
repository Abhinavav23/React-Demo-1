import React, { useContext } from 'react'
import { Player } from '../../AppV3'

export const ContextExample2 = () => {
    const player = useContext(Player)
  return (
    <>
    <h3>ContextExample2</h3>
    <div>Player: {player.playerValue.name}</div>
    <div>Game: {player.playerValue.game}</div>
    <button onClick={() => player.setPlayerValue({name: 'rohit Sharma', game: 'cricket'})}>update from comp2</button>
    </>
  )
}
