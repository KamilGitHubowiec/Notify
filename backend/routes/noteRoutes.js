import express from "express";
import { 
  getNotes, 
  getNoteById, 
  getNoteHistory, 
  addNote, 
  updateNote, 
  deleteNote } from "../controllers/noteController.js";

const router = express.Router();

router.route("/").get(getNotes);
router.route("/").post(addNote);
router.route("/:id").get(getNoteById);
router.route("/:id").patch(updateNote);
router.route("/:id").delete(deleteNote);
router.route("/history/:id").get(getNoteHistory);

export default router;