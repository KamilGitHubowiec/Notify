const express = require("express");
const noteControllerTest = require("./noteControllerTest");

const router = express.Router();

router.route("/").get(noteControllerTest.getNotes);
router.route("/").post(noteControllerTest.addNote);
router.route("/:id").delete(noteControllerTest.deleteNote);
// router.route("/:id").get(getNoteById);
// router.route("/:id").patch(updateNote);
// router.route("/history/:id").get(getNoteHistory);

module.exports = router;