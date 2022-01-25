
import { Queue, JobsOptions } from "bullmq";
import { config } from "../Configs/config";
import { hash } from "../Helper/HashKey";
import { urlParse } from "../Helper/ParseUrl";


export const addUrl = async (name:string ,url: string[], queue: Queue, options?:JobsOptions ): Promise<void> => {
    await Promise.all(url.map(async (link) => {
        const jobId = hash(link, "md5Hash")
        return await queue.add(name, link ,{
            ...options, attempts : 1, jobId
        })
    }))
}