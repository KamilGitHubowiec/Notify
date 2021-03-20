import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./Table.module.scss";
import { Icons } from "../../helpers/icons";
import { formatDateToDayMonthYearTime, shortenDisplayedText } from "../../helpers/formatters";
import { getNotesAction, deleteNoteAction, sortNotesAction } from "../../redux/actions/noteActions";

const Table = () => {
  const notes = useSelector((state) => state.notes);
  const [sortOptions, setSortOptions] = useState({ type: "createdAt", direction: "asc" });
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotesAction());
  }, [dispatch])
  
  useEffect(() => {
    dispatch(sortNotesAction(sortOptions));
  }, [sortOptions])

  const sortTable = (e) => {
    if (sortOptions.type !== e.target.id) setSortOptions({ type: e.target.id, direction: "asc" });
    setSortOptions({ type: e.target.id, direction: sortOptions.direction === "asc" ? "desc" : "asc" });
  }

  const deleteNote = (noteId) => {
    dispatch(deleteNoteAction(noteId));
  }

  const openPopupModal = (noteId) => {
    history.push(`/notes/${noteId}`)
  }

  const renderTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th onClick={(e) => sortTable(e)} id="title">Title</th>
            <th onClick={(e) => sortTable(e)} id="content">Content</th>
            <th onClick={(e) => sortTable(e)} id="createdAt">Created</th>
            <th onClick={(e) => sortTable(e)} id="updatedAt">Modified</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {notes.map(note => (
            <tr key={note._id}>
              <th onClick={() => openPopupModal(note._id)} className={styles.note_title}>{note.title}</th>
              <th>{shortenDisplayedText(note.content, 10)}</th>
              <th>{formatDateToDayMonthYearTime(note.createdAt)}</th>
              <th>{formatDateToDayMonthYearTime(note.updatedAt)}</th>
              <th onClick={() => deleteNote(note._id)} className={styles.button_delete}>{Icons.iconTrash}</th>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  return (
    <div className={styles.table_container}>
      {renderTable()}
    </div>
  )
}

export default Table;
