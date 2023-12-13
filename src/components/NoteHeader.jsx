import React from "react";

class NoteHeader extends React.Component {
  constructor(props) {
    super(props);
    this.searchInputRef = React.createRef();
  }

  handleSearch = () => {
    const searchTerm = this.searchInputRef.current.value;
    this.props.onSearch(searchTerm);
  };

  handleChange = () => {
    const searchTerm = this.searchInputRef.current.value;
    this.props.onSearch(searchTerm);
  };

  render() {
    return (
      <header className="note-app__header">
        <h1>Thothes</h1>
        <div className="note-search">
          <input
            ref={this.searchInputRef}
            placeholder="Cari catatan ..."
            onChange={this.handleChange}
          />
        </div>
      </header>
    );
  }
}

export default NoteHeader;
