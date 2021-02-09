import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("The sedulous hyena ate");
});

async function server() {
  try {
    await app.listen(port);
    console.log(`server is listening on ${port}`);
  } catch (error) {
    throw error;
  }
}

server();
