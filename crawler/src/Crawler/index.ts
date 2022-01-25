import {parseUrl} from "../Helper/ParseUrl"
import { Queue, Worker, Job } from 'bullmq'
import { addUrl } from "./jobs";
import { exitCode } from "process";
import { crawlUrl } from "./worker-process";

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
    //Create URL Queue
    const urlFrontier = new Queue('URL Frontier');
    
    //Create Crawl Response Queue
    const urlResponseQueue = new Queue('URL Response')
    

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
        await addUrl("Response", returnvalue.uniqueLinks,urlResponseQueue)
        
       
    });

    const responseWorker = new Worker("URL Response", async (job: Job) => {
        try{
            //Validate url
            //Check if crawled
            //Add priority
            //Add to Url Frontier
            
            
            return 'some value'
        }catch(err){
            console.log(err)
            throw new Error("Error with crawl worker")
        }
    });

    responseWorker.on('completed', (job: Job, returnvalue:any ) => {
        // Add Links to queue
        console.log(`Completed Link: ${job.data}`)
        
    
    });


}
initiateCrawl()