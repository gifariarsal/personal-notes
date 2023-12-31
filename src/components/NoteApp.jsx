import React from "react";
import { getInitialData } from "../utils/index";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      filteredNotes: [],
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.searchNotes = this.searchNotes.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => ({
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
    }));
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({
      notes,
      filteredNotes: this.state.filteredNotes.filter((note) => note.id !== id),
    });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    this.setState({
      notes,
      filteredNotes: this.state.filteredNotes.map((note) => {
        if (note.id === id) {
          return { ...note, archived: !note.archived };
        }
        return note;
      }),
    });
  }

  searchNotes(searchTerm) {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    this.setState({ filteredNotes });
  }

  render() {
    return (
      <>
        <NoteHeader onSearch={this.searchNotes} />
        <NoteBody
          onAddNote={this.onAddNoteHandler}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          notes={
            this.state.filteredNotes.length > 0
              ? this.state.filteredNotes
              : this.state.notes
          }
        />
      </>
    );
  }
}

export default NoteApp;
