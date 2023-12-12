import React from "react";
import NoteList from "./NoteList";

const NoteBodyActive = ({ notes, onDelete, onArchive }) => {
  // Filter catatan yang memiliki nilai archive = false
  const activeNotes = notes.filter((note) => !note.archived);

  return (
    <section>
      <h2>Catatan Aktif</h2>
      {activeNotes.length > 0 ? (
        <NoteList
          notes={activeNotes}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </section>
  );
};

export default NoteBodyActive;
