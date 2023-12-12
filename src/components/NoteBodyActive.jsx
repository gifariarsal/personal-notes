import React from 'react'
import NoteList from './NoteList'

const NoteBodyActive = ({ notes }) => {
    const activeNote = notes.filter((note) => note.archived === false);
  return (
    <section>
      <h2>Catatan Aktif</h2>
      {activeNote.length > 0 ? (
        <NoteList notes={activeNote} />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </section>
  );
}

export default NoteBodyActive