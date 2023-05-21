import styled from 'styled-components'

export const SelectWrapper = styled.div`
  min-width: 100px;
  position: relative;
  padding: 5px 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;

  cursor: pointer;
`

export const Select = styled.div`
  width: 100%;
  /* padding: 10px 15px; */
  position: absolute;
  top: calc(100% + 17px);
  left: 0;

  display: flex;
  flex-direction: column;

  text-align: center;
`

export const Text = styled.span`
  padding: 5px 0;
  background-color: #ffffff;

  transition: background-color 250ms linear;

  &:hover {
    background-color: #c2bfbf;
  }
`
