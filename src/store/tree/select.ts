import { ITreeNode } from './useTreeStore'

export const treeSelect = (state: ITreeNode) => state.tree
export const isFocusedSelect = (state: ITreeNode) => state.isFocused
export const addNodeSelect = (state: ITreeNode) => state.addNode
export const deleteNodeSelect = (state: ITreeNode) => state.deleteNode
export const renameNodeSelect = (state: ITreeNode) => state.renameNode
export const setFocusSelect = (state: ITreeNode) => state.setFocus
