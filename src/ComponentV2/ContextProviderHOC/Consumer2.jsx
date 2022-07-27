import React, { useContext } from 'react'
import { Player } from './PlayerProvider'

export const Consumer2 = () => {
    const player = useContext(Player)
  return (
    <>
    <div>Consumer2</div>
    <div>Player: {player.name}</div>
    </>
  )
}
