import { FC } from 'react'
import { Node, NodeProps } from '../Node/Node'
import { Box, RootList } from './Tree.styled'

type PropsTree = { tree: NodeProps }

export const Tree: FC<PropsTree> = ({ tree }) => {
  return (
    <Box>
      <RootList>
        <Node {...tree} />
      </RootList>
    </Box>
  )
}
