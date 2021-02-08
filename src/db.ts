import mongoose from "mongoose";
const url = "mongodb://localhost/lib";

try {
  var db = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("successfully connected with database");
} catch (error) {
  throw error;
}

export default db;
