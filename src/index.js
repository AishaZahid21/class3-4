import React from "react"
import ReactDom from "react-dom"
import "./index.css"

const Room = () => {
  const [islit,setlit]=React.useState(true)
  const brightness = islit ? "lit" : "dark";
  const [roomTemp,setroomTemp]=React.useState(22)
  return (
    <div className={`room ${brightness}`}>
      This room is {islit ? "lit"  : "dark"} {roomTemp}
      <br />
      <button onClick={() => setlit(!islit)}>Flip</button>
      <br />
      Separate Buttons
      <br/>
      <button onClick={() => setlit(true)}>Turn On</button>
      <button onClick={() => setlit(false)}>Turn Off</button>
      <br/>
      Change Temperature
      <br/>
      <button onClick={() => setroomTemp(1 + roomTemp)}>+</button>
      <button onClick={() => setroomTemp(roomTemp-1)}>-</button>
      
    </div>
  )
}

ReactDom.render(<Room/>, document.querySelector('#root'));