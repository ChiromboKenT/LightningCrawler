import { Request, Response } from "express";
import { crawlRequestQueue } from "../Server/Server";
import {Worker, isMainThread, parentPort, workerData} from "worker_threads"

export const crawlController = async (req :Request,res: Response) => {
    try{
       
        //import worker and add Job to Queue
        await crawlRequestQueue.add("initiate crawl",req.body.url, {
            removeOnComplete: true, removeOnFail: 5, jobId: req.body.url,
        } )
        console.log(await crawlRequestQueue.getActiveCount())
        res.send("Crawling")
    }catch(err){
        console.log("Error")
    }
}