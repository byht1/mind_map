import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { BsCheckLg } from 'react-icons/bs'

import { ZoomButton } from '../button'
import { Select, SelectWrapper, Text } from './Zoom.styled'

const enumZoom = [25, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150]

type PropsZoom = {
  setZoom: Dispatch<SetStateAction<number>>
  alignCenter: () => void
}

export const Zoom: FC<PropsZoom> = ({ setZoom, alignCenter }) => {
  const [currentZoom, setCurrentZoom] = useState(8)
  const [show, setShow] = useState(false)

  const handleZoomIn = () => {
    setZoom(enumZoom[currentZoom + 1] / 100)
    setCurrentZoom((prev) => prev + 1)
  }

  const handleZoomOut = () => {
    setZoom(enumZoom[currentZoom - 1] / 100)
    setCurrentZoom((prev) => prev - 1)
  }

  const handleClick = (id: number) => {
    setZoom(enumZoom[id] / 100)
    setCurrentZoom(id)
    setShow(false)
  }

  return (
    <>
      <ZoomButton icon="plane" fn={alignCenter} isDisabled={false} />
      <ZoomButton icon="minus" fn={handleZoomOut} isDisabled={currentZoom === 0} />
      <SelectWrapper onClick={() => setShow((prev) => !prev)}>
        <span>{enumZoom[currentZoom] + '%'}</span>
        {show && (
          <Select>
            {enumZoom.map((value, i) => (
              <Text key={value} onClick={() => handleClick(i)}>
                {value + '%'}
                {currentZoom === i && <BsCheckLg />}
              </Text>
            ))}
          </Select>
        )}
      </SelectWrapper>
      <ZoomButton icon="plus" fn={handleZoomIn} isDisabled={currentZoom === enumZoom.length - 1} />
    </>
  )
}
