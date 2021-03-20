import asyncHandler from "express-async-handler";
import Note from "../models/noteModel.js";

// Fetch all notes
// GET /notes
const getNotes = asyncHandler(async (request, response) => {
  const notes = await Note.find({});
  response.json(notes);
})

// Fetch single note
// GET /notes/:id
const getNoteById = asyncHandler(async (request, response) => {
  const note = await Note.findById(request.params.id);

  if (note) {
    response.json(note);
  } else {
    response.status(404);
    throw new Error("Note not found");
  }
})

// Fetch history of changes for particular note
// GET /notes/history/:id
const getNoteHistory = asyncHandler(async (request, response) => {
  const note = await Note.findById(request.params.id);

  if (note) {
    response.json(note.history);
  } else {
    response.status(404);
    throw new Error("Note not found");
  }
})

// Add new note
// POST /notes
const addNote = asyncHandler(async (request, response) => {
  const { title, content } = request.body;

  if (title.trim() === "" || content.trim() === "") {
    response.status(404);
    throw new Error("Please fill required field");
  } else {
    const note = await Note.create({
      title,
      content
    });
  
    await note.save();
    response.status(201).json(note);
  }
})

// Update note
// PATCH /notes/:id
const updateNote = asyncHandler(async (request, response) => {
  const { title, content, noteToBeArchived } = request.body;
  const note = await Note.findById(request.params.id); 
  
  if (note) {
    note.title = title;
    note.content = content;
    note.updatedAt = new Date();
    note.version = note.version + 1;
    note.history = [...note.history, noteToBeArchived];

    const updatedNote = await note.save();
    response.json(updatedNote);
  } else {
    response.status(404);
    throw new Error("Note not found");
  }
})

// Delete note
// DELETE /notes/:id
const deleteNote = asyncHandler(async (request, response) => {
  const note = await Note.findById(request.params.id);

  if (note) {
    await note.remove();
    response.json({ message: "Note removed" });
  } else {
    response.status(404);
    throw new Error("Note not found");
  }
})

export {
  getNotes,
  getNoteById,
  getNoteHistory,
  addNote,
  updateNote,
  deleteNote
}