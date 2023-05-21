import { Dispatch, SetStateAction, useState } from 'react'

type TUseZoom = (setZoom: Dispatch<SetStateAction<number>>) => {
  show: boolean
  enumZoom: number[]
  currentZoom: number
  handleZoomIn: () => void
  handleZoomOut: () => void
  handleClick: (id: number) => void
  setShow: Dispatch<SetStateAction<boolean>>
}

const enumZoom = [25, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150]

export const useZoom: TUseZoom = (setZoom) => {
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

  return { show, enumZoom, currentZoom, handleZoomIn, handleZoomOut, handleClick, setShow }
}
