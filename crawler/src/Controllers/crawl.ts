import { Request, Response } from "express";
import { crawlRequestQueue } from "../Server/Server";


export const crawlController = async (req :Request,res: Response) => {
    try{
        //import worker and add Job to Queue
        await crawlRequestQueue.add("initiate crawl","https://www.npmjs.com/search?q=nodejs%20parallel", {
            removeOnComplete: true, removeOnFail: 5, jobId: "https://www.npmjs.com/search?q=nodejs%20parallel",
        } )
        console.log(await crawlRequestQueue.getActiveCount())
        res.send("Crawling")
    }catch(err){
        console.log("Error")
    }
}