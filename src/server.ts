import { Server } from "http";
import app from "./main";

try {
  var server = app.listen(app.get("port"));
  console.log("App is running on http://localhost:3000");
} catch (error) {
  throw error;
}

export default server;
