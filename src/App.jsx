import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './Components/Countries/Countries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mx-auto'>
        <h1 className="text-3xl font-bold underline text-center mb-10">
          Welcome to the bank of world data.
        </h1>

        <Countries />

      </div>
    </>
  )
}

export default App
