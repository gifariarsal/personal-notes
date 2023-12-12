import React from "react";
import { getInitialData } from "../utils/index"
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
  }
  render() {
    return (
      <>
        <NoteHeader />
        <NoteBody notes={this.state.notes} />
      </>
    );
  }
}

export default NoteApp;
