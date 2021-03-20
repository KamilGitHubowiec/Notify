import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";
import noteRoutes from "./routes/noteRoutes.js";
import historyRoutes from "./routes/historyRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();
const PORT = process.env.PORT || 5000;
connectDatabase();
dotenv.config();
app.use(express.json());

app.get("/", (request, response) => response.send("API is runnign."));

app.use("/notes", noteRoutes);
app.use("/history", historyRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`));