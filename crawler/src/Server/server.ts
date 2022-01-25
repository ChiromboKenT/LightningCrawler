

import express, { Application } from "express";
import cors from "cors"


const app : Application = express()
//Set Up Express Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.send('<div>Hello</div>')
})

export default app