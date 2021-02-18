import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import books from "./routing/booksRouter";
import categories from "./routing/categoryRouter";
import users from "./routing/userRouter";
import admin from "./routing/adminRouter";

const app = express();
const port = 4000;

async function db() {
  try {
    await mongoose.connect("mongodb://localhost/libr");
  } catch (error) {
    throw error;
  }
}
db();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/books", books);
app.use("/categories", categories);
app.use("/users", users);
app.use("/admin", admin);

async function server() {
  try {
    await app.listen(port);
    console.log(`server is listening on ${port}`);
  } catch (error) {
    throw error;
  }
}

server();
