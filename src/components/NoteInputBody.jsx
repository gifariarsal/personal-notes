import React from "react";

const NoteInputBody = ({ title, body, onTitleChange, onBodyChange, onAddNote }) => {
  return (
    <form className="note-input__body" onSubmit={onAddNote}>
      <input placeholder="Tuliskan judul ..." value={title} onChange={onTitleChange} />
      <textarea placeholder="Tuliskan isi catatan ..." value={body} onChange={onBodyChange} rows={8} />
      <button type="submit">Buat</button>
    </form>
  );
};

export default NoteInputBody;
