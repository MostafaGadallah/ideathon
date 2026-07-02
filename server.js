import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/create", (req, res) => {
 
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});