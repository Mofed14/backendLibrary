import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import books from "./routing/booksRouter";

const app = express();
const port = 4000;
mongoose.connect("mongodb://localhost/lib");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/books", books);

async function server() {
  try {
    await app.listen(port);
    console.log(`server is listening on ${port}`);
  } catch (error) {
    throw error;
  }
}

server();
