import React from "react";

const NoteInputTitle = ({ remainingTitle }) => {
  return (
    <div className="note-input__title">
      <h2>Buat Catatan</h2>
      <p className="note-input__title__char-limit">Sisa karakter: {remainingTitle}</p>
    </div>
  );
};

export default NoteInputTitle;
