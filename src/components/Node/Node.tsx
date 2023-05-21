import React, { FC, KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react'
import { Element, Input, NodeList, NodeBox, BoxBtn } from './Node.styled'
import { NodeButton } from '../NodeButton'
import { RenameButton } from '../RenameButton'
import { renameNodeSelect, setFocusSelect, useTreeStore } from '../../store/tree'

export type NodeProps = {
  id: string
  name: string
  next: NodeProps[]
  prevLayer?: number
}

export const Node: FC<NodeProps> = ({ id, name, next, prevLayer = 0 }) => {
  const [isDisabled, setIsDisabled] = useState(true)
  const setFocused = useTreeStore(setFocusSelect)
  const renameNode = useTreeStore(renameNodeSelect)
  const inputRef = useRef<HTMLInputElement>(null)
  const layer = prevLayer % 4

  useEffect(() => {
    if (isDisabled) return
    if (inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [id, isDisabled, renameNode])

  const saveNewName = useCallback(() => {
    const value = inputRef.current?.value || ''
    renameNode(id, value)
    setIsDisabled(true)
    setFocused(false)
  }, [id, renameNode, setFocused])

  const cancelRename = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = name
    }
    setIsDisabled(true)
  }, [name])

  const handleKeyPress = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        saveNewName()
      }
      if (e.key === 'Escape') {
        cancelRename()
      }
    },
    [saveNewName, cancelRename]
  )

  return (
    <Element>
      <NodeBox count={next.length} layer={layer} name={name}>
        <Input
          type="text"
          onKeyPress={handleKeyPress}
          defaultValue={name}
          size={name.length || 1}
          disabled={isDisabled}
          ref={inputRef}
        />
        <BoxBtn>
          {isDisabled ? (
            <NodeButton id={id} setDisabled={setIsDisabled} />
          ) : (
            <RenameButton cancel={cancelRename} save={saveNewName} />
          )}
        </BoxBtn>
      </NodeBox>
      {!!next.length && (
        <NodeList>
          {next.map((el) => (
            <Node key={el.id} {...el} prevLayer={prevLayer + 1} />
          ))}
        </NodeList>
      )}
    </Element>
  )
}
