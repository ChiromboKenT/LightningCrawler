import {parseUrl} from "../Helper/ParseUrl"
import { Queue, Worker, Job } from 'bullmq'
import { addUrl } from "./jobs";
import { exitCode } from "process";
import { crawlUrl } from "./worker-process";
import { isValidUrl,containsProtocol } from "../Helper/validateUrl";
import crawledSet from "../Helper/UrlSet";

interface crawlResponse{
    imageUrls: string[];
    uniqueLinks: string[];
    forms: string[];
}

export const initiateCrawl =  async (url:string = "https://www.lightningreach.org/"): Promise<void> => {
    const parsedUrl = parseUrl(url)
    if(parsedUrl.origin.length <= 0){
        throw Error("Invalid Source Url")
    }
    //Define Start Host
    let host = parsedUrl.origin
    //Create URL Queue
    const urlFrontier = new Queue('URL Frontier');
    
    //Create Crawl Response Queue
    const urlResponseQueue = new Queue('URL Response')
    
    const hasBeenCrawled = new crawledSet

    //Add Job To Queue
    await addUrl("Crawl",[parsedUrl.origin],urlFrontier)

    //TODO add multi threading for multiple workers
    const crawlWorker = new Worker("URL Frontier", async (job: Job) => {
        try{
            //Fetch & Crawl Site
            const result = await crawlUrl(job.data)
            // Do something with job
            return result;
        }catch(err){
            console.log(err)
            throw new Error("Error with crawl worker")
        }
    
    });
    crawlWorker.on('completed',async (job: Job, returnvalue:crawlResponse ) => {
        // Add Links to queue
        
        returnvalue.uniqueLinks.length > 0 && 
            await addUrl("Response", returnvalue.uniqueLinks,urlResponseQueue)

        //Temporary right crawled to memory TODO -> Replace with cahe and database
        hasBeenCrawled.addToCrawledUrlSet(job.data)
        //console.log(`crawled: ${job.data}`)

    });

    const responseWorker = new Worker("URL Response", async (job: Job) => {
        try{
            //Validate url
            let rawJobData = containsProtocol(job.data, host)
            let data = ""
            if(isValidUrl(rawJobData, host)){
                //Check if crawled TODO :access cache and Database can use a Bloom filter with Redis & mongo 
                
                data = !hasBeenCrawled.contains(rawJobData) ? rawJobData : "";
                
            }
            return data
        }catch(err){
            console.log(err)
            throw new Error("Error with crawl worker")
        }
    });


    responseWorker.on('completed',async (job: Job, returnvalue:any) => {
        // Add Links to queue
        //Add to Url Frontier
        returnvalue.length > 0 && await addUrl("URL Frontier",[returnvalue],urlFrontier)
        
    
    });

    responseWorker.on("error", (failedReason: Error) => {
        console.log(failedReason)
    })
    crawlWorker.on("error", (failedReason: Error) => {
        console.log(failedReason)
    })

    crawlWorker.once("closing", (msg:string) => {
        console.log("Close")
    })


}
initiateCrawl("https://chateaugateaux.co.za/")