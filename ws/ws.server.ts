import { WebSocketServer } from "ws";
import { MESSAGE_FIXTURE } from "./ws.fixtures";

const PORT = 3002;
const wss = new WebSocketServer({ port: PORT });

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  ws.send(JSON.stringify(MESSAGE_FIXTURE));
});
