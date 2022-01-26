import { Router } from "express";
import { crawlController } from "../Controllers/crawl";

export const router = Router()

router.get("/", crawlController)