import express from "express";

const app = express();

app.set("port", process.env.PORT || 3000);

console.log("Hello");

export default app;
