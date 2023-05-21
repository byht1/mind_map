import React, { Dispatch, FC, SetStateAction } from 'react'
import { BsCheckLg } from 'react-icons/bs'

import { ZoomButton } from '../button'
import { Select, SelectWrapper, Text } from './Zoom.styled'
import { useZoom } from './hook'

type PropsZoom = {
  setZoom: Dispatch<SetStateAction<number>>
  alignCenter: () => void
}

export const Zoom: FC<PropsZoom> = ({ setZoom, alignCenter }) => {
  const { enumZoom, currentZoom, handleClick, handleZoomIn, handleZoomOut, show, setShow } =
    useZoom(setZoom)

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
