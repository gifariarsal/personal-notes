import React from "react";

class NoteInputBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onAddNoteHandler(event) {
    event.preventDefault();
    this.props.onAddNote(this.state)
  }
  render() {
    return (
      <form className="note-input__body" onSubmit={this.onAddNoteHandler}>
        <input
          placeholder="Tuliskan judul ..."
          value={this.state.title}
          onChange={this.onTitleChangeHandler}
        />
        <textarea
          placeholder="Tuliskan isi catatan ..."
          rows={8}
          value={this.state.body}
          onChange={this.onBodyChangeHandler}
        />
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default NoteInputBody;
