import dotenv from "dotenv";
import notes from "./data/notes.js";
import Note from "./models/noteModel.js";
import connectDatabase from "./config/database.js";

dotenv.config();
connectDatabase();

const importData = async () => {
  try {
    await Note.deleteMany();
    const sampleNotes =  await Note.insertMany(notes);
    await Note.insertMany(sampleNotes);
    console.log("Data imported");
    process.exit();
  } catch(error) {
    console.error(`${error}`);
    process.exit(1);
  }
}

const destroyData = async () => {
  try {
    await Note.deleteMany();
    console.log("Data destroyed!");
    process.exit();
  } catch(error) {
    console.error(`${error}`);
    process.exit(1);
  }
}

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}