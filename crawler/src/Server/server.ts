import app from "./App";
import http from "http";
import { Server } from "socket.io";
import { config } from "../Configs/config";

const port = config.APP_PORT 
const server = http.createServer(app);
export const io = new Server(server,{
    cors: {
      origin: ["http://127.0.0.1:8081", "https://my-other-frontend.com", "http://localhost:3000"],
      methods: ["GET", "POST"]
    }
  });

io.on("connection", (socket) => {
    console.log("Connected")
  });
server.listen(config.APP_PORT, () => console.log(`Listening on PORT ${config.APP_PORT}`));