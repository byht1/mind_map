import { useState } from 'react'
import { Header } from './components/Header'
import { Zoom } from './components/Zoom'
import { Main } from './components/Main'

export type TDefaultPosition = {
  x: number
  y: number
}

const defaultPosition: TDefaultPosition = { x: 0, y: 0 }

function App() {
  const [zoom, setZoom] = useState(1)
  const [position, setPosition] = useState(defaultPosition)

  return (
    <div>
      <Header>
        <Zoom setZoom={setZoom} alignCenter={() => setPosition(defaultPosition)} />
      </Header>
      <Main position={position} setPosition={setPosition} zoom={zoom} />
    </div>
  )
}

export default App
