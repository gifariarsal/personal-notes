import React from 'react'
import NoteList from './NoteList'

const NoteBodyArchive = ({ notes }) => {
    const archivedNotes = notes.filter((note) => note.archived === true);
  return (
    <section>
      <h2>Arsip</h2>
      {archivedNotes.length > 0 ? (
        <NoteList notes={archivedNotes} />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </section>
  );
}

export default NoteBodyArchive