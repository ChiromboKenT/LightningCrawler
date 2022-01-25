import { config } from "../Configs/config"
import { parseUrl } from "./ParseUrl";

export const isValidUrl = (url: string, host: string): boolean => {
    const {hostname,protocol,pathname} = parseUrl(url)
    if(protocol !== "http:" && protocol !== "https:"){
        return false
    }
    const domainParts = hostname.split('.')
    if(config.ALLOW_EXTERNAL){
        return !config.ALLOW_SUB_DOMAINS && domainParts.length <= 3 ? true : false
    }else{
        if(!url.includes(host)){
            return false
        }    
    }
   
    return true
}