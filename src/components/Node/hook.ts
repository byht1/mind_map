import {
  Dispatch,
  KeyboardEvent,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { renameNodeSelect, setFocusSelect, useTreeStore } from '../../store/tree'
import { NodeProps } from './Node'

type TUseTreeNodeOperations = (
  id: string,
  name: string,
  next: NodeProps[],
  prevLayer: number
) => {
  cancelRename: () => void
  saveNewName: () => void
  handleKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
  setIsDisabled: Dispatch<SetStateAction<boolean>>
  layer: number
  isDisabled: boolean
  inputRef: RefObject<HTMLInputElement>
  nameLength: number
  childrenLength: number
}

export const useTreeNodeOperations: TUseTreeNodeOperations = (id, name, next, prevLayer) => {
  const [isDisabled, setIsDisabled] = useState(true)
  const setFocused = useTreeStore(setFocusSelect)
  const renameNode = useTreeStore(renameNodeSelect)
  const inputRef = useRef<HTMLInputElement>(null)
  const layer = prevLayer % 4
  const nameLength = name.length || 1
  const childrenLength = next.length

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
    },
    [saveNewName]
  )

  return {
    cancelRename,
    saveNewName,
    handleKeyPress,
    setIsDisabled,
    layer,
    inputRef,
    isDisabled,
    nameLength,
    childrenLength,
  }
}
