import styled from 'styled-components'

type PropsMouseBox = {
  x: number
  y: number
}

export const MouseBox = styled.div<PropsMouseBox>`
  transform: ${({ x, y }) => `translate(${x}px, ${y}px)`};
`
