import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Scale } from './components/molecules/scale'
import { Avatar } from './components/atoms/avatar'

function App() {

  const scaleOptions = [
    "trivial", 
    "minor", 
    "normal", 
    "major",
  ];

  const dueDates = [
    "N/A",
    "end of the month",
    "end of sprint",
    "end of week",
    "tomorrow",
    "today",
    "blocks release"
  ]

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <Avatar />
      </div>
      <div>
        <Scale id="impact" options={scaleOptions} labelText='Impact'/>
        <Scale id="effort" options={Array.from(Array(6), (_,x) => x.toString())} labelText='Effort' />
        <Scale id="dueDate" options={dueDates} labelText='Due Date' />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
