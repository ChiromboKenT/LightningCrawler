
import { Queue, JobsOptions } from "bullmq";
import { config } from "../Configs/config";
import { urlParse } from "../Helper/Helpers";


export const addUrl = async (name:string ,url: string[], queue: Queue, options?:JobsOptions ): Promise<void> => {
    await Promise.all(url.map(async (link) => await queue.add(name, url ,{
        ...options, attempts : 1
    })))
}