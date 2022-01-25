import {parseUrl} from "../Helper/Helpers"
import { Queue, Worker, Job } from 'bullmq'
import UrlSet from "../Helper/UrlSet";
import { addUrl } from "./jobs";
import { exitCode } from "process";
import { fetchUrl } from "./process";

export const initiateCrawl =  async (url:string): Promise<void> => {
    const parsedUrl = parseUrl(url)
    const {hostname, origin} = parsedUrl
    if(hostname.length <= 0){
        throw Error("Invalid Source Url")
    }
    //Create URL Queue
    const urlFrontier = new Queue('URL Frontier');
    
    //Create Crawl Response Queue
    const urlResponseQueue = new Queue('URL Response')
    
    //Create URLSet
    const urlCategories = new UrlSet(url, true);

    //Add Job To Queue
    await addUrl("Crawl",[url],urlFrontier)

    //TODO add multi threading for multiple workers
    const worker = new Worker("URL Frontier", async (job: Job) => {
        try{
            //Fetch & Crawl Site
            const result = await fetchUrl(url)
         
        
            // Optionally sending an object as progress
            job.updateProgress({foo: "34"});
            
            // Do something with job
            return result;
        }catch(err){
            console.log(err)
            throw exitCode
        }
        
      });

    worker.on('completed', (job: Job, returnvalue: any) => {
        // Do something with the return value.
        console.log(returnvalue)
      });


}
initiateCrawl("https://www.lightningreach.org/")