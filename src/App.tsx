import React, { MouseEvent, useRef, useState } from 'react'
import { Tree } from './components/Tree/Tree'
import { isFocusedSelect, treeSelect, useTreeStore } from './store/tree'
import { Header } from './components/Header'
import { Zoom } from './components/Zoom'
import { MouseBox } from './App.styled'

const defaultPosition = { x: 0, y: 0 }

function App() {
  const [zoom, setZoom] = useState(1)
  const treeData = useTreeStore(treeSelect)
  const isFocused = useTreeStore(isFocusedSelect)
  const [position, setPosition] = useState(defaultPosition)
  const [dragging, setDragging] = useState(false)
  const dragRef = useRef({ x: 0, y: 0 })

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (isFocused) return
    setDragging(true)
    dragRef.current.x = event.nativeEvent.clientX - position.x
    dragRef.current.y = event.nativeEvent.clientY - position.y
  }

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (isFocused) return
    if (dragging) {
      const newX = event.nativeEvent.clientX - dragRef.current.x
      const newY = event.nativeEvent.clientY - dragRef.current.y
      setPosition({ x: newX, y: newY })
    }
  }

  const handleMouseUp = () => {
    if (isFocused) return
    setDragging(false)
  }

  return (
    <div>
      <Header>
        <Zoom setZoom={setZoom} alignCenter={() => setPosition(defaultPosition)} />
      </Header>
      <div
        style={{
          position: 'relative',
          left: '-250vw',
          transform: 'translate(50vw, 0)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '500vw',
          height: 'calc(100vh - 65px)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '65px',
            transform: `scale(${zoom})`,
            position: 'relative',
            cursor: dragging ? 'pointer' : 'move',
            minWidth: '100wv',
            height: '100%',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <MouseBox x={position.x} y={position.y}>
            <Tree tree={treeData} />
          </MouseBox>
        </div>
      </div>
    </div>
  )
}

export default App
