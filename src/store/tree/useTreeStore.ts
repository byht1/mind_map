import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { newNode, searchAddNode, searchDeleteNode, searchRenameNode } from './helpers'

export type TNode = {
  id: string
  name: string
  next: TNode[]
}

export interface ITreeNode {
  tree: TNode
  isFocused: boolean
  addNode: (id: string) => void
  deleteNode: (id: string) => void
  renameNode: (id: string, newName: string) => void
  setFocus: (...args: [boolean]) => void
}

export const useTreeStore = create<ITreeNode>()(
  devtools((set) => ({
    tree: newNode(),
    isFocused: false,

    addNode: (setId: string) =>
      set(({ tree }) => {
        const { id, next } = tree
        if (id === setId) {
          next.push(newNode())
        } else {
          const newNext = searchAddNode(next, setId)
          tree.next = newNext
        }

        return { tree: { ...tree } }
      }),

    deleteNode: (deleteId) =>
      set(({ tree }) => {
        const { next } = tree

        const isParent = next.findIndex((node) => node.id === deleteId)

        if (isParent !== -1) {
          tree.next = next.filter((_, index) => index !== isParent)
        } else {
          const newNext = searchDeleteNode(next, deleteId)
          tree.next = newNext
        }

        return { tree: { ...tree } }
      }),

    renameNode: (renameId: string, newName: string) =>
      set(({ tree }) => {
        console.log('renameNode')
        const { id, next } = tree

        if (id === renameId) {
          tree.name = newName
        } else {
          const newNext = searchRenameNode(next, renameId, newName)
          tree.next = newNext
        }

        return { tree: { ...tree } }
      }),

    setFocus: (value) => set(() => ({ isFocused: value })),
  }))
)
