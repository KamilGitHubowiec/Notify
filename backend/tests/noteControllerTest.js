const asyncHandler = require("express-async-handler");
const Note = require('./noteModelTest');

module.exports.getNotes = asyncHandler(async (req, res) => {
  const data = await Note.find({});
  res.json(data);
})

module.exports.addNote = asyncHandler(async (req, res) => {
  const data = await Note.create(req.body);
  res.json(data);
})

module.exports.deleteNote = asyncHandler(async (req, res) => {
  const data = await Note.remove(req);
  res.json(data);
})
 
// module.exports.addNote = async (note) => {
//   if (!note)
//     throw new Error('Missing note');
//   await Note.create(note);
// }

// module.exports.getNotes = async (note) => {
//   if (!note)
//     throw new Error('Missing note');
//   await Note.find(note);
// }

// module.exports.deleteNote = async (note) => {
//   if (!note)
//     throw new Error('Missing note');
//   await Note.remove(note);
// }

// module.exports.update = async (note) => {
//   if (!note)
//     throw new Error('Missing note');
//   await noteSchemaTest.create(note);
// }