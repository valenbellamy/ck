import React from "react"

function AnimWrapper({ transitionStatus, exit }) {
  return (
    <>
      <div className={`anim-wrapper bg-primary ${transitionStatus}`}></div>
      <div
        className={`anim-wrapper --second bg-dark ${transitionStatus}`}
      ></div>
      <div
        className={`anim-wrapper --third ${transitionStatus}`}
        style={{ backgroundColor: exit.state.color }}
      ></div>
    </>
  )
}

export default AnimWrapper
