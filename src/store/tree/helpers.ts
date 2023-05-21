import { v4 as uuidv4 } from 'uuid'
import { TNode } from './useTreeStore'

export const newNode = (): TNode => ({
  id: uuidv4(),
  name: 'New node',
  next: [],
})

export const searchAddNode = (tree: TNode[], setId: string) => {
  for (const element of tree) {
    const { id, next } = element

    if (id === setId) {
      next.push(newNode())
      break
    } else {
      searchAddNode(next, setId)
    }
  }

  return tree
}

export const searchDeleteNode = (tree: TNode[], deleteId: string) => {
  for (const element of tree) {
    const { next } = element

    const isParent = next.findIndex((node) => node.id === deleteId)

    if (isParent !== -1) {
      element.next = next.filter((_, index) => index !== isParent)
    } else {
      const newNext = searchDeleteNode(next, deleteId)
      element.next = newNext
    }
  }

  return tree
}

export const searchRenameNode = (tree: TNode[], renameId: string, value: string) => {
  for (const element of tree) {
    const { id, next } = element

    if (id === renameId) {
      element.name = value
      break
    } else {
      searchRenameNode(next, renameId, value)
    }
  }

  return tree
}
