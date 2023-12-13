import React from "react";
import NoteInputTitle from "./NoteInputTitle";
import NoteInputBody from "./NoteInputBody";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      remainingTitle: 50,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    const newTitle = event.target.value;
    const maxLength = 50;

    const truncatedTitle = newTitle.slice(0, maxLength);
    const remainingTitle = Math.max(maxLength - newTitle.length, 0);

    this.setState(() => ({
      title: truncatedTitle,
      remainingTitle: remainingTitle,
    }));
  }

  onBodyChangeHandler(event) {
    this.setState(() => ({
      body: event.target.value,
    }));
  }

  onAddNoteHandler(event) {
    event.preventDefault();
    this.props.onAddNote({
      title: this.state.title,
      body: this.state.body,
    });

    this.setState(() => ({
      title: "",
      body: "",
      remainingTitle: 50,
    }));
  }

  render() {
    const isTitleMaxLengthReached = this.state.remainingTitle === 0;

    return (
      <div className="note-input">
        <NoteInputTitle remainingTitle={this.state.remainingTitle} />
        <NoteInputBody
          title={this.state.title}
          body={this.state.body}
          onTitleChange={this.onTitleChangeHandler}
          onBodyChange={this.onBodyChangeHandler}
          onAddNote={this.onAddNoteHandler}
          isTitleMaxLengthReached={isTitleMaxLengthReached}
        />
      </div>
    );
  }
}

export default NoteInput;
