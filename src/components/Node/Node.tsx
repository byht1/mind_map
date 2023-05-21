import { FC } from 'react'
import { Element, Input, NodeList, NodeBox, BoxBtn } from './Node.styled'
import { NodeButton } from '../NodeButton'
import { RenameButton } from '../RenameButton'
import { useTreeNodeOperations } from './hook'

export type NodeProps = {
  id: string
  name: string
  next: NodeProps[]
  prevLayer?: number
  isFirst?: true
}

export const Node: FC<NodeProps> = ({ id, name, next, prevLayer = 0, isFirst = false }) => {
  const {
    cancelRename,
    handleKeyPress,
    saveNewName,
    layer,
    inputRef,
    isDisabled,
    nameLength,
    childrenLength,
    setIsDisabled,
  } = useTreeNodeOperations(id, name, next, prevLayer)

  return (
    <Element>
      <NodeBox count={childrenLength} layer={layer} name={name}>
        <Input
          type="text"
          onKeyPress={handleKeyPress}
          defaultValue={name}
          size={nameLength}
          disabled={isDisabled}
          ref={inputRef}
        />
        <BoxBtn>
          {isDisabled ? (
            <NodeButton id={id} setDisabled={setIsDisabled} isFirst={isFirst} />
          ) : (
            <RenameButton cancel={cancelRename} save={saveNewName} />
          )}
        </BoxBtn>
      </NodeBox>
      {!!childrenLength && (
        <NodeList>
          {next.map((el) => (
            <Node key={el.id} {...el} prevLayer={prevLayer + 1} />
          ))}
        </NodeList>
      )}
    </Element>
  )
}
