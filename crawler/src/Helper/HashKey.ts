import crypto from 'crypto';
const md5Hash = crypto.createHash('md5');
const sha1Hash = crypto.createHash('md5');


export const hash = (x:string , algorithm: "md5Hash" | "sha1Hash" ):string => {
    return algorithm == "md5Hash" ? md5Hash.update(x, 'utf8').digest('hex'): sha1Hash.update(x, 'utf8').digest('hex')
}