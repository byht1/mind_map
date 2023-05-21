import React, { FC } from 'react'
import { ZoomBtn } from './Button.styled'
import { SlPaperPlane } from 'react-icons/sl'
import { HiOutlinePlusSmall } from 'react-icons/hi2'
import { AiOutlineMinus } from 'react-icons/ai'

type PropsZoomButton = {
  icon: 'plus' | 'minus' | 'plane'
  fn: () => void
  isDisabled: boolean
}

export const ZoomButton: FC<PropsZoomButton> = ({ fn, icon, isDisabled }) => {
  const generateIcon = () => {
    switch (icon) {
      case 'minus':
        return <AiOutlineMinus size={32} color="#000000" />
      case 'plus':
        return <HiOutlinePlusSmall size={32} color="#000000" />
      case 'plane':
        return <SlPaperPlane size={24} color="#000000" />
      default:
        return null
    }
  }

  return (
    <ZoomBtn type="button" onClick={() => fn()} disabled={isDisabled}>
      {generateIcon()}
    </ZoomBtn>
  )
}
