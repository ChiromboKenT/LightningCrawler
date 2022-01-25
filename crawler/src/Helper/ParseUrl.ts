import parse from "url-parse"
export interface urlParse {
    hostname:string;
    origin:string;
    protocol: string;
    pathname : string;
}

export function parseUrl(url: string) : urlParse{
    // const parsedUrl = new Url(url)
    const parsedUrl = parse(url)
    return {
        hostname : parsedUrl.hostname,
        origin : parsedUrl.origin,
        protocol: parsedUrl.protocol,
        pathname : parsedUrl.pathname,
    }
}
