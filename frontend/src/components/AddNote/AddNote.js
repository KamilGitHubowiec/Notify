import React, { useState } from "react";
import styles from "./AddNote.module.scss";
import { useDispatch } from "react-redux";
import { createNoteAction } from "../../redux/actions/noteActions";

const AddNote = () => {
  const [note, setNote] = useState({title: "", content: ""});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setNote({...note, [key]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNoteAction(note));
    setNote({title: "", content: ""});
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.add_note_form} >
      <div>
        <label for="note-title">Title</label>
        <input onChange={(e) => handleChange(e)} type="text" name="title" id="note-title" value={note.title} />
      </div>
      <div>
        <label for="note-content">Content</label>
        <input onChange={(e) => handleChange(e)} type="textarea" name="content" id="note-content" value={note.content} />
      </div>
      <button type="submit">Add note</button>
    </form>
  )
}

export default AddNote;
