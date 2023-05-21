import styled from 'styled-components'

const NullButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`

export const Btn = styled(NullButton)`
  opacity: 1;
  transition: opacity 250ms linear;

  &:hover {
    opacity: 0.6;
  }
`

export const ZoomBtn = styled(NullButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: transparent;
  border-radius: 50%;

  transition: background-color 250ms linear;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
`
