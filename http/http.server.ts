import express from "express";
import { GET_USER_FIXTURE } from "./http.fixtures";

const PORT = 3001;
const app = express();

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // 클라이언트의 주소
  next();
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

app.get("/user", (_req, res) => {
  res.send(GET_USER_FIXTURE);
});
