import needle from "needle"
import cheerio from "cheerio"
import { crawlResponse } from ".";
import { io } from "../Server/Server";



interface asset {
    type : string,
    value : string;
}
export const crawlUrl = async (url: string) => {
    const {body} = await needle('get',url,{
        open_timeout: 3000,
        response_timeout : 3000
    }) 
 
    const $ = cheerio.load(body)
    const imageUrls: Array<string> = $("img,media").get().reduce((prev: string[],current) => 
        current.attribs.src ? [...prev, current.attribs.src] : prev, [])

    const linkUrl: Array<string> = $("a").get().reduce((prev: string[],current) => 
        current.attribs.href ? [...prev, current.attribs.href] : prev, [])

    const forms: Array<string> = $("form").get().reduce((prev: string[],current) => 
        current.attribs.id ? [...prev, current.attribs.id] : current, [])

    const uniqueLinks = [...new Set(linkUrl)]
   
    return {imageUrls,uniqueLinks,forms}
    

}

export const emitData = (url:string, data : crawlResponse) => {
    io.emit("Crawled", {
        url,
        data
    })
}

export const emitDone = () => {
    console.log("Done Believe it!")
    io.emit("Done")
}

