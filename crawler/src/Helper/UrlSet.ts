export interface UrlSetInterface<T> {
    validUrlSet : Set<T>;
    invalidUrlSet : Set<T>;
    externalUrlSet : Set<T>;

    //Methods
    contains(set: Set<T>, url: string) : boolean;
    addToValidUrlSet(url:string):void;
    addToExternalUrlSet(url:string):void;
    addToInvalidUrlSet(url:string):void;
    getValidUrlSet():Set<T>;
    getExternalUrlSet():Set<T>;
    getInvalidUrlSet():Set<T>;

}


class UrlSet implements UrlSetInterface<string>{
    validUrlSet : Set<string>;
    invalidUrlSet : Set<string>;
    externalUrlSet : Set<string>;
    constructor();
    constructor(url:string, isValid?:boolean );
    constructor(url?:string, isValid? :boolean ){
        this.validUrlSet = url && isValid ? new Set(url) : new Set();
        this.invalidUrlSet = url && !isValid ? new Set(url) : new Set();
        this.externalUrlSet = new Set();
    }
    
   
    
    contains(urlSet :Set<string> , url:string){
        return urlSet.has(url);
    }
    addToValidUrlSet(url:string){
        this.addToValidUrlSet(url);
    }
    addToExternalUrlSet(url:string){
        this.addToExternalUrlSet(url);
    }
    addToInvalidUrlSet(url:string){
        this.addToInvalidUrlSet(url);
    }
    getValidUrlSet(){
        return this.validUrlSet;
    }
    getExternalUrlSet(){
        return this.externalUrlSet;
    }
    getInvalidUrlSet(){
        return this.invalidUrlSet;
    }
    
    
}

export default UrlSet;
export type UrlSetType = UrlSetInterface<string>;