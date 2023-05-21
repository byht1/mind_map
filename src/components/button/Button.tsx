import React, { FC } from 'react'
import { RiCloseCircleFill, RiAddCircleFill, RiCheckboxCircleFill } from 'react-icons/ri'
import { FaPen } from 'react-icons/fa'

//RiCheckboxCircleFill

import { Btn } from './Button.styled'

type PropsButton = {
  icon: 'write' | 'close' | 'add' | 'checkbox'
  fn: () => void
}

const green = '#118f11'

export const Button: FC<PropsButton> = ({ fn, icon }) => {
  const generateIcon = () => {
    switch (icon) {
      case 'write':
        return <FaPen size={16} />
      case 'close':
        return <RiCloseCircleFill size={16} color="#850a0a" />
      case 'add':
        return <RiAddCircleFill size={16} color={green} />
      case 'checkbox':
        return <RiCheckboxCircleFill size={16} color={green} />
      default:
        return null
    }
  }
  return (
    <Btn type="button" onClick={() => fn()}>
      {generateIcon()}
    </Btn>
  )
}
