import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setCounter] = useState(15)
  //let counter =15
  const addvalue = () => {
    //counter = counter +1
    setCounter(counter+1)
  }
  const removevalue = () => {
    setCounter(counter-1)
  }
  
  

  return (
    <>
      <h1>YASH BHARDWAJ REACT</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addvalue}>Add value{counter}</button>
      <br />
      <button onClick={removevalue}>Remove value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
