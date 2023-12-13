import React from "react";
import NoteInput from "./NoteInput";
import NoteBodyActive from "./NoteBodyActive";
import NoteBodyArchive from "./NoteBodyArchive";

const NoteBody = ({ notes, onAddNote, onDelete, onArchive }) => {
  return (
    <main className="note-app__body">
      <NoteInput onAddNote={onAddNote} />
      <NoteBodyActive notes={notes} onDelete={onDelete} onArchive={onArchive} />
      <NoteBodyArchive notes={notes} onDelete={onDelete} onArchive={onArchive} />
    </main>
  );
};

export default NoteBody;
