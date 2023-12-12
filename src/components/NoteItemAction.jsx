import React from 'react'
import DeleteButton from './DeleteButton'
import ArchiveButton from './ArchiveButton'

const NoteItemAction = () => {
  return (
    <div className="note-item__action">
        <DeleteButton />
        <ArchiveButton />
    </div>
  )
}

export default NoteItemAction