import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  version: {
    type: Number,
    required: true,
    default: 0
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    required: true,
    default: new Date()
  },
  history: {
    type: Array,
    required: true,
    default: []
  },
}, {
  versionKey: false
})

const Note = mongoose.model("Note", noteSchema);

export default Note;