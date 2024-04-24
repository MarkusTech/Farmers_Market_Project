import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import helmel from "helmet";
import colors from "colors";

// dotenv config
dotenv.config();
const port = process.env.PORT || 5000;

// Rest OBJ
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmel());
app.use(bodyParser.urlencoded({ extended: false }));

// Rest API
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// event listener
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`.bgGreen);
});
