import { Dispatch, MouseEvent, SetStateAction, useRef, useState } from 'react'
import { TNode, isFocusedSelect, treeSelect, useTreeStore } from '../../store/tree'
import { TDefaultPosition } from '../../App'

type TUsePositionAndGetData = (
  position: TDefaultPosition,
  setPosition: Dispatch<SetStateAction<TDefaultPosition>>
) => {
  treeData: TNode
  handleMouseDown: (event: MouseEvent<HTMLDivElement>) => void
  handleMouseMove: (event: MouseEvent<HTMLDivElement>) => void
  handleMouseUp: () => void
}

export const usePositionAndGetData: TUsePositionAndGetData = (position, setPosition) => {
  const treeData = useTreeStore(treeSelect)
  const isFocused = useTreeStore(isFocusedSelect)
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

  return { treeData, handleMouseDown, handleMouseMove, handleMouseUp }
}
