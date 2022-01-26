import { Router } from "express";
import {initiateCrawl} from "../Crawler/index"

export const router = Router()

router.get("/", initiateCrawl)