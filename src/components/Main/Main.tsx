import React, { Dispatch, FC, SetStateAction } from 'react'
import { MainWrapper, MouseBox, TreeBox } from './Main.styled'
import { TDefaultPosition } from '../../App'
import { Tree } from '../Tree'
import { usePositionAndGetData } from './hook'

type PropsMain = {
  zoom: number
  position: TDefaultPosition
  setPosition: Dispatch<SetStateAction<TDefaultPosition>>
}

export const Main: FC<PropsMain> = ({ position, setPosition, zoom }) => {
  const { handleMouseDown, handleMouseMove, handleMouseUp, treeData } = usePositionAndGetData(
    position,
    setPosition
  )

  return (
    <MainWrapper>
      <TreeBox
        zoom={zoom}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <MouseBox x={position.x} y={position.y}>
          <Tree tree={treeData} />
        </MouseBox>
      </TreeBox>
    </MainWrapper>
  )
}
