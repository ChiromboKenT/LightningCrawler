import parse from "url-parse"
export interface urlParse {
    hostname:string;
    origin:string;

}

export function parseUrl(url: string) : urlParse{
    // const parsedUrl = new Url(url)
    const parsedUrl = parse(url)

    return {
        hostname : parsedUrl.hostname,
        origin : parsedUrl.origin,
    }
}

