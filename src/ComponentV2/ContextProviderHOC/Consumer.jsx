import React, { useContext } from 'react'
import { ConsumerLevel1 } from './ConsumerLevel1'
import {Player} from './PlayerProvider'

export const Consumer = () => {
    const player = useContext(Player)
  return (
    <>
    <div>Consumer</div>
    <div>Player: {player.name}</div>
    <ConsumerLevel1/>
    </>
  )
}
