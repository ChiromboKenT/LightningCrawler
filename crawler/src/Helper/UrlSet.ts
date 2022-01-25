export interface UrlSetInterface<T> {
    hasBeenCrawled : Set<T>;

    //Methods
    contains( url: string) : boolean;
    addToCrawledUrlSet(url:string):void;
    getCrawledrlSet():Set<T>;
}


class crawledSet implements UrlSetInterface<string>{
    hasBeenCrawled : Set<string>;
    constructor();
    constructor(url:string);
    constructor(url?:string, isValid? :boolean ){
        this.hasBeenCrawled = url ? new Set(url) : new Set();
    }
    
   
    
    contains(url:string){
        return this.hasBeenCrawled.has(url);
    }
    addToCrawledUrlSet(url:string){
        this.hasBeenCrawled.add(url);
    }
  
    getCrawledrlSet(){
        return this.hasBeenCrawled;
    }
    
    
    
}

export default crawledSet;
export type UrlSetType = UrlSetInterface<string>;