import asyncHandler from "express-async-handler";
import History from "../models/historyModel.js";

// Fetch all archieved notes from history
// GET /history
const getNotesFromHistory = asyncHandler(async (request, response) => {
  const history = await History.find({});
  response.json(history);
})

// Add note to history
// POST /history
const addNoteToHistory = asyncHandler(async (request, response) => {
  const note = request.body;
  const noteHistory = await History.create(note);

  if(noteHistory) {
    response.status(201).json(noteHistory);
  } else {
    response.status(400);
    throw new Error("Invalid history note data");
  } 
})

export {
  getNotesFromHistory,
  addNoteToHistory
}