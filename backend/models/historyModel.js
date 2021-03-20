import mongoose from "mongoose";

const historySchema = mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  version: {
    type: Number,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  history: {
    type: Array,
  },
})

const History = mongoose.model("History", historySchema, "history");

export default History;