import React from "react";
import NoteInput from "./NoteInput";
import NoteBodyActive from "./NoteBodyActive";
import NoteBodyArchive from "./NoteBodyArchive";

const NoteBody = ({ notes }) => {
  return (
    <main className="note-app__body">
      <NoteInput />
      <NoteBodyActive notes={notes} />
      <NoteBodyArchive notes={notes} />
    </main>
  );
};

export default NoteBody;
