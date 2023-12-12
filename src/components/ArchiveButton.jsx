import React from "react";

const ArchiveButton = ({ id, archived, onArchive }) => {
  return <button className="note-item__archive-button" onClick={() => onArchive(id)}>
    {archived ? "Aktif" : "Arsip"}
  </button>;
};

export default ArchiveButton;
