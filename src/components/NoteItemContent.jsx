import React from 'react'
import { showFormattedDate } from '../utils';

const NoteItemContent = ({ title, body, createdAt }) => {
  return (
    <div className="note-item__content">
      <div className="note-item__title">{title}</div>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <div className="note-item__body">{body}</div>
    </div>
  );
}

export default NoteItemContent