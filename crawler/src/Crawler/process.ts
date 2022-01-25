import needle from "needle"
import cheerio from "cheerio"


interface asset {
    type : string,
    value : string;
}
export const fetchUrl = async (url: string) => {
    const {body} = await needle('get',url) 
 
    const $ = cheerio.load(body)

    const imageUrls: Array<string> = $("img,media").get().reduce((prev,current) => 
        current.attribs.src ? [...prev, current.attribs.src] : prev, [])

    const linkUrl: Array<string> = $("a").get().reduce((prev,current) => 
        current.attribs.href ? [...prev, current.attribs.href] : prev, [])

    const forms: Array<string> = $("form").get().reduce((prev,current) => 
        current.attribs.id ? [...prev, current.attribs.id] : current, [])

    return {imageUrls,linkUrl,forms}
}
