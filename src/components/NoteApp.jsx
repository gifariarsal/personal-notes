import React from "react";
import { getInitialData } from "../utils/index";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    this.setState({ notes });
  }

  render() {
    return (
      <>
        <NoteHeader />
        <NoteBody
          onAddNote={this.onAddNoteHandler}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          notes={this.state.notes}
        />
      </>
    );
  }
}

export default NoteApp;
