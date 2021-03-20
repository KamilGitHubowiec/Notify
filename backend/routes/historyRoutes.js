import express from "express";
import { getNotesFromHistory, addNoteToHistory } from "../controllers/historyController.js";

const router = express.Router();

router.route("/").get(getNotesFromHistory);
router.route("/").post(addNoteToHistory);

export default router;
