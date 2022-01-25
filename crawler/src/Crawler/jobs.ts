
import { Queue, JobsOptions } from "bullmq";

export const addUrl = async (name:string ,url: string[], queue: Queue, options?:JobsOptions ): Promise<void> => {
    await Promise.all(url.map(async (link) => {
         
        return await queue.add(name, link ,{
            ...options, attempts : 1,removeOnComplete: true, removeOnFail: 100, jobId: link,
        })
    }))
}