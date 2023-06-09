import { Dispatch, FC, SetStateAction } from 'react'
import { Button } from '../button'
import { addNodeSelect, deleteNodeSelect, setFocusSelect, useTreeStore } from '../../store/tree'

type PropsNodeButton = {
  id: string
  setDisabled: Dispatch<SetStateAction<boolean>>
  isFirst: boolean
}

export const NodeButton: FC<PropsNodeButton> = ({ id, isFirst, setDisabled }) => {
  const addNode = useTreeStore(addNodeSelect)
  const deleteNode = useTreeStore(deleteNodeSelect)
  const setFocused = useTreeStore(setFocusSelect)

  const initiateRename = () => {
    setFocused(true)
    setDisabled(false)
  }
  return (
    <>
      <Button icon="write" fn={() => initiateRename()} />
      {!isFirst && <Button icon="close" fn={() => deleteNode(id)} />}
      <Button icon="add" fn={() => addNode(id)} />
    </>
  )
}
