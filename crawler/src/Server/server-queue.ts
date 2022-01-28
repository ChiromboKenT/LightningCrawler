
import bullmq, { Job, Queue, Worker, RedisClient } from "bullmq"
import { initiateCrawl } from "../crawler/index";
import { connection } from "./app";



//Export Queue to handle Crawl Requests
export const crawlRequestQueue = new Queue('crawl request',{connection});
  (async () => {
    await crawlRequestQueue.obliterate({force:true})
  })()
  
  const requestWorker = new Worker("crawl request", async (job:Job) => {
    await initiateCrawl(job.data)
  },{connection})
  
  requestWorker.on("error", (failedReason: Error) => {
    console.log(failedReason)
  })
  
  requestWorker.on("completed", (job:Job, returnvalue:any) => {
    console.log("It finished Believe it or not")
    console.log(job.data)
  })