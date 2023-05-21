import styled from 'styled-components'

export const MainWrapper = styled.div`
  position: relative;
  left: -250vw;
  transform: translate(50vw, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500vw;
  height: calc(100vh - 65px);
`

type PropsTreeBox = {
  zoom: number
}

export const TreeBox = styled.div<PropsTreeBox>`
  min-width: 100vw;
  height: 100%;
  padding-top: 65px;

  position: relative;
  transform: scale(${(p) => p.zoom});

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: move;
`

type PropsMouseBox = {
  x: number
  y: number
}

export const MouseBox = styled.div<PropsMouseBox>`
  transform: ${({ x, y }) => `translate(${x}px, ${y}px)`};
`
