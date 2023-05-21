import styled from 'styled-components'
import { RootList } from '../Tree/Tree.styled'

export const NodeList = styled(RootList)`
  display: inline-flex;
  margin: 2em 0;
  gap: 70px;
`

type Props = {
  count: number
  layer: number
  name: string
}

const colorBg = ['#e9addf', '#caa9e9', '#afc1e2', '#b2dddf']

export const NodeBox = styled.div<Props>`
  position: relative;
  display: flex;

  width: auto;
  display: inline-block;
  padding: 0.5em 1em;
  position: relative;

  ${(p) => {
    return p.name === 'New node'
      ? `border: 2px dashed red;`
      : `background-color: ${colorBg[p.layer]};`
  }};

  ${RootList}:not(:first-child) &::before {
    border-left: 0.0625em solid #000;
    content: '';
    display: block;
    height: 1em;
    top: -1.03125em;
    left: calc(50% - 0.03125em);
    position: absolute;
    width: 0.0625em;
  }

  ${(p) =>
    p.count &&
    ` &::after {
    top: calc(100% + 0.03125em);
    border-left: 0.0625em solid #000;
    content: "";
    display: block;
    height: 1em;
    left: calc(50% - 0.03125em);
    position: absolute;
    width: 0.0625em;
  }`}
`

export const Input = styled.input<any>`
  display: inline-flex;
  width: 100%;
  flex-grow: 1;

  text-align: center;

  background-color: transparent;
  outline: none;
  border: none;
`

export const Element = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 1em;
  position: relative;
`
export const BoxBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  padding: 5px;
  display: flex;
  gap: 5px;
`
