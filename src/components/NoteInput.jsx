import React from "react";
import NoteInputTitle from "./NoteInputTitle";
import NoteInputBody from "./NoteInputBody";

class NoteInput extends React.Component {
  render() {
    return (
      <div className="note-input">
        <NoteInputTitle />
        <NoteInputBody />
      </div>
    );
  }
}

export default NoteInput;
