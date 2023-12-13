import React from "react";
import NoteInputTitle from "./NoteInputTitle";
import NoteInputBody from "./NoteInputBody";

const NoteInput = ({ onAddNote }) => {
  return (
    <div className="note-input">
      <NoteInputTitle />
      <NoteInputBody onAddNote={onAddNote} />
    </div>
  );
};

export default NoteInput;
