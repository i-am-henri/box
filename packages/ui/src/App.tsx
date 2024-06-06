import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './button.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button>hey</Button>
    </>
  )
}

export default App
