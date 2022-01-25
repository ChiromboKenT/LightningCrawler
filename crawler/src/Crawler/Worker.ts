import { Job, WorkerListener } from "bullmq"

export const OnCompleted = (job: Job, returnvalue: any) => {
    // Do something with the return value.
    console.log(returnvalue)
}