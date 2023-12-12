import React from "react";

const NoteInputBody = () => {
  return (
    <div className="note-input__body">
      <input placeholder="Tuliskan judul ..." />
      <textarea placeholder="Tuliskan isi catatan ..." rows={8} />
      <button>Buat</button>
    </div>
  );
};

export default NoteInputBody;
