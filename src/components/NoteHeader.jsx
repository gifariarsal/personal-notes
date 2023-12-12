import React from "react";

const NoteHeader = () => {
  return (
    <header className="note-app__header">
      <h1>Thothes</h1>
      <div className="note-search">
        <input placeholder="Cari catatan ..." />
      </div>
    </header>
  );
};

export default NoteHeader;
