import crypto from 'crypto';
const md5Hash = crypto.createHash('md5');
;


export const hash = (x:string , algorithm: "md5" | "sha1" ):string => crypto.createHash(algorithm).update(x, 'utf8').digest('hex')