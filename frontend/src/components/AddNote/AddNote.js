import React, { useState } from "react";
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
    <form onSubmit={(e) => handleSubmit(e)}>
      <input onChange={(e) => handleChange(e)} type="text" name="title" value={note.title} />
      <input onChange={(e) => handleChange(e)} type="textarea" name="content" value={note.content} />
      <button type="submit">Add note</button>
    </form>
  )
}

export default AddNote;
