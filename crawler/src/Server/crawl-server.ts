import app from "./app";
import http from "http";
import {Server }from "socket.io"
import { config } from "../configs/config";
import bullmq, { Job, Queue, Worker } from "bullmq"
import { initiateCrawl } from "../crawler/index";

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

//Export Queue to handle Crawl Requests
export const crawlRequestQueue = new Queue('crawl request');
(async () => {
  await crawlRequestQueue.obliterate({force:true})
})()

const requestWorker = new Worker("crawl request", async (job:Job) => {
  await initiateCrawl(job.data)
})

requestWorker.on("error", (failedReason: Error) => {
  console.log(failedReason)
})

requestWorker.on("completed", (job:Job, returnvalue:any) => {
  console.log("It finished Believe it or not")
  console.log(job.data)
})