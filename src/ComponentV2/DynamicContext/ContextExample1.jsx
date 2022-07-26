import React, { useContext } from 'react'
import { Player } from '../../AppV3'

export const ContextExample1 = () => {
    const player = useContext(Player)
  return (
    <>
    <h3>ContextExample1</h3>
    <div>Player: {player.playerValue.name}</div>
    <div>Game: {player.playerValue.game}</div>
    <button onClick={() => player.setPlayerValue({name: 'Ronaldo', game: 'football'})}>update from comp1</button>
    </>
  )
}
