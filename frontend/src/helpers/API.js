import axios from "axios";

// NOTES
// Get all notes
const getNotes = async () => {
  const { data } = await axios.get("/notes");
  return data;
}

// Get single note
const getNoteById = async (id) => {
  const { data } = await axios.get(`/notes/${id}`);
  return data;
} 

// Add note
const postNote = async (note) => {
  const { data } = await axios.post("/notes", note); 
  return data;
}

// Update note 
const updateNote = async (id, note) => {
  const { data } = await axios.patch(`/notes/${id}`, note);
  return data;
}

// Delete note
const deleteNote = async (id) => {
  const { data } = await axios.delete(`/notes/${id}`);
  return data;
}

// Get a history of changes of single note
const getNoteHistory = async (id) => {
  const { data } = await axios.get(`/notes/history/${id}`);
  return data;
}

// HISTORY
// Get all notes from history
const getNotesFromHistory = async () => {
  const { data } = await axios.get("/history");
  return data;
}

// Add note to history
const postNoteToHistory = async (note) => {
  const { data } = await axios.post("/history", note);
  return data;
}

export {
  getNotes,
  getNoteById,
  postNote,
  updateNote,
  deleteNote,
  getNoteHistory,
  getNotesFromHistory,
  postNoteToHistory
}