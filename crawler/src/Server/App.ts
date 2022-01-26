

import express, { Application } from "express";
import cors from "cors"
import {router} from "../Routes/CrawlRouter"


const app : Application = express()
//Set Up Express Middleware
const corsOptions = {
    origin: process.env.CLIENT_ORIGIN || "http://localhost:3000"
  };
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/crawl", router)

app.get("/", (req,res) => {
    res.send('<div>Hello</div>')
})



export default app