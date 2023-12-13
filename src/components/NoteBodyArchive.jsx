import React from 'react'
import NoteList from './NoteList'

const NoteBodyArchive = ({ notes, onDelete, onArchive }) => {
    const archivedNotes = notes.filter((note) => note.archived === true);
  return (
    <section>
      <h2>Arsip</h2>
      {archivedNotes.length > 0 ? (
        <NoteList notes={archivedNotes} onDelete={onDelete} onArchive={onArchive} />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </section>
  );
}

export default NoteBodyArchive