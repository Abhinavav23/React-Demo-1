import React from 'react'

export const Player = (props) => {
  return (
    <>
        <div>Player details</div>
        <div>Name: {props.name}</div>
        <div>plays game: {props.game}</div>
    </>
  )
}
