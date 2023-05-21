import { FC } from 'react'
import { Button } from '../button'

type PropsRenameButton = {
  cancel: () => void
  save: () => void
}

export const RenameButton: FC<PropsRenameButton> = ({ cancel, save }) => {
  return (
    <>
      <Button icon="checkbox" fn={() => save()} />
      <Button icon="close" fn={() => cancel()} />
    </>
  )
}
