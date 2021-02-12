import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import books from "./routing/booksRouter";
import categories from "./routing/categoryRouter";
import users from "./routing/userRouter";

const app = express();
const port = 4000;
mongoose.connect("mongodb://localhost/libr");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/books", books);
app.use("/categories", categories);
app.use("/users", users);

async function server() {
  try {
    await app.listen(port);
    console.log(`server is listening on ${port}`);
  } catch (error) {
    throw error;
  }
}

server();
