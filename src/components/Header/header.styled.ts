import styled from 'styled-components'

export const BoxHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  padding: 10px 15px;
  background-color: teal;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-size: 32px;
`

export const OptionsBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
`
