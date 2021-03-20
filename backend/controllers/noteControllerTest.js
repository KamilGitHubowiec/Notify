const noteSchemaTest = require('../models/noteModelTest');

module.exports.create = async (note) => {
  if (!note)
    throw new Error('Missing note');
  await noteSchemaTest.create(note);
}

module.exports.get = async (note) => {
  if (!note)
    throw new Error('Missing note');
  await noteSchemaTest.find(note);
}

module.exports.delete = async (note) => {
  if (!note)
    throw new Error('Missing note');
  await noteSchemaTest.remove(note);
}

// module.exports.update = async (note) => {
//   if (!note)
//     throw new Error('Missing note');
//   await noteSchemaTest.create(note);
// }