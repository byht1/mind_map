import styled from 'styled-components'

export const Btn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;

  opacity: 1;
  transition: opacity 250ms linear;

  &:hover {
    opacity: 0.6;
  }
`

export const ZoomBtn = styled(Btn)`
  padding: 5px;
`
