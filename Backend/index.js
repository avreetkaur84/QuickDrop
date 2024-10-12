import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";

import connectToMongoDB from "./db/connect2db.js";

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());


app.get("/", (req, res) => {
    res.send("QuickDrop is working");
})

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Running on http://localhost:${PORT}/`);
})