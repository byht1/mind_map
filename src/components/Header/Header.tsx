import React, { FC, ReactNode } from 'react'
import { Box, BoxHeader, OptionsBox, Title } from './header.styled'

type PropsHeader = {
  children: ReactNode
}

export const Header: FC<PropsHeader> = ({ children }) => {
  return (
    <BoxHeader>
      <Box>
        <Title>Services</Title>
        <OptionsBox>{children}</OptionsBox>
      </Box>
    </BoxHeader>
  )
}
