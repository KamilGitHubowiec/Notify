import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./ModalPopup.module.scss";
import { formatDateToDayMonthYearTime } from "../../helpers/formatters";
import { getNoteById } from "../../helpers/API";
import { updateNoteAction, getNoteHistoryAction } from "../../redux/actions/noteActions";

const ModalPopup = ({ match }) => {
  const [note, setNote] = useState({});
  const noteChangesHistory = useSelector((state) => state.note);
  const [previousNote, setPreviousNote] = useState({});
  const [editingIsDisabled, setEditingIsDisabled] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchNoteByIdAndSaveIt();
  }, [])
  
  useEffect(() => {
    dispatch(updateNoteAction(match.params.id, note));
    fetchNoteByIdAndSaveIt();
  }, [submitted])

  const fetchNoteByIdAndSaveIt = async () => {
    const data = await getNoteById(match.params.id);
    setPreviousNote(data);
    setNote(data);
  }

  const closeModalPopup = () => {
    history.push("/notes");
  }

  const handleEditState = () => {
    setEditingIsDisabled(!editingIsDisabled);
  }

  const getHistoryOfChanges = (id) => {
    dispatch(getNoteHistoryAction(id))
  }

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setNote({...note, [key]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.title === previousNote.title && note.content === previousNote.content) return;
    setNote({...note, noteToBeArchived: previousNote});
    setEditingIsDisabled(true);
    setSubmitted(!submitted);
  }

  const renderPopupContent = () => {
    return (
      <div className={styles.popup_content}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input onChange={(e) => handleChange(e)} type="text" value={note.title} name="title" disabled={editingIsDisabled}/>
          <input onChange={(e) => handleChange(e)} type="textarea" value={note.content} name="content" disabled={editingIsDisabled}/>
          <span>{note.createdAt && formatDateToDayMonthYearTime(note.createdAt)}</span>
          <span>{note.updatedAt && formatDateToDayMonthYearTime(note.updatedAt)}</span>
          <button type="submit">Save Changes</button>
          <button onClick={() => getHistoryOfChanges(note._id)}>Get history of changes</button>
        </form>
        <button onClick={() => handleEditState()}>Edit</button>
      </div>
    )
  }

  return (
    <div className={styles.popup_container}>
      <div onClick={() => closeModalPopup()} className={styles.backdrop}></div>
      {renderPopupContent()}
    </div>
  )
}

export default ModalPopup;