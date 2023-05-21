import styled from 'styled-components'

export const Box = styled.div`
  position: 'relative';
  display: flex;
  justify-content: center;
`

export const RootList = styled.ul`
  display: inline-flex;

  & li li:only-child::before {
    content: none;
  }

  & li li::before {
    border-top: 0.0625em solid #000;
    content: '';
    display: block;
    height: 0.0625em;
    left: -0.03125em;
    position: absolute;
    top: -1.03125em;
    width: calc(100% + 70px);
  }

  & li li:last-child::before {
    left: auto;
    max-width: calc(50% + 0.0625em + 70px);
    right: calc(50% - 0.03125em);
  }
  & li li:first-child::before {
    left: 50%;
    max-width: calc(50% + 70px);
  }
`
