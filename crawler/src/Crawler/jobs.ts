
import { Queue, JobsOptions } from "bullmq";
import { v4 as uuidv4 } from 'uuid';

export const addUrl = async (name:string ,url: string[], queue: Queue, options?:JobsOptions ): Promise<void> => {
    await Promise.all(url.map(async (link) => {
        const customJobId = uuidv4()
        return await queue.add(name, link ,{
            ...options, attempts : 1, jobId: customJobId
        })
    }))
}