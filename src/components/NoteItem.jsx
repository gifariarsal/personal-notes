import React from "react";
import { showFormattedDate } from "../utils";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

const NoteItem = ({ title, body, createdAt, archived }) => {
  return (
    <div className="note-item">
      <NoteItemContent title={title} body={body} createdAt={createdAt} />
      <NoteItemAction />
    </div>
  );
};

export default NoteItem;
